
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Calculator, Search } from "lucide-react";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-12 py-4 ${
        isScrolled ? "bg-beige shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-xl font-medium tracking-tight flex items-center gap-2 group text-black font-playfair"
        >
          <span className="bg-black text-beige h-8 w-8 rounded-md flex items-center justify-center">
            <Calculator size={18} />
          </span>
          <span>Calcify</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 font-roboto">
          <Link to="/arithmetic" className="text-sm font-medium text-black hover:text-black/70 transition-colors">Arithmetic</Link>
          <Link to="/financial" className="text-sm font-medium text-black hover:text-black/70 transition-colors">Financial</Link>
          <Link to="/health" className="text-sm font-medium text-black hover:text-black/70 transition-colors">Health</Link>
          <Link to="/physics" className="text-sm font-medium text-black hover:text-black/70 transition-colors">Physics</Link>
          <div className="ml-2">
            <SearchBar />
          </div>
        </div>
        
        {/* Mobile Menu Buttons */}
        <div className="md:hidden flex items-center gap-2">
          <button
            className="text-black p-2"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Toggle search"
          >
            <Search size={20} />
          </button>
          <button 
            className="text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Search */}
      {isSearchOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-sm p-4 border-t border-white/20">
          <SearchBar />
        </div>
      )}
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-beige shadow-md px-6 py-4 flex flex-col gap-4 font-roboto">
          <Link to="/arithmetic" className="text-sm font-medium py-2 text-black hover:text-black/70 transition-colors">Arithmetic</Link>
          <Link to="/financial" className="text-sm font-medium py-2 text-black hover:text-black/70 transition-colors">Financial</Link>
          <Link to="/health" className="text-sm font-medium py-2 text-black hover:text-black/70 transition-colors">Health</Link>
          <Link to="/physics" className="text-sm font-medium py-2 text-black hover:text-black/70 transition-colors">Physics</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
