import { services } from "../services";
const Services = () => {
  return (
    <section
      id="services"
      className="my-10 min-h-[42rem] w-full bg-black py-[9rem]"
    >
      <div className="container h-full">
        <div className="flex flex-col space-y-10 px-2 pt-2 sm:px-2">
          <h3
            className="text-xl text-primary underline"
            data-aos="fade-right"
            data-aos-delay="900"
          >
            Our Services
          </h3>
          <p className="text-5xl font-medium text-white">
            I Provide Best Virtual <br></br>Assistant Services
          </p>
        </div>
        <div>
          <nav className="grid gap-10 pt-10 sm:grid-cols-4">
            {services.map((service) => (
              <nav
                key={service.id}
                className="gap-4 bg-cardBg p-7 shadow"
                data-aos="fade-right"
                data-aos-delay="900"
              >
                <div
                  className="relative -top-14 mx-auto mt-0 flex size-[4.5rem] items-center justify-center rounded-full border border-primary bg-black"
                  data-aos="fade-down"
                  data-aos-delay="1000"
                >
                  <service.icon className="size-12 items-center text-primary" />{" "}
                </div>

                {/* Render the icon */}
                <div className="text-center text-white">
                  <h2 className="text-2xl font-semibold">{service.title}</h2>
                  <p className="mt-2 text-xl text-gray-300">
                    {service.description}
                  </p>
                </div>
              </nav>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Services;
