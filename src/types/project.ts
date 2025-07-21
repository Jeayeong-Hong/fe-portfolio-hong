export type Project = {
    id: string;
    title: string;
    description: string;
    overview?: string;
    features?: string[];
    techStack?: string[];
    images: { src: string; alt: string }[];
    github?: string;
    site?: string;
};
