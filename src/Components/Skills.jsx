import { skills, tools } from "../skills";

const Skills = () => {
  return (
    <section id="skills" className="mt-10 bg-black py-[9rem]">
      <div className="container mx-auto">
        <h3
          className="mb-6 text-xl text-primary underline"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          Skills & Tools
        </h3>

        {/* Skills Section */}
        <div className="mb-10">
          <h4 className="mb-7 text-5xl font-semibold text-white">
            Intelligent virtual <br></br> assistance for business
          </h4>
          <h5 className="mb-4 text-xl font-medium text-white">Skills</h5>
          <ul
            className="grid gap-4 ss:grid-cols-2"
            data-aos="zoom-in"
            data-aos-delay="900"
          >
            {skills.map(({ id, skill, description }) => (
              <li key={id} className="rounded-md bg-cardBg p-4 shadow-sm">
                <h5 className="text-lg font-bold text-white">{skill}</h5>
                <p className="text-gray-200">{description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools Section */}
        <div>
          <h5 className="mb-4 text-2xl font-semibold text-white">Tools</h5>
          <ul
            className="grid gap-4 ss:grid-cols-2"
            data-aos="zoom-in"
            data-aos-delay="900"
          >
            {tools.map(({ id, tool, proficiency }) => (
              <li
                key={id}
                className="flex justify-between rounded-md bg-cardBg p-4 shadow-sm"
              >
                <span className="font-bold text-white">{tool}</span>
                <span className="italic text-gray-200">{proficiency}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
