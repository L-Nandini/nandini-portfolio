function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <div
      className="
        bg-gray-800
        border border-gray-700
        rounded-2xl
        p-8
        flex
        flex-col
        items-center
        justify-center
        text-center
        shadow-lg
        cursor-pointer
        transition-all
        duration-300
        hover:bg-blue-600
        hover:shadow-blue-500/30
        hover:-translate-y-2
        hover:scale-105
      "
    >
      <Icon className="text-5xl mb-5 text-blue-400 group-hover:text-white" />

      <h3 className="text-xl font-semibold">
        {skill.name}
      </h3>
    </div>
  );
}

export default SkillCard;