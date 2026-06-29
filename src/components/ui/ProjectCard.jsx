import Button from "./Button";

function ProjectCard({ project }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/30 hover:-translate-y-2 transition-all duration-300">

      {/* Project Image */}
      {project.image ? (
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 object-contain bg-gray-800 transition-transform duration-500 hover:scale-110"
          />
        </div>
      ) : (
        <div className="w-full h-56 bg-gray-800 flex items-center justify-center text-gray-500 text-lg">
          Project Screenshot
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-blue-400">
          {project.title}
        </h3>

        <p className="mt-4 text-gray-300 leading-7">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="bg-gray-800 text-blue-400 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">
          <Button href={project.github} target="_blank">
            GitHub
          </Button>

          <Button
            href={project.demo}
            target="_blank"
            variant="secondary"
          >
            Live Demo
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;