export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12">Selected Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6
                       hover:-translate-y-1 transition-transform"
          >
            <h3 className="text-xl font-semibold mb-3">
              Project Title {i}
            </h3>
            <p className="text-zinc-400 mb-4">
              Short description of the problem, backend architecture,
              and technologies used. Replace with real project details.
            </p>
            <span className="text-sm text-blue-400">
              Details → (coming soon)
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
