import SectionTitle from "../ui/SectionTitle";
import FadeInSection from "../ui/FadeInSection";
import Button from "../ui/Button";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
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
                opportunities. If you have an opportunity, project,
                or just want to connect, feel free to reach out.
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

              <form className="space-y-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-gray-900 rounded-lg p-4 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-900 rounded-lg p-4 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-gray-900 rounded-lg p-4 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full bg-gray-900 rounded-lg p-4 outline-none resize-none focus:ring-2 focus:ring-blue-500"
                ></textarea>

                <Button href="#">
                  Send Message
                </Button>

              </form>

            </div>

          </div>
        </div>
      </FadeInSection>
    </section>
  );
}

export default Contact;