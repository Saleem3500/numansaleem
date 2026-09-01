import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/* About is a section on the home page. Routing to it through the router (rather
   than a bare "#about" anchor) keeps the URL correct from every route and lets
   App's hash effect do the scrolling, with no full page reload. */
const ABOUT_ROUTE = '/#about';

const Navbar = ({ toggleTheme, isDark }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[80%] max-w-5xl z-[100] glass-nav transition-all duration-300 rounded-2xl border border-white/10 shadow-lg">
            <div className="px-6 py-4 flex justify-between items-center relative">
                <Link to="/" onClick={closeMenu} className="text-2xl font-extrabold tracking-tighter interactive hover:scale-105 transition-transform duration-300">
                    <span className="text-gradient">Numan</span>.
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    <Link to={ABOUT_ROUTE} className="hover:text-primary transition-colors interactive">About</Link>
                    <Link to="/experience" className="hover:text-primary transition-colors interactive">Experience</Link>
                    <Link to="/projects" className="hover:text-primary transition-colors interactive">Projects</Link>
                    <Link to="/education" className="hover:text-primary transition-colors interactive">Education</Link>
                    <Link to="/skills" className="hover:text-primary transition-colors interactive ">Skills & Services</Link>
                    <Link to="/gallery" className="hover:text-primary transition-colors interactive">Gallery</Link>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="interactive p-2 rounded-full glass-panel hover:bg-primary/20 transition-all focus:outline-none w-10 h-10 flex items-center justify-center"
                    >
                        {isDark ? (
                            <i className="fas fa-sun text-yellow-400 block"></i>
                        ) : (
                            <i className="fas fa-moon text-indigo-400 block"></i>
                        )}
                    </button>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        className="md:hidden flex items-center justify-center w-10 h-10 rounded-full glass-panel hover:bg-primary/20 transition-all focus:outline-none text-slate-800 dark:text-slate-200"
                        onClick={toggleMenu}
                    >
                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-[110%] left-0 w-full glass-nav rounded-2xl border border-white/10 shadow-2xl overflow-hidden py-4 flex flex-col items-center space-y-2 font-medium">
                    <Link to={ABOUT_ROUTE} onClick={closeMenu} className="w-full text-center py-3 hover:bg-primary/10 hover:text-primary transition-colors">About</Link>
                    <Link to="/experience" onClick={closeMenu} className="w-full text-center py-3 hover:bg-primary/10 hover:text-primary transition-colors">Experience</Link>
                    <Link to="/projects" onClick={closeMenu} className="w-full text-center py-3 hover:bg-primary/10 hover:text-primary transition-colors">Projects</Link>
                    <Link to="/education" onClick={closeMenu} className="w-full text-center py-3 hover:bg-primary/10 hover:text-primary transition-colors">Education</Link>
                    <Link to="/skills" onClick={closeMenu} className="w-full text-center py-3 hover:bg-primary/10 hover:text-primary transition-colors">Skills & Services</Link>
                    <Link to="/gallery" onClick={closeMenu} className="w-full text-center py-3 hover:bg-primary/10 hover:text-primary transition-colors">Gallery</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
