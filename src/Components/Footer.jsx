import { FaLaptopCode } from "react-icons/fa";
import { Link } from "react-scroll";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-5 text-slate-500">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-10 px-3 py-6 ss:grid-cols-2 ss:px-4 sm:grid-cols-4">
        <div>
          <nav className="flex items-center gap-3">
            <Link
              data-aos="fade-left"
              data-aos-delay="300"
              to="home"
              smooth={true}
              className="text-3xl font-semibold text-black"
            >
              Beatrice| Virtual Assistant
            </Link>
          </nav>
          <div className="flex items-center gap-5 py-5">
            <nav className="rounded-full p-3 transition-all delay-300">
              <a
                href="https://www.instagram.com/peter_kamau"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-3xl duration-300 hover:scale-110 hover:transition-transform hover:ease-in-out" />
              </a>
            </nav>
            <nav className="rounded-full p-3 transition-all delay-300 hover:bg-transparent">
              <a
                href="https://x.com/peterka99082091"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="text-3xl duration-300 hover:scale-110 hover:transition-transform hover:ease-in-out" />
              </a>
            </nav>
            <nav className="rounded-full p-3 transition-all delay-300 hover:bg-transparent">
              <a
                href="https://web.facebook.com/profile.php?id=61558193372032"
                target="_blank"
                rel="noopener noreferrer"
                className="duration-300 hover:scale-105 hover:transition-transform hover:ease-in-out"
              >
                <FaFacebookSquare className="text-3xl duration-300 hover:scale-110 hover:transition-transform hover:ease-in-out" />
              </a>
            </nav>
          </div>
        </div>
        <div className="flex flex-col space-y-4 text-xl">
          <h4 className="text-black">Explore</h4>
          <Link
            smooth={true}
            to="about"
            className="font-Kumbh text-slate-800 transition-all delay-300 hover:cursor-pointer hover:text-primary"
          >
            About Me
          </Link>
          <Link
            smooth={true}
            to="skill"
            className="font-Kumbh text-slate-800 transition-all delay-300 hover:cursor-pointer hover:text-primary"
          >
            Skill
          </Link>
        </div>
        <div className="flex flex-col space-y-4 text-xl">
          <h4 className="text-black">Trusted</h4>
          <Link
            smooth={true}
            to="services"
            className="font-Kumbh text-slate-800 transition-all delay-300 hover:cursor-pointer hover:text-primary"
          >
            Services
          </Link>
          <Link
            smooth={true}
            to="project"
            className="font-Kumbh text-slate-800 transition-all delay-300 hover:cursor-pointer hover:text-primary"
          >
            Projects
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <h4 className="text-xl text-black">Others</h4>
          <ul className="flex flex-col outline-none">
            <li className="font-Kumbh text-slate-800 transition-all delay-300 hover:cursor-pointer hover:text-primary">
              Privacy
            </li>
            <li className="font-Kumbh text-slate-800 transition-all delay-300 hover:cursor-pointer hover:text-primary">
              Terms and Conditions
            </li>
            <li className="font-Kumbh text-slate-800 transition-all delay-300 hover:cursor-pointer hover:text-primary">
              Cookie Policy
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full text-center">
        <h6 className="text-xl font-semibold text-textColor">
          Copyright © All right reserved -| 2024
        </h6>
        <p className="text-slate-800">
          Built with love by James Kamau A.K.A Hanzo
        </p>
      </div>
    </footer>
  );
};

export default Footer;
