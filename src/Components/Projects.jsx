import { projects } from "../projects";

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-12">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h4
            className="text-4xl font-extrabold text-gray-900"
            data-aos="fade-right"
            data-aos-offset="400"
            data-aos-easing="ease-in-sine"
          >
            Projects & Case Studies
          </h4>
          <p className="mt-4 text-lg text-gray-500">
            A collection of virtual assistant services I&apos;ve delivered to
            clients with attention to detail and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <p className="mt-2 text-sm font-semibold text-gray-500">
                Technologies: {project.technologies}
              </p>
              <a
                href={project.link}
                className="mt-4 inline-block text-secondary hover:underline"
                data-aos="fade-down"
                data-aos-offset="400"
                data-aos-easing="ease-in-sine"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
