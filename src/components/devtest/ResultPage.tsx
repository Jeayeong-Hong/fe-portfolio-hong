import { useSearchParams, useNavigate } from 'react-router-dom';
import results from "../../data/results";
import { useEffect, useState } from 'react';
declare global {
    interface Window {
        Kakao: any; // Kakao SDK 타입 정의
    }
}

function ResultPage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    // URL 쿼리에서 type 값을 가져옵니다 (예: /result?type=B)
    const type = searchParams.get('type');

    if (!type || !results[type]) {
        // type이 없거나 결과에 해당하는 타입이 없으면 오류 처리
        return (
            <div>
                <p>결과 정보가 없습니다.</p>
                <button onClick={() => navigate('/')}>처음으로</button>
            </div>
        );
    }

    const result = results[type];

    // 카카오톡 SDK 준비 여부 확인용 state
    const [isKakaoReady, setIsKakaoReady] = useState(false);

    // Kakao SDK 초기화
    useEffect(() => {
        const waitForKakao = setInterval(() => {
            if (window.Kakao && window.Kakao.init && !window.Kakao.isInitialized()) {
                window.Kakao.init('93d7ccc88148e4849322b7ccbe93e8f1');
                console.log('✅ Kakao 초기화됨');
            }

            if (window.Kakao && window.Kakao.Share) {
                console.log('✅ Kakao.Share 준비 완료');
                setIsKakaoReady(true);
                clearInterval(waitForKakao);
            }
        }, 300);
    }, []);

    // 결과 페이지 링크 복사
    const shareResult = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url);
        alert('결과 링크가 복사되었습니다!');
    };

    // 카카오톡 공유하기
    const shareToKakao = () => {
        if (!isKakaoReady) {
            alert('카카오 공유 기능이 아직 준비되지 않았습니다. 잠시 후 다시 시도해주세요.');
            return;
        }

        window.Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: result.title,
                description: result.description,
                imageUrl: 'https://via.placeholder.com/300x200.png?text=Dev+Type',
                link: {
                    mobileWebUrl: window.location.href,
                    webUrl: window.location.href,
                },
            },
            buttons: [
                {
                    title: '결과 보기',
                    link: {
                        mobileWebUrl: window.location.href,
                        webUrl: window.location.href,
                    },
                },
            ],
        });
    };

    // 트위터 공유하기
    const shareToTwitter = () => {
        const text = `나는 ${result.title} 유형의 개발자! 🧑‍💻\n결과 보러 가기 👉 ${window.location.href}`;
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
        window.open(twitterUrl, '_blank');
    };

    // 페이스북 공유하기
    const shareToFacebook = () => {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
        window.open(facebookUrl, '_blank');
      };

    return (
        <div>
            <h1>{result.title}</h1>
            <p>{result.description}</p>
            <h3>추천 기술 스택:</h3>
            <ul>
                {result.tech.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>

            <button onClick={() => navigate('/')}>다시하기</button>
            <button onClick={shareResult}>🔗 결과 링크 복사</button>
            <button onClick={shareToKakao}>🟡 카카오톡으로 공유하기</button>
            <button onClick={shareToTwitter}>🐦 트위터로 공유하기</button>
            <button onClick={shareToFacebook}>🔵 페이스북으로 공유하기</button>
        </div>
    );
}

export default ResultPage;
