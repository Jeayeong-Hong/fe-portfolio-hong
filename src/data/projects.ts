export interface Project {
    id: string;
    title: string;
    mainImage?: string; // 썸네일 이미지용
    description?: string; // 카드에 짧게 표시
    overview?: string;    // 모달에 표시
    summary?: string;     // imgsearch 에서 사용
    features: string[];
    techStack?: string[]; // devtest
    tags?: string[];      // imgsearch
    techDetails?: string;
    images: {
        src: string;
        alt: string;
        index?: number;
    }[];
    github?: string;
    site?: string;
    demo?: string;
}
export const projects: Project[] = [
    {
        id: "devtest",
        title: "개발자 유형 테스트",
        description: "",
        overview: "간단한 선택형 질문을 통해 사용자의 개발 성향을 분석하고, 결과에 맞는 개발자 유형을 시각적으로 안내하는 테스트 웹앱입니다.",
        features: [
            "상태 관리로 질문 흐름 및 응답 데이터 처리",
            "선택지 기반 유형 점수 계산 및 결과 페이지 분기",
            "결과 페이지 내 URL 공유 기능 제공",
            "Tailwind 기반 반응형 UI 구성",
            "Vercel을 통한 자동 배포 및 CI/CD 연동"
        ],
        techStack: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
        images: [
            { src: "/images/devtest_start.png", alt: "시작" },
            { src: "/images/devtest_question.png", alt: "질문" },
            { src: "/images/devtest_result.png", alt: "결과" },
        ],
        github: "https://github.com/Jeayeong-Hong/what-dev-are-you",
        site: "https://what-dev-are-you-tau.vercel.app/",
    },
    {
        id: "imgsearch",
        title: "이미지 검색기",
        description: "",
        overview: "사용자의 텍스트 입력을 기반으로 이미지를 검색하고, 결과를 시각적으로 출력하는 웹 애플리케이션입니다.",
        features: [
            "Flask 기반 백엔드 서버 구현 및 API 연동",
            "사용자 입력을 실시간 처리하여 이미지 검색 결과 반환",
            "이미지 클릭 시 전체화면 모달로 확대 및 탐색 가능",
            "반응형 UI 및 에러 대응 처리"
        ],
        techStack: ["React", "TypeScript", "Tailwind CSS", "Flask"],
        images: [
            { src: "/images/imagesearch_home.png", alt: "홈" },
            { src: "/images/imagesearch_result.png", alt: "결과" },
        ],
        github: "https://github.com/Jeayeong-Hong/image-search-app",
        site: "https://image-search-app-xgoney.vercel.app/"
    }
];
