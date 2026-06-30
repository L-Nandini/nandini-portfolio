import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

import SectionTitle from "../ui/SectionTitle";
import FadeInSection from "../ui/FadeInSection";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const title = formData.get("title").trim();
    const message = formData.get("message").trim();

    if (!name || !email || !title || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success(
        "Thank you! Your message has been sent successfully."
      );

      form.current.reset();
    } catch (error) {
      console.error(error);

      toast.error(
        "Unable to send your message. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-gray-900 text-white py-20 px-6 md:px-10"
    >
      <FadeInSection>

        <div className="max-w-7xl mx-auto">

          <SectionTitle title="Contact Me" />

          <div className="grid md:grid-cols-2 gap-12 mt-12">

            {/* Left Side */}

            <div className="bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-blue-500/30 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300">

              <h3 className="text-3xl font-bold mb-6 text-blue-400">
                Let's Connect
              </h3>

              <p className="text-gray-300 leading-8 mb-8">
                I'm currently looking for Full Stack Java Developer
                opportunities. If you have an opportunity,
                project, or just want to connect,
                feel free to reach out.
              </p>

              <div className="space-y-6">

                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-blue-400 text-2xl" />

                  <a
                    href="mailto:laknandu123@gmail.com"
                    className="hover:text-blue-400 transition"
                  >
                    laknandu123@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <FaPhone className="text-green-400 text-2xl" />

                  <a
                    href="tel:+919154490762"
                    className="hover:text-green-400 transition"
                  >
                    +91 9154490762
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-red-400 text-2xl" />

                  <span>
                    Andhra Pradesh, India
                  </span>
                </div>

              </div>

            </div>

            {/* Right Side */}

            <div className="bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-blue-500/30 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300">

              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-6"
              >
                                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  autoFocus
                  autoComplete="name"
                  minLength={3}
                  maxLength={40}
                  disabled={loading}
                  className="w-full bg-gray-900 rounded-lg p-4 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  autoComplete="email"
                  disabled={loading}
                  className="w-full bg-gray-900 rounded-lg p-4 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="text"
                  name="title"
                  placeholder="Subject"
                  required
                  minLength={5}
                  maxLength={100}
                  disabled={loading}
                  className="w-full bg-gray-900 rounded-lg p-4 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <textarea
                  rows="6"
                  name="message"
                  placeholder="Write your message..."
                  required
                  minLength={10}
                  maxLength={1000}
                  disabled={loading}
                  className="w-full bg-gray-900 rounded-lg p-4 outline-none resize-none focus:ring-2 focus:ring-blue-500"
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    loading
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 hover:scale-105"
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

              </form>

            </div>

          </div>

        </div>

      </FadeInSection>

    </section>
  );
}

export default Contact;