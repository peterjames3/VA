import { MdDoubleArrow } from "react-icons/md";
import aboutImg from "../assets/Brown and Cream Modern Collective Instagram Post.png";
import cal from "../assets/calendar_8555891.png";
import email from "../assets/envelope_9073086.png";
import edit from "../assets/edit-file_1634406.png";
import management from "../assets/management_2683587.png";

const About = () => {
  // Array to hold image data (source and alt text)
  const iconImages = [
    { src: cal, alt: "Calendar Management" },
    { src: email, alt: "Email Management" },
    { src: management, alt: "Management" },
    { src: edit, alt: "Writing and Editing" },
  ];

  return (
    <section id="about" className="mt-10 min-h-[49rem] w-full py-[9rem]">
      <div className="container h-full gap-2 sm:flex">
        <div className="overflow-hidden rounded-md sm:w-[45%]">
          <img
            src={aboutImg}
            alt="about image"
            loading="lazy"
            className="h-full w-full object-fill"
          />
        </div>
        <div className="space-y-6 pt-8 sm:w-[55%] sm:px-16">
          <h3 className="text-xl" data-aos="fade-right" data-aos-delay="900">
            About Me
          </h3>
          <h4 className="text-5xl font-semibold leading-[3.5rem] text-black">
            Simplify Your Work with a Professional Virtual Assistant
          </h4>
          <p className="text-xl">
            I&apos;m highly skilled professionals who can handle all your
            administrative, technical, and creative needs.
          </p>
          <div className="grid w-full grid-cols-2 grid-rows-2 gap-6 *:text-xl">
            <div
              className="flex items-center gap-2"
              data-aos="fade-down"
              data-aos-delay="900"
            >
              <MdDoubleArrow className="text-cardBg" /> Writing & Editing
            </div>
            <div
              className="flex items-center gap-2"
              data-aos="fade-down"
              data-aos-delay="900"
            >
              <MdDoubleArrow className="text-cardBg" /> Email Management
            </div>
            <div
              className="flex items-center gap-2"
              data-aos="fade-down"
              data-aos-delay="900"
            >
              <MdDoubleArrow className="text-cardBg" /> Calendar Management
            </div>
            <div
              className="flex items-center gap-2"
              data-aos="fade-down"
              data-aos-delay="900"
            >
              <MdDoubleArrow className="text-cardBg" /> Safe & secure
            </div>
          </div>
          {/* Dynamic rendering of icons */}
          <div className="flex -space-x-3 py-4">
            {iconImages.map((icon, index) => (
              <img
                key={index}
                src={icon.src}
                alt={icon.alt}
                className="size-14 rounded-full border border-gray-100 bg-cardBg p-2"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
