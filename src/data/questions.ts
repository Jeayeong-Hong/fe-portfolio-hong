const questions = [
  {
    question: "새로운 프로젝트가 시작됐다. 당신은?",
    options: [
      { text: "바로 코드를 짜며 감을 잡는다", type: "A" },
      { text: "전체 구조를 먼저 그려본다", type: "B" },
      { text: "누가 뭘 할지 나눈다", type: "D" },
      { text: "레퍼런스를 찾으며 방향을 잡는다", type: "G" }
    ]
  },
  {
    question: "코딩을 배울 때 가장 잘 맞는 방법은?",
    options: [
      { text: "튜토리얼 보며 따라하기", type: "G" },
      { text: "바로 작동하는 것부터 해보기", type: "A" },
      { text: "개념과 흐름을 정리하며 익히기", type: "B" },
      { text: "다른 사람과 함께 질문하며", type: "D" }
    ]
  },
  {
    question: "문제가 발생했을 때 당신의 반응은?",
    options: [
      { text: "스스로 해결하려고 끝까지 해본다", type: "C" },
      { text: "관련 문서를 다시 본다", type: "G" },
      { text: "다른 사람에게 바로 물어본다", type: "D" },
      { text: "일단 실행해보고 고친다", type: "F" }
    ]
  },
  {
    question: "디자인을 대할 때 당신은?",
    options: [
      { text: "보기에 예쁜 게 중요하다", type: "E" },
      { text: "기능만 되면 된다", type: "F" },
      { text: "색 구성, UI 규칙에 관심이 많다", type: "E" },
      { text: "디자인보다 개발이 더 편하다", type: "A" }
    ]
  },
  {
    question: "협업 도중 충돌이 생기면?",
    options: [
      { text: "최대한 내 의견을 관철한다", type: "C" },
      { text: "팀의 분위기를 우선으로 본다", type: "D" },
      { text: "객관적인 기준으로 판단한다", type: "B" },
      { text: "어차피 다시 바뀌니 빠르게 결론낸다", type: "F" }
    ]
  },
  {
    question: "여유 시간이 생겼다. 당신은?",
    options: [
      { text: "새로운 기술을 시도해본다", type: "G" },
      { text: "지금 하고 있는 작업을 정리한다", type: "E" },
      { text: "다른 팀원 도와주러 간다", type: "D" },
      { text: "좀 쉬면서 생각을 정리한다", type: "C" }
    ]
  },
  {
    question: "새로운 아이디어가 떠올랐다면?",
    options: [
      { text: "바로 시제품 만들어본다", type: "A" },
      { text: "기획서를 써본다", type: "B" },
      { text: "비슷한 사례를 찾아본다", type: "G" },
      { text: "다른 사람 의견부터 묻는다", type: "D" }
    ]
  },
  {
    question: "코드를 짤 때 가장 거슬리는 건?",
    options: [
      { text: "줄 정렬이 안 맞는 것", type: "E" },
      { text: "오류 로그가 반복되는 것", type: "F" },
      { text: "구조가 엉켜서 복잡한 것", type: "B" },
      { text: "문서나 주석이 없는 것", type: "G" }
    ]
  },
  {
    question: "당신이 맡은 역할은 주로?",
    options: [
      { text: "프론트엔드 구현", type: "E" },
      { text: "백엔드/로직 처리", type: "F" },
      { text: "기획·UX 설계", type: "B" },
      { text: "소통·협업 조율", type: "D" }
    ]
  },
  {
    question: "테스트가 끝났을 때 가장 먼저 하는 일은?",
    options: [
      { text: "결과를 문서화한다", type: "G" },
      { text: "다음 기능을 바로 시작", type: "A" },
      { text: "구조나 코드를 다시 정리한다", type: "E" },
      { text: "팀원들과 결과 공유", type: "D" }
    ]
  }
];

export default questions;
