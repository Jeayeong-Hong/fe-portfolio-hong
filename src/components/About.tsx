export default function About() {
  return (
    <section id="about" className="py-24 bg-white text-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg mb-4">
          저는 직관적인 UI와 일관된 사용자 경험을 중요하게 생각하는 프론트엔드 개발자입니다.
          React와 TypeScript를 중심으로 다양한 웹 프로젝트를 진행해왔습니다.
        </p>
        <div className="flex justify-center gap-6 mt-6 text-blue-600 font-semibold">
          <span>React</span>
          <span>TypeScript</span>
          <span>Tailwind CSS</span>
          <span>Vite</span>
        </div>
      </div>
    </section>
  );
}
