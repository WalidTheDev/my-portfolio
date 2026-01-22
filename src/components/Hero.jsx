export default function Hero() {
  return (
    <section className="pt-40 pb-28 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">

        {/* WhatsApp-style avatar */}
        <div className="w-36 h-36 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600
                        flex items-center justify-center text-4xl font-bold
                        shadow-lg animate-fadeIn">
          WS
        </div>

        {/* Text */}
        <div className="text-center md:text-left animate-slideUp">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Walid Shaikh
          </h1>

          <p className="text-lg text-zinc-400 mb-6 max-w-xl">
            Backend-focused developer who enjoys designing APIs, working with
            data, and building scalable systems.  
            Currently exploring cloud, microservices, and system design.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-500 transition"
            >
              View Projects
            </a>

            <a
              href="https://drive.google.com/file/d/101VeJPcOC7e8A1vgo1ZEVGxIsemX17fl/view"
              className="px-6 py-3 border border-zinc-700 rounded-lg text-zinc-300 hover:border-zinc-500 transition"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
