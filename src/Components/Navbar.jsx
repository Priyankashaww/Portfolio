import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Education",
  "Contact",
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#070b14]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold tracking-tight">
          Priyanka<span className="text-violet-400">.</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-gray-400 transition hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-violet-600 px-5 py-2 text-sm font-medium transition hover:bg-violet-500 md:block"
        >
          Let's Talk
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#070b14] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-gray-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
