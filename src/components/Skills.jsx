const skills = ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'FastAPI', 'MySQL', 'Git'];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-8">Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div key={skill} className="bg-white shadow p-4 rounded text-gray-800 font-medium">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
