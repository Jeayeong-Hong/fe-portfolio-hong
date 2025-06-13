export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-100 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* 프로젝트 카드 1 */}
          <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">개발자 유형 테스트</h3>
            <p className="text-sm text-gray-600 mb-4">
              간단한 질문을 통해 당신의 개발자 유형을 알려주는 웹 애플리케이션입니다.
            </p>
            <a href="/dev-test" className="text-blue-600 font-medium hover:underline">
              ➤ 자세히 보기
            </a>
          </div>

          {/* 프로젝트 카드 2 */}
          <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">AI 이미지 검색기</h3>
            <p className="text-sm text-gray-600 mb-4">
              키워드를 입력하면 AI 기반으로 관련 이미지를 검색해 보여주는 기능입니다.
            </p>
            <a href="/ai-search" className="text-blue-600 font-medium hover:underline">
              ➤ 자세히 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
