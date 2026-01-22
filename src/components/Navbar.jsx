export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Avatar logo */}
        <div className="w-10 h-10 rounded-full  flex items-center justify-center font-bold">
        
          Walid Shaikh
        </div>

        <div className="hidden md:flex gap-6 text-sm text-zinc-400">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#tech" className="hover:text-white">Tech</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
}
