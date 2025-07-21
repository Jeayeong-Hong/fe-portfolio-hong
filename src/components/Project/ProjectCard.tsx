type ProjectCardProps = {
    title: string;
    description: string;
    image: string;
    onClick: () => void;
};

export default function ProjectCard({ title, description, image, onClick }: ProjectCardProps) {
    return (
        <div
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition cursor-pointer w-64 mx-auto"
            onClick={onClick}
        >
            <div className="aspect-square">
                <img
                    src={image}
                    alt={`${title} 시작 화면`}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
        </div>
    );
}
