const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h2 className="text-4xl font-bold mb-2">Hi, I'm Walid Shaikh</h2>
      <p className="text-lg text-gray-600">A Full-Stack Developer passionate about building web apps</p>
      <a href="#projects" className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        View My Work
      </a>
    </section>
  );
};

export default Hero;
