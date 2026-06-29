import SectionTitle from "../ui/SectionTitle";
import FadeInSection from "../ui/FadeInSection";

function About() {
  return (
    <section
      id="about"
      className="bg-gray-800 text-white py-20 px-6 md:px-10"
    >
      <FadeInSection>
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="About Me" />

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            {/* Left */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                Who am I?
              </h3>

              <p className="text-gray-300 leading-8">
                I am a Computer Science graduate passionate about Full Stack
                Development. I enjoy solving real-world problems and building
                scalable web applications using Java, Spring Boot, React,
                and MySQL.
              </p>
            </div>

            {/* Right */}
            <div className="bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-2 transition-all duration-300">
              <div className="space-y-4">

                <p>
                  <span className="font-semibold text-blue-400">Name:</span>{" "}
                  Nandini Lakkimsetty
                </p>

                <p>
                  <span className="font-semibold text-blue-400">Degree:</span>{" "}
                  B.Tech - Computer Science & Engineering
                </p>

                <p>
                  <span className="font-semibold text-blue-400">Location:</span>{" "}
                  Andhra Pradesh, India
                </p>

                <p>
                  <span className="font-semibold text-blue-400">Role:</span>{" "}
                  Full Stack Java Developer
                </p>

                <p>
                  <span className="font-semibold text-blue-400">Experience:</span>{" "}
                  Fresher
                </p>

              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}

export default About;