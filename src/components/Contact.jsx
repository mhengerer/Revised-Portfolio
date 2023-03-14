import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SphereCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [modal, setModal] = useState(false);

  const handleAlert = () => {
    setModal(!modal);
  };

  const [emailError, setEmailError] = useState(false);

  const handleError = () => {
    setEmailError(!emailError);
  };

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_l0ki35s",
        "template_60m1rok",
        {
          from_name: form.name,
          to_name: "Michael Hengerer",
          from_email: form.email,
          to_email: "mhengerer98@gmail.com",
          message: form.message,
        },
        "-Tqpj0AkzYJI3wZm1"
      )
      .then(
        () => {
          setLoading(false);
          // add modal alert "Thanks for reaching out to me. I will contact you back as soon as I can regarding your message."
          handleAlert();

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (err) => {
          setLoading(false);
          console.log(err);
          handleError();
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What is your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none boder-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What is your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none boder-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What is your message?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none boder-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "sending..." : "send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <SphereCanvas />
      </motion.div>

      {/* modal for Email sent */}
      {modal && (
        <div
          onClick={handleAlert}
          className="fixed inset-0 bg-[#E3FA51] bg-opacity-30 font-bold backdrop-blur-sm flex justify-center items-center"
        >
          <div className="p-5 bg-[#E3FA51] rounded-full">
            <h2 className={`${styles.sectionHeadText} text-center text-black`}>
              Email Sent!
            </h2>
            <p className={`${styles.sectionSubText} text-center`}>
              Thanks for reaching out to me. I will contact you back as soon as
              I can regarding your message.
            </p>
          </div>
        </div>
      )}

      {/* modal for Failed Email Error */}
      {emailError && (
        <div
          onClick={handleError}
          className="fixed inset-0 bg-[#E3FA51] bg-opacity-30 font-bold backdrop-blur-sm flex justify-center items-center"
        >
          <div className="p-5 bg-[#E3FA51] rounded-full">
            <h2 className={`${styles.sectionHeadText} text-center text-black`}>
              Issue Sending Email!
            </h2>
            <p className={`${styles.sectionSubText} text-center`}>
              Sorry! For some reason the email is failing to send! If you would
              like to reach out on your own my email is: mhengerer98@gmail.com.
              Thank you!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
