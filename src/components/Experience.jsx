export default function Experience() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>

      <div className="space-y-6">
        <div className="bg-slate-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">
            Backend Developer – Company Name
          </h3>
          <p className="text-slate-400 text-sm mb-3">
            2023 – Present
          </p>
          <p className="text-slate-300">
            Designed and maintained REST APIs, optimized database queries,
            implemented authentication, and improved system performance.
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">
            Software Engineer – Company Name
          </h3>
          <p className="text-slate-400 text-sm mb-3">
            2021 – 2023
          </p>
          <p className="text-slate-300">
            Worked on backend services, integrations, and scalable architecture.
          </p>
        </div>
      </div>
    </section>
  );
}
