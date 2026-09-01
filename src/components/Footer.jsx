import React from 'react';
import { Link } from 'react-router-dom';

/* Same as the navbar: About is a home-page section, reached through the router
   so the link works identically from every route. */
const ABOUT_ROUTE = '/#about';

const Footer = () => {
    return (
        <footer className="mt-auto pt-10 pb-5 border-t border-slate-200 dark:border-slate-800/50 relative z-10 bg-white/50 dark:bg-darkBg/50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                {/* Brand / Bio */}
                <div className="col-span-1 md:col-span-2 space-y-4">
                    <Link to="/" className="text-3xl font-extrabold tracking-tighter interactive inline-block mb-2">
                        <span className="text-gradient">Numan</span>.
                    </Link>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
                        Software Engineer with 2+ years of experience crafting high-performance, dynamic digital experiences. Specializing in React.js, Next.js, Node.js and database-driven applications.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-bold mb-4 text-slate-800 dark:text-slate-200">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                        <li><Link to={ABOUT_ROUTE} className="hover:text-primary transition-colors interactive">About Me</Link></li>
                        <li><Link to="/projects" className="hover:text-primary transition-colors interactive">Featured Work</Link></li>
                        <li><Link to="/experience" className="hover:text-primary transition-colors interactive">Experience</Link></li>
                        <li><Link to="/gallery" className="hover:text-primary transition-colors interactive">Gallery</Link></li>
                        <li><Link to="/skills" className="hover:text-primary transition-colors interactive">Skills & Expertise</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-lg font-bold mb-4 text-slate-800 dark:text-slate-200">Skills</h4>
                    <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                        <li>Full Stack Web Development</li>
                        <li>React.js / Next.js / TypeScript</li>
                        <li>Node.js & REST / GraphQL APIs</li>
                        <li>SQL, PostgreSQL & Oracle APEX</li>
                        <li>Graphic Design</li>
                        <li>Office Management</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 pt-5 border-t border-slate-200 dark:border-slate-800/50">
                <p className="text-sm text-slate-500 font-medium text-center md:text-left">
                    &copy; 2026 M. Numan Saleem. All Rights Reserved. <br />
                    <span className="text-xs">Based in Lahore, Pakistan (+92 327 4623300)</span>
                </p>
                <div className="flex space-x-4">
                    <a href="https://github.com/Saleem3500" target="_blank" rel="noopener noreferrer" className="interactive w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com/in/numan-saleem-4401b9289" target="_blank" rel="noopener noreferrer" className="interactive w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=numansaleem2003@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="interactive w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-secondary hover:text-white transition-all"
                    >
                        <i className="fas fa-envelope"></i>
                    </a>
                    <a href="https://wa.me/923274623300" target="_blank" rel="noopener noreferrer" className="interactive w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-green-500 hover:text-white transition-all">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
