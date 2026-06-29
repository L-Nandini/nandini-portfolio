import SectionTitle from "../ui/SectionTitle";
import FadeInSection from "../ui/FadeInSection";
import { certificates } from "../../data/certificates";
import { FaExternalLinkAlt } from "react-icons/fa";

function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-gray-800 text-white py-20 px-6 md:px-10"
    >
      <FadeInSection>
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Certificates" />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {certificates.map((certificate) => {
              const Icon = certificate.icon;

              return (
                <div
                  key={certificate.title}
                  className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <Icon className="text-5xl text-blue-400" />

                    <div>
                      <h3 className="text-xl font-bold">
                        {certificate.title}
                      </h3>

                      <p className="text-gray-400 mt-1">
                        {certificate.issuer}
                      </p>

                      <p className="text-green-400 text-sm mt-1">
                        {certificate.year}
                      </p>
                    </div>
                  </div>

                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 text-blue-400 hover:text-blue-300 transition"
                  >
                    View Certificate
                    <FaExternalLinkAlt className="text-sm" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}

export default Certificates;