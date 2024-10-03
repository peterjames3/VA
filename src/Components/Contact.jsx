import { useState } from "react";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { ToastContainer } from "react-toastify";
import useToast from "./useToast";
const validate = (value) => {
  const errors = {};

  if (!value.name) {
    errors.name = "Name is required";
  } else if (!/^[a-zA-Z\s]+$/.test(value.name)) {
    errors.name = "Name should only contain letters and spaces";
  }

  if (!value.email) {
    errors.email = "Email is required";
  } else if (
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value.email)
  ) {
    errors.email = "invalid email address";
  }

  if (!value.message) {
    errors.message = "Message is required";
  }
  return errors;
};

const Contact = () => {
  const { notifySuccess, notifyError } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      setIsSubmitting(true);

      emailjs
        .send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_CONTACTUS_TEMPLATE_ID,
          values,
          import.meta.env.VITE_PUBLIC_KEY,
        )
        .then(
          (result) => {
            notifySuccess(result.text);
            setIsSubmitting(false);
            formik.resetForm();
          },
          (error) => {
            notifyError(error.text);
            setIsSubmitting(false);
          },
        );
    },
  });
  return (
    <section id="contact" className="w-full my-10 py-[5rem] bg-black">
      <div className="container grid grid-cols-1 py-20 sm:grid-cols-2">
        <div>
          <div className="border-border-secondary space-y-7 pt-2 *:rounded-lg *:border *:hover:cursor-pointer">
            <div
              data-aos="fade-right"
              data-aos-delay="900"
              className="bg-bg-accent hover:bg-bg-muted mb-4 py-8 text-center transition-all delay-300"
            >
              <h5 className="text-2xl text-slate-500">@</h5>
              <h6 className="mb-2 text-2xl text-slate-400">Email</h6>
              <p className="text-2xl text-white">kamaujames1230@gmail.com</p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="1500"
              className="bg-bg-accent hover:bg-bg-muted mb-4 grid place-items-center py-8 text-center transition-all delay-300"
            >
              <h5 className="py-1 text-2xl text-slate-500">
                <IoCallOutline />
              </h5>
              <h6 className="mb-2 text-2xl text-slate-500">Phone Number</h6>
              <p className="text-2xl text-white">+254 768283966</p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="2000"
              className="bg-bg-accent hover:bg-bg-muted mb-4 grid place-items-center py-8 text-center transition-all delay-300"
            >
              <h5 className="py-1 text-2xl text-slate-500">
                <IoLocationOutline />
              </h5>
              <h6 className="mb-2 text-2xl text-slate-500">Address</h6>
              <p className="text-2xl text-white">Thika, Nairobi, Kenya</p>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <h4 className="py-3 text-center text-3xl font-semibold text-white transition-all delay-300 hover:underline">
            Contact Me
          </h4>
          <form
            onSubmit={formik.handleSubmit}
            className="mx-auto max-w-md space-y-10 p-1"
          >
            <div>
              <div className="flex justify-between">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white"
                >
                  Name
                </label>
                {formik.touched.name && formik.errors.name ? (
                  <p className="text-sm text-red-500">{formik.errors.name}</p>
                ) : null}
              </div>

              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="focus:border-brandC mt-1 block w-full rounded-md border border-gray-300 px-2 py-3 shadow-sm focus:ring-faitPrimary"
              />
            </div>
            {/* Email Field */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email
                </label>
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-sm text-red-500">{formik.errors.email}</p>
                ) : null}
              </div>

              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="focus:ring-brandC mt-1 block w-full rounded-md px-2 py-3 shadow-sm focus:border-faitPrimary"
              />
            </div>

            {/* Message Field */}

            <div>
              <div className="flex justify-between">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white"
                >
                  Message
                </label>
                {formik.touched.message && formik.errors.message ? (
                  <p className="text-sm text-red-500">
                    {formik.errors.message}
                  </p>
                ) : null}
              </div>

              <textarea
                id="message"
                name="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className="focus:border-brandC focus:ring-brandC mt-1 block w-full rounded-md border border-gray-300 px-2 py-4 shadow-sm"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              value="Send"
              className={`w-full cursor-pointer rounded-md bg-primary p-4 text-xl font-semibold text-black transition-all delay-300 ${isSubmitting ? "bg-secondary" : "bg-primary"} hover:bg-brandD`}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
