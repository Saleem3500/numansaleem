import React from 'react';
import { Link } from "react-router-dom";
const Skills = () => {
    return (
        <section id="skills" className="py-24 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="mb-16" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="text-gradient">Core Skills</span>
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        I offer a diverse set of services bridging the gap between technical execution and visual aesthetics. From full-stack web architectures in React.js, Next.js, Node.js and TypeScript, to database work in PostgreSQL, SQL and Oracle APEX, plus creative graphic design and efficient office management.
                    </p>
                </div>

                <div className="glass-panel p-8 md:p-12 rounded-3xl shadow-2xl relative mb-12 transform hover:scale-[1.01] transition-transform duration-500" data-aos="zoom-in" data-aos-delay="100">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-3xl blur-xl"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center text-3xl text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                <i className="fas fa-code"></i>
                            </div>
                            <h3 className="font-bold text-lg">Web Dev</h3>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center text-3xl text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                                <i className="fas fa-paint-brush"></i>
                            </div>
                            <h3 className="font-bold text-lg">Graphic Design</h3>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-3xl text-green-500 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                                <i className="fas fa-briefcase"></i>
                            </div>
                            <h3 className="font-bold text-lg">Management</h3>
                        </div>
                    </div>
                </div>

                {/* Could point to full skills page if routing was added, keeping placeholder for now */}
                <Link
                    to="/skills"
                    className="inline-flex items-center justify-center gap-2 interactive px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:-translate-y-1 transition-all duration-300"
                >
                    <span>Explore In Details</span>
                    <i className="fas fa-arrow-right"></i>
                </Link>
            </div>
        </section>
    );
};

export default Skills;
