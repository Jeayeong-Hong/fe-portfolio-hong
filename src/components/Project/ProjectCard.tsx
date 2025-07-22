type ProjectCardProps = {
    title: string;
    description: string;
    image: string;
    onClick: () => void;
};

export default function ProjectCard({ title, description, image, onClick }: ProjectCardProps) {
    return (
        <div
            className="group bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition cursor-pointer w-64 mx-auto"
            onClick={onClick}
        >
            {/* 이미지 영역 */}
            <div className="relative aspect-square">
                <img
                    src={image}
                    alt={`${title} 시작 화면`}
                    className="w-full h-full object-cover"
                />

                {/* 오버레이 */}
                <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <span className="text-sm font-semibold text-gray-800">자세히 보기</span>
                </div>
            </div>

            {/* 텍스트 영역 */}
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
        </div>
    );
}
