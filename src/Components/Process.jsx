import connectImg from "../assets/medium-shot-female-economist-working-laptop-min.jpg";

const Process = () => {
  return (
    <section id="contact-process" className="mt-16 py-10">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        {/* Left Section: Process Steps */}
        <div className="text-center md:w-1/2 md:text-left">
          <h3
            className="mb-6 text-xl"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            How to Get in Touch and Start Working with Me
          </h3>

          <h5 className="mb-2 text-5xl font-semibold leading-[3.5rem] text-black">
            Connecting with a virtual assistant should be easy. Follow these
            simple steps to begin.
          </h5>

          {/* Process Steps */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Step 1 */}
            <div
              className="rounded-md bg-gray-100 p-6 shadow-sm"
              data-aos="fade-up-right"
              data-aos-offset="400"
              data-aos-easing="ease-in-sine"
            >
              <h4 className="mb-3 text-2xl font-semibold">
                Step 1: Initial Inquiry
              </h4>
              <p>
                Reach out to me via the contact form, email, or social media.
                Let me know what tasks or projects you&apos;d like help with,
                and I will respond within 24 hours.
              </p>
            </div>

            {/* Step 2 */}
            <div
              className="rounded-md bg-gray-100 p-6 shadow-sm"
              data-aos="fade-up-left"
              data-aos-offset="400"
              data-aos-easing="ease-in-sine"
            >
              <h4 className="mb-3 text-2xl font-semibold">
                Step 2: Consultation & Needs Assessment
              </h4>
              <p>
                We can schedule a brief consultation to discuss your
                requirements, expectations, and goals. This can be done over a
                video call, phone call, or email.
              </p>
            </div>

            {/* Step 3 */}
            <div
              className="rounded-md bg-gray-100 p-6 shadow-sm"
              data-aos="fade-up-right"
              data-aos-offset="500"
              data-aos-easing="ease-in-sine"
            >
              <h4 className="mb-3 text-2xl font-semibold">
                Step 3: Tailored Proposal
              </h4>
              <p>
                Once I understand your needs, I will send a tailored proposal
                with service options, timelines, and pricing.
              </p>
            </div>

            {/* Step 4 */}
            <div
              className="rounded-md bg-gray-100 p-6 shadow-sm"
              data-aos="fade-up-left"
              data-aos-offset="500"
              data-aos-easing="ease-in-sine"
            >
              <h4 className="mb-3 text-2xl font-semibold">
                Step 4: Start Collaborating
              </h4>
              <p>
                After you approve the proposal, we&apos;ll set up the workflow
                and begin working together. I will ensure smooth communication
                throughout.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="flex justify-center md:w-1/2 md:justify-end">
          <img
            src={connectImg}
            alt="Contact Image"
            loading="lazy"
            className="h-auto w-full rounded-md object-cover shadow-md md:w-[80%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Process;
