import React, { useState } from 'react';
import { FiX, FiMenu } from 'react-icons/fi';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Navcontent = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "About", link: "#about" },
    { id: 3, name: "Skills", link: "#skills" },
    { id: 4, name: "My Projects", link: "#projects" },
  ];

  return (
    <header className="top-0 left-0 w-full text-white z-10" data-aos="fade-up" data-aos-delay="300">
      <div className="container mx-auto flex items-center justify-between p-6">
        {/* Logo */}
        <a href="#home" className="text-4xl italic font-bold text-white">
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7">
          {Navcontent.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="hover:text-gray-300 text-lg"
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={() => {
              window.location.href = "mailto:tsacpt@2021@gmail.com";
            }}
            className="bg-green-500 px-4 py-2 rounded-3xl"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FiX className="w-8 h-8 text-white" />
          ) : (
            <FiMenu className="w-8 h-8 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="flex flex-col items-center space-y-4 bg-slate-800 p-4 md:hidden">
          {Navcontent.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="hover:text-gray-300 text-lg"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <button
            className="bg-green-500 px-4 py-2 rounded-3xl"
            onClick={() => {
              setIsOpen(false);
              window.location.href = "mailto:tsacpt@2021@gmail.com";
            }}
          >
            Contact
          </button>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
