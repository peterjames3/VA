import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";
/* import logo from "../assets/menu.svg"; */
import { navLinks } from "../nav-links";
import { FaLaptopCode } from "react-icons/fa";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const handleNav = () => setNav(!nav);
  const closeMenu = () => {
    setNav(false);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full bg-white px-4 py-7">
      <div className="mx-auto flex w-full items-center justify-between md:max-w-[1400px]">
        {nav && (
          <div className="fixed left-0 top-0 z-50 h-full min-h-screen w-full bg-black bg-opacity-70"></div>
        )}

        <nav className="flex items-center gap-3">
          <ScrollLink
            to="home"
            smooth={true}
            className="items-center gap-2 text-3xl hover:cursor-pointer"
            onClick={closeMenu}
          >
            <nav className="text-foreground hidden font-bold tracking-[0.2em] ss:flex">
              VIRTUAL
            </nav>
            <nav className="font-medium">ASSISTANT</nav>
          </ScrollLink>
        </nav>

        {/* Desktop Navigation */}
        <nav className={`hidden items-center gap-7 sm:flex`}>
          {navLinks.map((tab, index) => (
            <ScrollLink
              key={index}
              to={tab.id}
              smooth={true}
              spy={true}
              activeClass="active"
              className="cursor-pointer text-xl font-medium text-gray-700 transition-all delay-300 ease-out hover:text-black"
              onClick={closeMenu}
            >
              {tab.name}
            </ScrollLink>
          ))}
        </nav>
        <nav className="hidden sm:flex">
          <ScrollLink
            to="contact"
            smooth={true}
            className="btn--primary"
            onClick={closeMenu}
          >
            Let&apos;s Get Started
          </ScrollLink>
        </nav>

        {/* Mobile Nav Toggle */}
        <div
          onClick={handleNav}
          className="z-100 cursor-pointer text-black transition-all delay-300 sm:hidden"
        >
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        {/* Mobile Navigation */}
        {nav && (
          <nav className="fixed left-0 top-0 z-50 h-full w-[60%] border-r border-r-gray-900 bg-black duration-500 ease-in-out">
            <ScrollLink
              to="home"
              smooth={true}
              className="flex items-center gap-2 px-4 pt-7 text-2xl font-medium text-primary transition-all delay-300 ease-out hover:cursor-pointer"
              onClick={closeMenu}
            >
              VA
            </ScrollLink>
            <ul className="flex flex-col space-y-10 px-4 pt-10 font-normal">
              {navLinks.map((tab, index) => (
                <ScrollLink
                  key={index}
                  to={tab.id}
                  smooth={true}
                  spy={true}
                  className="cursor-pointer font-medium text-slate-500 transition-all delay-300 ease-out hover:text-white"
                  onClick={closeMenu}
                >
                  {tab.name}
                </ScrollLink>
              ))}
              <ScrollLink
                to="contact"
                smooth={true}
                className="cursor-pointer text-xl font-medium text-white transition-all delay-300"
                onClick={closeMenu}
              >
                Hire me
              </ScrollLink>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
