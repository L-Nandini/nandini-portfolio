function SectionTitle({ title }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        {title}
      </h2>

      <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
    </div>
  );
}

export default SectionTitle;