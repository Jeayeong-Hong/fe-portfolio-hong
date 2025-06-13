import { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../../data/questions";


function QuestionPage() {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState({
    A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0
  });

  // ✅ 변수 이름 오타 수정
  const currentQuestion = questions[currentIndex];

  // 선택지 클릭 시 처리 함수
  const handleOptionClick = (type:string) => {
    setScores((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));

    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
    } else {
      // 가장 높은 점수의 type 계산
      const topType = Object.keys(scores).reduce((a, b) =>
        scores[a] > scores[b] ? a : b
      );
      // 결과 페이지로 이동 (type 쿼리로 넘기기)
      navigate(`../result?type=${topType}`);    
    }
  };

  // 화면 출력
  return (
    <div className="max-w-xl mx-auto px-4 pt-20 text-center">
      <h2 className="text-2xl font-bold mb-8">
        Q({currentIndex + 1}/{currentQuestion.question})
      </h2>
      <ul className="grid gap-4">
        {currentQuestion.options.map((opt, index) => (
          <li key={index}>
            <button
              className="btn btn-primary w-full"
              onClick={() => handleOptionClick(opt.type)}
            >
              {opt.text}
            </button>
          </li>
          ))}
      </ul>
    </div>
  );
}

export default QuestionPage;
