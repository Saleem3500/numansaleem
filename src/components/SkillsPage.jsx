import React from 'react';

const SkillsPage = () => {
    return (
        <>
            <header className="pt-36 pb-16 relative z-10 text-center">
                <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
                    {/* Large Avatar Feature */}
                    <div className="mb-10 flex justify-center" data-aos="zoom-in">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glass-panel border-4 border-primary/30 p-3 shadow-2xl shadow-primary/20 group interactive transition-colors duration-500 hover:border-primary">
                            <img src="/w.png" alt="M. Numan Saleem Sketch"
                                className="w-full h-full object-cover rounded-[50%] bg-white dark:bg-slate-800 transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full pointer-events-none"></div>
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4" data-aos="fade-down" data-aos-delay="100">
                        My <span className="text-gradient">Skills</span> & Tech Stacks
                    </h1>
                    <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl text-center mx-auto" data-aos="fade-up" data-aos-delay="200">
                        A comprehensive breakdown of the tools, technologies, and skills I utilize to craft exceptional digital products and manage efficient workflows.
                    </p>
                </div>
            </header>

            <section className="py-12 relative z-10">
                <div className="max-w-7xl mx-auto px-6 space-y-20">

                    {/* 1. Web Development */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" data-aos="fade-up">
                        <div className="lg:col-span-4 space-y-4">
                            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center text-left justify-center text-3xl text-primary mb-6">
                                <i className="fas fa-code"></i>
                            </div>
                            <h2 className="text-3xl font-bold">Full Stack Web Development</h2>
                            <p className="text-slate-500 dark:text-slate-400">
                                From robust backend architectures to dynamic, responsive frontend interfaces. I specialize in React.js, Next.js and the MERN stack, write type-safe code with TypeScript, and use modern CSS frameworks to deliver seamless user experiences.
                            </p>
                        </div>
                        <div className="lg:col-span-8">
                            <div className="glass-panel p-8 rounded-3xl grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="flex flex-col items-center gap-3 interactive group">
                                    <i className="fab fa-react text-4xl text-blue-400 group-hover:scale-110 transition-transform"></i>
                                    <span className="font-medium text-sm">React.js</span>
                                </div>
                                <div className="flex flex-col items-center gap-3 interactive group">
                                    <i className="fab fa-node-js text-4xl text-green-500 group-hover:scale-110 transition-transform"></i>
                                    <span className="font-medium text-sm">Node.js</span>
                                </div>
                                <div className="flex flex-col items-center gap-3 interactive group">
                                    <i className="fab fa-js-square text-4xl text-yellow-400 group-hover:scale-110 transition-transform"></i>
                                    <span className="font-medium text-sm">JavaScript ES6</span>
                                </div>
                                <div className="flex flex-col items-center gap-3 interactive group">
                                    <i className="fas fa-database text-4xl text-blue-500 group-hover:scale-110 transition-transform"></i>
                                    <span className="font-medium text-sm">SQL & NoSQL</span>
                                </div>
                                <div className="flex flex-col items-center gap-3 interactive group">
                                    <i className="fab fa-html5 text-4xl text-orange-500 group-hover:scale-110 transition-transform"></i>
                                    <span className="font-medium text-sm">HTML5</span>
                                </div>
                                <div className="flex flex-col items-center gap-3 interactive group">
                                    <i className="fab fa-css3-alt text-4xl text-blue-500 group-hover:scale-110 transition-transform"></i>
                                    <span className="font-medium text-sm">CSS3</span>
                                </div>
                                <div className="flex flex-col items-center gap-3 interactive group">
                                    <i className="fas fa-wind text-4xl text-cyan-400 group-hover:scale-110 transition-transform"></i>
                                    <span className="font-medium text-sm">Tailwind CSS</span>
                                </div>
                                <div className="flex flex-col items-center gap-3 interactive group">
                                    <i className="fas fa-server text-4xl text-purple-500 group-hover:scale-110 transition-transform"></i>
                                    <span className="font-medium text-sm">Express & APIs</span>
                                </div>
                                <div className="flex flex-col items-center gap-3 interactive group">
                                    <i className="fas fa-layer-group text-4xl text-slate-700 dark:text-slate-200 group-hover:scale-110 transition-transform"></i>
                                    <span className="font-medium text-sm">Next.js</span>
                                </div>
                                <div className="flex flex-col items-center gap-3 interactive group">
                                    <i className="fas fa-file-code text-4xl text-blue-600 group-hover:scale-110 transition-transform"></i>
                                    <span className="font-medium text-sm">TypeScript</span>
                                </div>
                                <div className="flex flex-col items-center gap-3 interactive group">
                                    <i className="fas fa-table text-4xl text-sky-600 group-hover:scale-110 transition-transform"></i>
                                    <span className="font-medium text-sm">PostgreSQL</span>
                                </div>
                                <div className="flex flex-col items-center gap-3 interactive group">
                                    <i className="fab fa-aws text-4xl text-orange-400 group-hover:scale-110 transition-transform"></i>
                                    <span className="font-medium text-sm">AWS</span>
                                </div>
                                <div className="flex flex-col items-center gap-3 interactive group">
                                    <i className="fas fa-project-diagram text-4xl text-pink-500 group-hover:scale-110 transition-transform"></i>
                                    <span className="font-medium text-sm">GraphQL</span>
                                </div>
                                <div className="flex flex-col items-center gap-3 interactive group">
                                    <i className="fas fa-leaf text-4xl text-green-600 group-hover:scale-110 transition-transform"></i>
                                    <span className="font-medium text-sm">MongoDB</span>
                                </div>
                                <div className="flex flex-col items-center gap-3 interactive group">
                                    <i className="fas fa-bolt text-4xl text-emerald-500 group-hover:scale-110 transition-transform"></i>
                                    <span className="font-medium text-sm">Supabase</span>
                                </div>
                                <div className="flex flex-col items-center gap-3 interactive group">
                                    <i className="fab fa-git-alt text-4xl text-orange-600 group-hover:scale-110 transition-transform"></i>
                                    <span className="font-medium text-sm">Git / GitHub</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 1b. Databases, Cloud & Developer Tooling */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" data-aos="fade-up">
                        <div className="lg:col-span-8 order-2 lg:order-1">
                            <div className="glass-panel p-8 rounded-3xl grid grid-cols-2 md:grid-cols-4 gap-6">
                                {[
                                    { icon: 'fas fa-database', color: 'text-sky-500', name: 'Oracle APEX' },
                                    { icon: 'fas fa-table', color: 'text-blue-400', name: 'PostgreSQL' },
                                    { icon: 'fas fa-cloud', color: 'text-orange-400', name: 'AWS' },
                                    { icon: 'fas fa-paper-plane', color: 'text-orange-500', name: 'Postman' },
                                    { icon: 'fas fa-bug', color: 'text-yellow-500', name: 'Chrome DevTools' },
                                    { icon: 'fas fa-code', color: 'text-blue-500', name: 'VS Code' },
                                    { icon: 'fab fa-npm', color: 'text-red-500', name: 'NPM' },
                                    { icon: 'fas fa-cubes', color: 'text-purple-400', name: 'Monorepo / Vercel' },
                                ].map((tool) => (
                                    <div key={tool.name} className="flex flex-col items-center gap-3 interactive group text-center">
                                        <i className={`${tool.icon} text-4xl ${tool.color} group-hover:scale-110 transition-transform`}></i>
                                        <span className="font-medium text-sm">{tool.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-4 space-y-4 order-1 lg:order-2">
                            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-3xl text-primary mb-6">
                                <i className="fas fa-database"></i>
                            </div>
                            <h2 className="text-3xl font-bold">Databases, Cloud & Tooling</h2>
                            <p className="text-slate-500 dark:text-slate-400 text-left">
                                Designing schemas, optimizing queries and shipping to the cloud. I work daily with relational and document databases, build and document REST/GraphQL endpoints, and deploy monorepo applications with modern CI-friendly tooling.
                            </p>
                        </div>
                    </div>

                    {/* 2. Graphic Design */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" data-aos="fade-up">
                        <div className="lg:col-span-8 order-2 lg:order-1">
                            <div className="glass-panel p-8 rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center gap-4 interactive hover:-translate-y-2 transition-transform shadow-lg border-blue-500/20">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" alt="Photoshop" className="w-16 h-16 object-contain" />
                                    <h3 className="font-bold">Adobe Photoshop</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Photo manipulation, raster graphics, UI mocking.</p>
                                </div>
                                <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center gap-4 interactive hover:-translate-y-2 transition-transform shadow-lg border-orange-500/20">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" alt="Illustrator" className="w-16 h-16 object-contain" />
                                    <h3 className="font-bold">Adobe Illustrator</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Vector graphics, logo design, iconography.</p>
                                </div>
                                <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center gap-4 interactive hover:-translate-y-2 transition-transform shadow-lg border-cyan-500/20">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">C</div>
                                    <h3 className="font-bold">Canva</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Rapid social media creatives and presentation design.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-4 space-y-4 order-1 lg:order-2">
                            <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center text-3xl text-secondary mb-6">
                                <i className="fas fa-palette"></i>
                            </div>
                            <h2 className="text-3xl font-bold">Graphic Design</h2>
                            <p className="text-slate-500 text-left dark:text-slate-400">
                                Bridging the gap between engineering and art. I leverage industry-standard design tools to create compelling brands, beautiful assets, and intuitive user interfaces that capture attention.
                                <a href="https://www.instagram.com/optimize_graphic_design?igsh=MTVyc2o2bHN1b3Bkbw==" className='text-blue-500 underline hover:text-blue-400 transition-colors duration-200' target='_blank'>take a look on it...</a>
                            </p>
                        </div>
                    </div>

                    {/* 3. Office Management */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" data-aos="fade-up">
                        <div className="lg:col-span-4 space-y-4">
                            <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center text-3xl text-green-500 mb-6 text-left">
                                <i className="fas fa-briefcase"></i>
                            </div>
                            <h2 className="text-3xl font-bold">Office <br /> Management</h2>
                            <p className="text-slate-500 dark:text-slate-400">
                                Ensuring smooth technical and administrative operations. Skilled in organizing data, managing schedules, and utilizing productivity tools to keep projects and teams moving forward efficiently.
                            </p>
                        </div>
                        <div className="lg:col-span-8">
                            <div className="glass-panel p-8 rounded-3xl">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 dark:hover:bg-slate-800/50 transition-colors">
                                        <i className="fas fa-file-word text-3xl text-blue-600"></i>
                                        <div>
                                            <h4 className="font-bold">Data Management</h4>
                                            <p className="text-xs text-slate-500">Spreadsheets, Docs, Presentations</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 dark:hover:bg-slate-800/50 transition-colors">
                                        <i className="fas fa-users-cog text-3xl text-orange-500"></i>
                                        <div>
                                            <h4 className="font-bold">Team Coordination</h4>
                                            <p className="text-xs text-slate-500">Agile methodologies, task tracking</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 dark:hover:bg-slate-800/50 transition-colors">
                                        <i className="fas fa-chart-line text-3xl text-green-500"></i>
                                        <div>
                                            <h4 className="font-bold">Reporting & Analytics</h4>
                                            <p className="text-xs text-slate-500">Dashboard creation, SQL extracts</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 dark:hover:bg-slate-800/50 transition-colors">
                                        <i className="fas fa-clock text-3xl text-purple-500"></i>
                                        <div>
                                            <h4 className="font-bold">Time Management</h4>
                                            <p className="text-xs text-slate-500">Scheduling, prioritization</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default SkillsPage;
