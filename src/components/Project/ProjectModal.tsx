import { Project } from "../../types/project";

type ProjectModalProps = {
    project: Project;
    onClose: () => void;
    handleOpenFullscreen: (images: string[], index: number) => void;
};

export default function ProjectModal({ project, onClose, handleOpenFullscreen }: ProjectModalProps) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative scrollbar-hide">
                {/* 닫기 버튼 */}
                <button
                    className="fixed top-4 right-4 text-gray-500 hover:text-gray-700 z-50"
                    onClick={onClose}
                >
                    ✕
                </button>

                {/* 콘텐츠 */}
                <div className="space-y-10">
                    {/* 헤더 */}
                    <div className="space-y-4">
                        <img
                            src={project.images[0].src}
                            alt={project.images[0].alt}
                            className="w-full rounded-lg shadow object-cover h-64"
                        />
                        <h3 className="text-3xl font-bold text-center">{project.title}</h3>
                    </div>

                    {/* 개요 */}
                    <div>
                        <h4 className="text-xl font-semibold mb-2">개요</h4>
                        <p className="text-sm text-gray-700">{project.overview}</p>
                    </div>

                    {/* 주요 기능 */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4 mt-6">주요 기능</h4>
                        <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
                            {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ol>
                    </div>

                    {/* 기술 스택 */}
                    <div>
                        <h4 className="text-xl font-semibold mb-2 mt-6">사용 기술</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, i) => (
                                <span key={i} className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs">{tech}</span>
                            ))}
                        </div>
                    </div>

                    {/* 스크린샷 */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4 mt-6">Screenshots</h4>
                        <div className="grid grid-cols-3 gap-4">
                            {project.images.map((img, index) => (
                                <div
                                    key={index}
                                    onClick={() =>
                                        handleOpenFullscreen(
                                            project.images.map((img) => img.src),
                                            index
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

                    {/* 링크 버튼 */}
                    <div className="flex gap-4 justify-center mt-10">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition text-sm"
                            >
                                GitHub
                            </a>
                        )}
                        {project.site && (
                            <a
                                href={project.site}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition text-sm"
                            >
                                배포 사이트
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
