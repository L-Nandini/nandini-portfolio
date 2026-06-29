import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        <div>
          <h2 className="text-lg font-semibold text-white">
            Made with ❤️ by Nandini
          </h2>

          <p className="text-sm mt-2">
            © 2026 All Rights Reserved
          </p>
        </div>

        <div className="flex gap-6 text-2xl">

          <a
            href="https://github.com/L-Nandini"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-white transition duration-300 hover:scale-110" />
          </a>

          <a
            href="https://www.linkedin.com/in/nandini-lakkimsetty-mon0920/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-500 transition duration-300 hover:scale-110" />
          </a>

          <a href="mailto:laknandu123@gmail.com">
            <FaEnvelope className="hover:text-red-400 transition duration-300 hover:scale-110" />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;