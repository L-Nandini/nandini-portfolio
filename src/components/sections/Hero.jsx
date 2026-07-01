import profile from "../../assets/images/profile.jpg";
import Button from "../ui/Button";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gray-950 text-white min-h-screen flex items-center justify-center px-6 md:px-10 py-20 overflow-hidden"
    >
      {/* Background Blur Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl gap-16">

        {/* Left Section */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm <br />

            <span className="text-6xl md:text-7xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Nandini
            </span>
          </h1>

          {/* Typing Animation */}
          <TypeAnimation
            sequence={[
              "Full Stack Java Developer",
              2000,
              "React Developer",
              2000,
              "ServiceNow Certified",
              2000,
              "Problem Solver",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-2xl font-semibold text-blue-400"
          />

          <p className="text-gray-400">
            Java • Web Development • ServiceNow • MySQL
          </p>

          <p className="max-w-xl text-lg text-gray-300 leading-8">
            Computer Science graduate with strong foundations in Java,
            Spring Boot, React, MySQL, and Data Structures & Algorithms.
            Passionate about building scalable web applications and solving
            real-world problems through clean and efficient code.
          </p>

          {/* Statistics */}
          <motion.div
            className="grid grid-cols-3 gap-4 max-w-md"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >

            <div className="bg-gray-900 rounded-xl p-4 text-center shadow-lg hover:scale-105 transition duration-300">
              <h3 className="text-3xl font-bold text-blue-400">200+</h3>
              <p className="text-gray-400 text-sm mt-1">
                LeetCode Problems
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-4 text-center shadow-lg hover:scale-105 transition duration-300">
              <h3 className="text-3xl font-bold text-blue-400">4+</h3>
              <p className="text-gray-400 text-sm mt-1">
                Projects
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-4 text-center shadow-lg hover:scale-105 transition duration-300">
              <h3 className="text-3xl font-bold text-blue-400">8.9</h3>
              <p className="text-gray-400 text-sm mt-1">
                CGPA
              </p>
            </div>

          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >

            <Button href="#projects">
              View Projects
            </Button>

            <Button
              href="public/resume.pdf"
              download
              variant="secondary"
            >
              Download Resume
            </Button>

          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >

            <p className="text-gray-400 text-sm mb-3">
              Connect with me
            </p>

            <div className="flex gap-6 text-3xl text-gray-300">

              <a
                href="https://github.com/L-Nandini"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-white hover:scale-110 transition duration-300 cursor-pointer" />
              </a>

              <a
                href="https://www.linkedin.com/in/nandini-lakkimsetty-mon0920/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-blue-500 hover:scale-110 transition duration-300 cursor-pointer" />
              </a>

              <a href="mailto:laknandu123@gmail.com">
                <FaEnvelope className="hover:text-red-400 hover:scale-110 transition duration-300 cursor-pointer" />
              </a>

            </div>

          </motion.div>

        </motion.div>

        {/* Right Section */}
        <motion.div
          className="flex justify-center flex-1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >

          <img
            src={profile}
            alt="Nandini Lakkimsetty"
            className="w-80 h-80 rounded-full object-cover border-4 border-blue-500 shadow-2xl shadow-blue-500/30 hover:scale-105 hover:rotate-1 transition duration-300"
          />

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;