import React from 'react';

const Achievements = () => {
    return (
        <section className="py-24 relative z-10 bg-slate-100/50 dark:bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Awards & <span className="text-gradient">Achievements</span></h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-wrap justify-center gap-6" data-aos="fade-up">
                    {[
                        { icon: 'fas fa-award', color: 'text-yellow-500', title: 'MERN Stack Developer Certification', issuer: 'Theeta Training' },
                        { icon: 'fas fa-certificate', color: 'text-blue-500', title: 'Prompt Engineering Certification', issuer: 'Sololearn' },
                        { icon: 'fas fa-trophy', color: 'text-orange-500', title: 'Coding for Data (SQL)', issuer: 'Sololearn' },
                        { icon: 'fas fa-paint-brush', color: 'text-purple-500', title: 'Graphic Designing Certificate', issuer: null },
                    ].map((cert) => (
                        <div key={cert.title} className="glass-panel px-6 py-4 rounded-full flex items-center gap-3 interactive shadow-lg">
                            <i className={`${cert.icon} ${cert.color} text-2xl`}></i>
                            <span className="font-bold text-left leading-tight">
                                {cert.title}
                                {cert.issuer && (
                                    <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">{cert.issuer}</span>
                                )}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
