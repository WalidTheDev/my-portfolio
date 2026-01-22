export default function TechStack() {
  return (
    <section id="tech" className="py-24 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-10">Tech I Work With</h2>

      <p className="text-zinc-400 mb-10 max-w-2xl mx-auto">
        Tools and technologies I use regularly for backend development,
        experimentation, and learning.
      </p>

      <div className="flex flex-col items-center gap-6">
        <img
          src="https://skillicons.dev/icons?i=python,java,javascript,nodejs,express,mongodb,mysql,postman"
          alt="Backend tech"
        />
        <img
          src="https://skillicons.dev/icons?i=aws,git,github,react,tailwind,vscode"
          alt="Tools"
        />
      </div>
    </section>
  );
}
