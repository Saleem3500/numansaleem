import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        id: 0,
        title: "Associate Software Developer (Full Time)",
        company: "AdamDevSol, Lahore",
        date: "Aug 2025 – Present",
        type: "primary",
        icon: "fa-laptop-code",
        stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS", "REST APIs"],
        points: [
            "Develop and maintain responsive full-stack web applications",
            "Build reusable frontend components and integrate REST APIs",
            "Work with Next.js, Node.js, TypeScript, PostgreSQL, and AWS",
            "Collaborate with team members to deliver reliable, user-friendly solutions"
        ]
    },
    {
        id: 1,
        title: "Associate Developer (Full Time)",
        company: "Wizmen Systems, Wapda Town, Lahore",
        date: "Feb 2024 – Jun 2025",
        type: "secondary",
        icon: "fa-chart-line",
        stack: ["Oracle APEX", "SQL", "Bootstrap", "Node.js", "Express.js"],
        points: [
            "Implemented activity-tracking mechanisms to analyze 50+ user behavior patterns for data-driven decision-making",
            "Designed 10+ interactive dashboards and data visualizations using Oracle APEX",
            "Reduced data retrieval time by 30% through dashboard and query optimization",
            "Generated 10+ monthly analytical reports using SQL and Bootstrap Tables"
        ]
    },
    {
        id: 2,
        title: "Graphic Designer (3-Month Contract)",
        company: "Rafiperr Global Entertainment",
        date: "Jan 2025 – Feb 2025",
        type: "secondary",
        icon: "fa-palette",
        stack: ["Adobe Photoshop", "Illustrator", "AI Tools"],
        points: [
            "Served as Graphic Designer in Lahore & Cattle Show contract role",
            "Designed branding materials and social media creatives using AI, Photoshop & Illustrator",
            "Collaborated with marketing teams to align visuals with brand identity"
        ]
    },
    {
        id: 3,
        title: "Frontend Developer (Contract Base)",
        company: "Auraniums, Lahore",
        date: "June 2024 – September 2024",
        type: "primary",
        icon: "fa-code",
        stack: ["React.js", "CSS", "Bootstrap 5", "JavaScript", "HTML5", "Adobe Photoshop"],
        points: [
            "Built dynamic and responsive business profiles and client websites",
            "Delivered 4+ client websites with complete cross-browser compatibility",
            "Redesigned the company website"
        ]
    },
    {
        id: 4,
        title: "Full Stack Intern (3 Months)",
        company: "Code Graphers, Lahore, Pakistan",
        date: "Apr 2023 – Jun 2023",
        type: "secondary",
        icon: "fa-server",
        stack: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Database Design"],
        points: [
            "Integrated 8+ RESTful APIs, reducing server response time by 20%",
            "Designed scalable database schemas for efficient data management across multiple modules",
            "Developed and tested backend features using Node.js and Express.js",
            "Collaborated with the development team to build and maintain scalable web applications"
        ]
    }
];

const ExperiencePage = () => {
    return (
        <main className="pt-32 pb-24 relative z-10 min-h-screen">
            <div className="max-w-5xl mx-auto px-6">
                <header className="text-center mb-20" data-aos="fade-down">
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
                        My <span className="text-gradient">Professional</span> Journey
                    </h1>
                    <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        A detailed timeline of my roles, responsibilities, and key achievements throughout my career.
                    </p>
                </header>

                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
                        {experiences.map((exp, index) => {
                            const cardVariants = {
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: 'spring', bounce: 0.4, delay: index * 0.1 } }
                            };

                            return (
                                <motion.div
                                    key={exp.id}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-50px" }}
                                    variants={cardVariants}
                                    className="glass-panel p-8 rounded-3xl relative w-full interactive group hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] dark:hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300 transform hover:-translate-y-2 text-left flex flex-col h-full"
                                    style={{ borderTop: `4px solid ${exp.type === 'primary' ? '#0ea5e9' : '#a855f7'}` }}
                                >
                                    {/* Fancy background glow */}
                                    <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 rounded-full blur-3xl pointer-events-none group-hover:opacity-20 transition-opacity ${exp.type === 'primary' ? 'bg-primary' : 'bg-secondary'}`}></div>

                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl text-white shadow-lg flex-shrink-0 ${exp.type === 'primary' ? 'bg-gradient-to-br from-primary to-blue-600' : 'bg-gradient-to-br from-secondary to-purple-600'}`}>
                                            <i className={`fas ${exp.icon}`}></i>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold leading-tight">{exp.title}</h3>
                                            <span className={`text-sm font-semibold tracking-wider uppercase ${exp.type === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                                                {exp.date}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-base font-semibold text-slate-700 dark:text-slate-300 mb-6 flex items-center gap-2">
                                        <i className="fas fa-building text-slate-400"></i> {exp.company}
                                    </p>

                                    <ul className="space-y-3 flex-grow">
                                        {exp.points.map((point, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm md:text-base">
                                                <i className={`fas fa-check-circle mt-1 flex-shrink-0 ${exp.type === 'primary' ? 'text-primary/70' : 'text-secondary/70'}`}></i>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tech Stack Row */}
                                    <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-2">
                                        {exp.stack.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className={`px-3 py-1.5 text-xs font-bold rounded-full border border-slate-200 dark:border-white/10 glass-panel cursor-default transition-all duration-300 hover:-translate-y-1 ${exp.type === 'primary'
                                                    ? 'hover:shadow-[0_0_15px_rgba(14,165,233,0.5)] hover:border-primary/50 text-slate-700 dark:text-slate-200 hover:text-primary'
                                                    : 'hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:border-secondary/50 text-slate-700 dark:text-slate-200 hover:text-secondary'
                                                    }`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ExperiencePage;
