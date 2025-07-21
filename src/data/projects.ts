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
        description: "간단한 질문으로 개발자 유형을 알려주는 웹 앱.",
        overview: "간단한 질문으로 개발자 유형을 알려주는 개인 프로젝트입니다.",
        features: [
            "시작 화면에서 테스트 시작",
            "질문 흐름 state 관리",
            "결과 페이지에서 유형별 결과 표시",
        ],
        techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
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
        description: "텍스트를 기반으로 이미지를 검색하는 웹 앱.",
        overview: "Flask 백엔드를 통해 이미지 검색 기능을 구현한 프로젝트입니다.",
        features: [
            "텍스트 입력 시 이미지 검색 결과 반환",
            "상세 페이지에서 이미지 확대 기능",
        ],
        techStack: ["React", "TypeScript", "Tailwind CSS", "Flask"],
        images: [
            { src: "/images/imagesearch_home.png", alt: "홈" },
            { src: "/images/imagesearch_result.png", alt: "결과" },
        ],
        github: "https://github.com/Jeayeong-Hong/image-searcher",
        site: "https://image-searcher.vercel.app/"
    }
];
