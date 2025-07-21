import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import FullscreenImageModal from "./FullscreenImageModal";
import { projects } from "../../data/projects";
import { Project } from "../../types/project"; // types 폴더가 없다면 위에 따로 정의해도 됩니다

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [fullscreenImages, setFullscreenImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
        setFullscreenImages([]);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleOpenFullscreen = (images: string[], index: number) => {
    setFullscreenImages(images);
    setCurrentIndex(index);
  };

  return (
    <section id="projects" className="py-24 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.images[0].src}
                onClick={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          handleOpenFullscreen={handleOpenFullscreen}
        />
      )}

      {fullscreenImages.length > 0 && (
        <FullscreenImageModal
          images={fullscreenImages}
          currentIndex={currentIndex}
          handlePrev={() =>
            setCurrentIndex((prev) =>
              prev === 0 ? fullscreenImages.length - 1 : prev - 1
            )
          }
          handleNext={() =>
            setCurrentIndex((prev) =>
              prev === fullscreenImages.length - 1 ? 0 : prev + 1
            )
          }
          handleClose={() => setFullscreenImages([])}
        />
      )}
    </section>
  );
}
