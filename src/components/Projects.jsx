const projects = [
  {
    title: 'Lens-n-Light',
    desc: 'AI-powered photo enhancer with backend services.',
    link: 'https://github.com/WalidTheDev/lens-n-light'
  },
  {
    title: 'DataLab',
    desc: 'Web-based platform to upload, clean, and run ML on CSV data.',
    link: 'https://github.com/WalidTheDev/datalab'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-semibold mb-8 text-center">Projects</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <div key={p.title} className="bg-white p-6 rounded shadow">
              <h4 className="text-xl font-bold mb-2">{p.title}</h4>
              <p className="text-gray-600">{p.desc}</p>
              <a href={p.link} target="_blank" className="text-blue-600 mt-2 inline-block">
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
