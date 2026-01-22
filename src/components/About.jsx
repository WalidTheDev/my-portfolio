export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>

      <div className="text-zinc-300 space-y-4 leading-relaxed">
        <p>
          I’m a backend-focused developer with a background in computer science.
          I enjoy working close to the data layer — designing APIs, structuring
          databases, and thinking about scalability and performance.
        </p>

        <p>
          Right now, I’m working on a backend-heavy blogging platform
          <span className="font-medium"> (project details coming soon)</span>,
          and deepening my understanding of distributed systems and cloud
          infrastructure.
        </p>

        <p>
          I’m actively looking for opportunities where I can grow as a backend
          engineer and contribute to real-world systems.
        </p>
      </div>
    </section>
  );
}
