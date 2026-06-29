import SectionTitle from "../ui/SectionTitle";
import SkillCard from "../ui/SkillCard";
import FadeInSection from "../ui/FadeInSection";
import { skills } from "../../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-900 text-white py-20 px-6 md:px-10"
    >
      <FadeInSection>
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="My Skills" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            {skills.map((skill) => (
              <SkillCard
                key={skill.name}
                skill={skill}
              />
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}

export default Skills;