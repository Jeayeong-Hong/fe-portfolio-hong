export const projects = [
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
    // 다른 프로젝트 추가 가능
];
