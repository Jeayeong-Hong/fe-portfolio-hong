import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import FullscreenImageModal from "./FullscreenImageModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [fullscreenImages, setFullscreenImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
        setFullscreenImages([]);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleOpenFullscreen = (images, index) => {
    setFullscreenImages(images);
    setCurrentIndex(index);
  };

  return (
    <section id="projects" className="py-24 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

        <ProjectCard
          title="개발자 유형 테스트"
          description="간단한 질문으로 개발자 유형을 알려주는 웹 앱."
          image="/images/devtest_start.png"
          onClick={() => setSelectedProject("devtest")}
        />
      </div>

      {selectedProject === "devtest" && (
        <ProjectModal
          onClose={() => setSelectedProject(null)}
          handleOpenFullscreen={handleOpenFullscreen}
        />
      )}

      {fullscreenImages.length > 0 && (
        <FullscreenImageModal
          images={fullscreenImages}
          currentIndex={currentIndex}
          handlePrev={() => setCurrentIndex((prev) =>
            prev === 0 ? fullscreenImages.length - 1 : prev - 1
          )}
          handleNext={() => setCurrentIndex((prev) =>
            prev === fullscreenImages.length - 1 ? 0 : prev + 1
          )}
          handleClose={() => setFullscreenImages([])}
        />
      )}
    </section>
  );
}
