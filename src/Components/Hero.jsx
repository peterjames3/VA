import { Link as ScrollLink } from "react-scroll";
import heroImg from "../assets/medium-shot-woman-video-call.webp";

import { IoMdStar } from "react-icons/io";

const stars = Array(5).fill(4); 
const Hero = () => {
  return (
    <section id="home" className="mt-20 min-h-[42rem] w-full py-[8rem]">
      <div className="container h-full gap-5 sm:flex">
        <div className="space-y-6 px-2 sm:w-1/2 sm:px-2 md:pt-12">
          <h1 className="text-5xl font-bold leading-[4.2rem] md:text-6xl">
            Elevate Your Business with My Expert Virtual Assistant Services!
          </h1>
          <h2 className="text-xl">
            Hi, I&apos;m Beatrice, a dedicated virtual assistant here to
            streamline your administrative, technical, and creative tasks, so
            you can focus on what matters most. Let me take care of the details
            while you scale your success.
          </h2>
          <nav
            className="pt-6"
            data-aos="fade-left"
            data-aos-delay="1200"
            data-aos-offset="50"
          >
            <ScrollLink to="contact" className="btn--primary">
              Request a Consultation
            </ScrollLink>
          </nav>
          <div className="flex w-full justify-between divide-x-2 px-4 pt-6">
            <div
              className="flex flex-col"
              data-aos="fade-up "
              data-aos-delay="1200"
            >
              <span className="text-3xl font-semibold">1K+</span>
              <span className="text-xl font-medium">Serverd Customers</span>
            </div>
            <div
              className="flex flex-col px-2"
              data-aos="fade-up "
              data-aos-delay="1350"
            >
              <span className="text-3xl font-semibold">4.8/5</span>
              <span className="flex pt-2 text-xl font-medium">
                {stars.map((_, index) => (
                  <IoMdStar key={index} className="text-yellow-500" />
                ))}
              </span>
            </div>
            <div
              className="flex flex-col px-2"
              data-aos="fade-up "
              data-aos-delay="1500"
            >
              <span className="text-3xl font-semibold">24/7</span>
              <span className="text-xl font-medium">Customer Support</span>
            </div>
          </div>
        </div>
        <div
          className="overflow-hidden rounded-bl-[6rem] rounded-tr-[6rem] sm:w-1/2"
          data-aos="fade-left "
          data-aos-delay="1200"
        >
          <img
            src={heroImg}
            alt="hero image"
            loading="lazy"
            className="h-full w-full object-fill"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
