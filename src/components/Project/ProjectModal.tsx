export default function ProjectModal({ onClose, handleOpenFullscreen }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative scrollbar-hide">
                <button
                    className="fixed top-4 right-4 text-gray-500 hover:text-gray-700 z-50"
                    onClick={onClose}
                >
                    ✕
                </button>

                <div className="space-y-10">
                    <div className="space-y-4">
                        <img
                            src="/images/devtest_start.png"
                            alt="DevTest 시작 화면"
                            className="w-full rounded-lg shadow object-cover h-64"
                        />
                        <h3 className="text-3xl font-bold text-center">개발자 유형 테스트</h3>
                    </div>

                    {/* 주요 설명, 기능, 기술 스택 동일 */}

                    {/* Screenshots */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4 mt-6">Screenshots</h4>
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { src: "/images/devtest_start.png", alt: "시작", index: 0 },
                                { src: "/images/devtest_question.png", alt: "질문", index: 1 },
                                { src: "/images/devtest_result.png", alt: "결과", index: 2 },
                            ].map((img) => (
                                <div
                                    key={img.index}
                                    onClick={() =>
                                        handleOpenFullscreen(
                                            [
                                                "/images/devtest_start.png",
                                                "/images/devtest_question.png",
                                                "/images/devtest_result.png",
                                            ],
                                            img.index
                                        )
                                    }
                                    className="cursor-pointer"
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full rounded-lg shadow object-cover h-32"
                                    />
                                    <p className="mt-1 text-xs text-gray-600 text-center">{img.alt}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
