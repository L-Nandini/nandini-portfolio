import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import FadeInSection from "../ui/FadeInSection";
import { projects } from "../../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-800 text-white py-20 px-6"
    >
      <FadeInSection>
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="My Projects" />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
              />
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}

export default Projects;