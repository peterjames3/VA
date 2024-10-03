import { useEffect, useRef } from "react";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";

const Testimonials = () => {
  const sliderRef = useRef(null);
  const previousRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      const slider = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 2.5,
              spacing: 32,
            },
          },
        },
      });

      const prevHandler = () => slider.prev();
      const nextHandler = () => slider.next();

      if (previousRef.current) {
        previousRef.current.addEventListener("click", prevHandler);
      }

      if (nextRef.current) {
        nextRef.current.addEventListener("click", nextHandler);
      }

      return () => {
        if (previousRef.current) {
          previousRef.current.removeEventListener("click", prevHandler);
        }
        if (nextRef.current) {
          nextRef.current.removeEventListener("click", nextHandler);
        }
        slider.destroy();
      };
    }
  }, []);

  return (
    <section id="testimonials" className=" my-10 py-[9rem] bg-black">
      <div className="container px-4 py-2 sm:px-6 lg:py-8 lg:pe-0 lg:ps-8 xl:py-10">
        <div className="items-end justify-between sm:flex sm:pe-6 lg:pe-8">
          <h5 className="font-body max-w-xl text-5xl font-bold tracking-tight text-white sm:text-5xl">
            Trusted Feedback from Our Virtual Assistant Clients
          </h5>
          <div className="mt-8 flex gap-4 lg:mt-0">
            <button
              aria-label="Previous slide"
              ref={previousRef}
              className="rounded-full border border-primary p-3 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              aria-label="Next slide"
              ref={nextRef}
              className="rounded-full border border-primary p-3 text-white"
            >
              <svg
                className="size-5 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-[1400px] lg:col-span-2 lg:mx-0">
          <div ref={sliderRef} className="keen-slider">
            {/* Testimonial 1 */}
            <div className="keen-slider__slide">
              <blockquote className="font-Lato flex h-full flex-col justify-between bg-secondary p-6 shadow-sm sm:p-8 lg:p-12">
                <div>
                  <div className="flex gap-0.5 text-green-500">
                    {/* SVG stars omitted for brevity */}
                  </div>
                  <div className="mt-4">
                    <h3 className="font-Lato text-xl font-bold text-textColor sm:text-2xl">
                      &apos;Game-Changer for My Workflow&apos;
                    </h3>
                    <p className="font-Lato mt-4 text-gray-500">
                      &apos;Having a Virtual Assistant handle my administrative
                      tasks like scheduling and email management has been a
                      game-changer. I can now focus on growing my
                      business!&apos;
                    </p>
                  </div>
                </div>
                <footer className="font-Lato mt-8 text-sm text-primary">
                  &mdash; John Smith, Business Owner
                </footer>
              </blockquote>
            </div>

            {/* Testimonial 2 */}
            <div className="keen-slider__slide">
              <blockquote className="flex h-full flex-col justify-between bg-secondary p-6 shadow-sm sm:p-8 lg:p-12">
                <div>
                  <div className="flex gap-0.5 text-green-500">
                    {/* SVG stars omitted for brevity */}
                  </div>
                  <div className="font-Lato mt-4">
                    <h3 className="text-xl font-bold text-textColor sm:text-2xl">
                      &apos;Excellent Customer Service&apos;
                    </h3>
                    <p className="mt-4 text-gray-500">
                      &apos;The VA team took over all my customer service
                      inquiries. Now, my customers receive timely and
                      professional responses, boosting customer satisfaction and
                      retention.&apos;
                    </p>
                  </div>
                </div>
                <footer className="font-Lato mt-8 text-sm text-primary">
                  &mdash; Mary Johnson, E-Commerce Store Owner
                </footer>
              </blockquote>
            </div>

            {/* Testimonial 3 */}
            <div className="keen-slider__slide">
              <blockquote className="flex h-full flex-col justify-between bg-secondary p-6 shadow-sm sm:p-8 lg:p-12">
                <div>
                  <div className="flex gap-0.5 text-green-500">
                    {/* SVG stars omitted for brevity */}
                  </div>
                  <div className="font-Lato mt-4">
                    <h3 className="text-xl font-bold text-textColor sm:text-2xl">
                      &apos;Social Media Mastery&apos;
                    </h3>
                    <p className="mt-4 text-gray-500">
                      &apos;I was overwhelmed with managing my business&apos;s
                      social media, but with the VA&apos;s help, my online
                      presence has grown significantly, and my audience
                      engagement has soared.&apos;
                    </p>
                  </div>
                </div>
                <footer className="font-Lato mt-8 text-sm text-primary">
                  &mdash; Daniel Lee, Online Influencer
                </footer>
              </blockquote>
            </div>

            {/* Testimonial 4 */}
            <div className="keen-slider__slide">
              <blockquote className="flex h-full flex-col justify-between bg-secondary p-6 shadow-sm sm:p-8 lg:p-12">
                <div>
                  <div className="flex gap-0.5 text-green-500">
                    {/* SVG stars omitted for brevity */}
                  </div>
                  <div className="font-Lato mt-4">
                    <h3 className="text-xl font-bold text-textColor sm:text-2xl">
                      &apos;Comprehensive Research Support&apos;
                    </h3>
                    <p className="mt-4 text-gray-500">
                      &apos;I needed in-depth research for a major project. My
                      virtual assistant delivered comprehensive reports in no
                      time, saving me hours of work and ensuring I had accurate
                      information.&apos;
                    </p>
                  </div>
                </div>
                <footer className="font-Lato mt-8 text-sm text-primary">
                  &mdash; Olivia Brown, Marketing Consultant
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
