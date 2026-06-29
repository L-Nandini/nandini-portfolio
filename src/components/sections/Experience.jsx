import SectionTitle from "../ui/SectionTitle";
import FadeInSection from "../ui/FadeInSection";
import { experience } from "../../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-gray-900 text-white py-20 px-6 md:px-10"
    >
      <FadeInSection>
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Experience" />

          <div className="relative mt-12 border-l-4 border-blue-500 ml-4">
            {experience.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="mb-12 ml-8 relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-11 top-2 w-5 h-5 bg-blue-500 rounded-full border-4 border-gray-900"></div>

                  {/* Card */}
                  <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/30 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300">

                    <p className="text-blue-400 font-semibold">
                      {item.year}
                    </p>

                    <div className="flex items-center gap-3 mt-3">
                      <Icon className="text-3xl text-blue-400" />

                      <h3 className="text-2xl font-bold">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-gray-300 mt-3 font-medium">
                      {item.company}
                    </p>

                    <p className="text-gray-400">
                      {item.location}
                    </p>

                    <p className="text-gray-300 mt-4 leading-7">
                      {item.description}
                    </p>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}

export default Experience;