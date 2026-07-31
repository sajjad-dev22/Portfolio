import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        alert("✅ Message Sent Successfully!");
        form.current.reset();
        setLoading(false);
      })
      .catch((error) => {
        console.log("Status:", error.status);
        console.log("Text:", error.text);
        console.log("Full Error:", error);

        alert(`${error.status} - ${error.text}`);

        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-20 px-6 md:px-12 lg:px-20 border-b-2 border-gray-500"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[4px] text-cyan-400 font-semibold">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Let's Work Together
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            Have a project in mind or want to collaborate? Feel free to contact
            me anytime. I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-5 bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                <div className="text-cyan-400 text-2xl">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-400">mdsajjadraj173@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5 bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                <div className="text-cyan-400 text-2xl">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-400">+91 8252518069</p>
                </div>
              </div>

              <div className="flex items-center gap-5 bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                <div className="text-cyan-400 text-2xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-400">Bihar, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 mt-10">
              <a
                href="https://github.com/sajjad-dev22"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-xl hover:bg-cyan-500 hover:-translate-y-2 hover:scale-110 transition-all duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/md-sajjad-4b0472391/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-cyan-500 hover:-translate-y-2 hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/call.me.sajju/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-cyan-500 hover:-translate-y-2 hover:scale-110 transition-all duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/md.sajjadraj.353"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-cyan-500 hover:-translate-y-2 hover:scale-110 transition-all duration-300"
              >
                <FaFacebook />
              </a>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
          >
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all duration-300"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all duration-300"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all duration-300"
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 outline-none resize-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all duration-300"
              ></textarea>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-lg font-semibold transition disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
