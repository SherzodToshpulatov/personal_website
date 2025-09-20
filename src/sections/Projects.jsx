const projects = [
  {
    title: "Portfolio Website",
    description: "A personal website built with React and Tailwind CSS.",
    link: "#",
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack online shop with payment integration.",
    link: "#",
  },
  {
    title: "Chat Application",
    description: "Real-time chat app using WebSockets and Node.js.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-4xl font-bold text-white mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="p-6 bg-gray-900 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold text-teal-400 mb-3">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-teal-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
