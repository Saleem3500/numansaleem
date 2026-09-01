import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Stars, Float } from '@react-three/drei';
import * as THREE from 'three';
import './ProjectsPage.css';

const myProjects = [
    {
        id: 10,
        title: "OpenHouse",
        tag: "Backend / GraphQL",
        year: "2026",
        desc: "Scalable backend services for the OpenHouse platform in Node.js, TypeScript and PostgreSQL. Built GraphQL APIs, managed schema changes with TypeORM migrations, and maintained Swagger/OpenAPI docs for REST endpoints.",
        tech: ["Next.js", "Tailwind", "Express.js", "PostgreSQL", "GraphQL", "TypeORM"],
        type: "primary",
        link: "https://onopenhouse.co.uk/",
        github: "#"
    },
    {
        id: 11,
        title: "Inventory & Invoice Management System",
        tag: "Full Stack",
        year: "2026",
        desc: "Full-stack inventory and invoice system with CRUD for 100+ products and invoices. Downloadable PDF invoice generation cut manual processing time by 60%. Structured as a Monorepo and deployed on Vercel.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Vercel"],
        type: "secondary",
        link: "#",
        github: "#"
    },
    {
        id: 12,
        title: "Smart Digital Ad-Display System",
        tag: "AI / Computer Vision",
        year: "2025",
        desc: "Engineered a real-time targeted advertising system using YOLO object detection for accurate human recognition. Built dynamic ad-display logic that matched advertisements to detected user context and demographics, with frontend and backend integrated over RESTful APIs for real-time data communication.",
        tech: ["React.js", "Node.js", "YOLO", "MySQL", "REST APIs"],
        type: "primary",
        link: "#",
        github: "#"
    },
    {
        id: 13,
        title: "Personal Portfolio Website",
        tag: "Frontend",
        year: "2025",
        desc: "Implemented responsive design principles ensuring a seamless experience across all screen sizes and devices. Optimized for ATS compatibility and professional project showcasing to maximize recruiter engagement.",
        tech: ["React.js", "Tailwind", "Framer Motion"],
        type: "secondary",
        link: "https://numansaleem.netlify.app/",
        github: "#"
    },
    {
        id: 1,
        title: "Chrome Extensions",
        tag: "V3 Extension",
        year: "2024",
        desc: "Developed production-ready extensions: Daily Expense Manager for financial tracking and Font Changer for dynamic webpage font customization.",
        tech: ["Chrome API", "JavaScript", "HTML/CSS"],
        type: "secondary",
        link: "#",
        github: "#"
    },
    {
        id: 2,
        title: "Hospital Management System",
        tag: "Full Stack",
        year: "2024",
        desc: "A comprehensive web-based management solution for healthcare providers. Developed modules for real-time patient registration, doctor scheduling, and automated billing using SQL and modern JavaScript.",
        tech: ["JavaScript", "SQL Database", "Admin Dashboard", "Node.js"],
        type: "primary",
        link: "#",
        github: "#"
    },
    {
        id: 3,
        title: "Digital Khata",
        tag: "Finance",
        year: "2024",
        desc: "A specialized high-performance Accounting System for managing daily 'Leen Deen' (Debit/Credit) transactions. Features automated balancing, secure user management with SQL/XAMPP, and one-click printable invoices.",
        tech: ["React.js", "SQL/XAMPP", "Financial Log", "Print API"],
        type: "secondary",
        link: "#",
        github: "#"
    },
    {
        id: 4,
        title: "Auraniums Portfolio Redesign",
        tag: "Frontend",
        year: "2024",
        desc: "Redesigned the company website for Auraniums, focusing on modern aesthetics and performance, increasing page load speed by 35%.",
        tech: ["React.js", "Tailwind CSS", "Framer Motion"],
        type: "primary",
        link: "#",
        github: "#"
    },
    {
        id: 5,
        title: "Wizmen Reporting Dashboard",
        tag: "Enterprise",
        year: "2025",
        desc: "Designed 10+ dashboards and graphs using Oracle Apex queries. Generates monthly reports utilizing SQL formulas and Bootstrap Tables.",
        tech: ["Oracle Apex", "SQL", "Bootstrap"],
        type: "secondary",
        link: "#",
        github: "#"
    },
    {
        id: 6,
        title: "MERN To-Do App",
        tag: "Full Stack",
        year: "2023",
        desc: "Developed a full-stack To-Do List application supporting 100+ concurrent users with JWT authentication and RESTful APIs.",
        tech: ["MongoDB", "Express", "React", "Node.js"],
        type: "primary",
        link: "#",
        github: "#"
    }
];

const CARD_SPACING = 20;
const FIRST_CARD_DEPTH = 24;
const RUN_OFF = 30;

const isRealLink = (url) => Boolean(url) && url !== '#';

const ProjectCard = ({ project }) => {
    const isPrimary = project.type === 'primary';
    const showSource = isRealLink(project.github);
    const showLive = isRealLink(project.link);

    return (
        <article className="w-full text-left rounded-2xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-7 shadow-xl transition-colors duration-300 hover:border-primary/60">
            <div className="flex items-center justify-between gap-3 mb-5">
                <span
                    className={`px-3 py-1 text-[11px] font-bold rounded-full ${isPrimary
                        ? 'bg-primary/15 text-primary'
                        : 'bg-secondary/15 text-secondary'}`}
                >
                    {project.tag}
                </span>
                <span className="text-[11px] font-semibold tracking-wider text-slate-500 dark:text-slate-400">
                    {project.year}
                </span>
            </div>

            <h3 className="text-2xl font-extrabold mb-3 text-slate-900 dark:text-white leading-snug">
                {project.title}
            </h3>

            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 mb-5">
                {project.desc}
            </p>

            <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                    <span
                        key={tech}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Only render the links that actually go somewhere. */}
            {(showSource || showLive) && (
                <div className="flex gap-5 mt-6 pt-5 border-t border-slate-200 dark:border-white/10">
                    {showSource && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors flex items-center gap-2"
                        >
                            <i className="fab fa-github text-lg"></i> Source
                        </a>
                    )}
                    {showLive && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-secondary transition-colors flex items-center gap-2"
                        >
                            <i className="fas fa-external-link-alt"></i> Live
                        </a>
                    )}
                </div>
            )}
        </article>
    );
};

const SceneCard = ({ project, index }) => {
    const wrapper = useRef(null);
    const cardZ = -(index * CARD_SPACING) - FIRST_CARD_DEPTH;

    // The camera flies through the track, so a card that stayed opaque would
    // blow up to fill the screen and smear over its neighbours on the way past.
    // Fade each one out just before the camera reaches it.
    useFrame(({ camera }) => {
        const el = wrapper.current;
        if (!el) return;

        const distance = camera.position.z - cardZ;
        const opacity = THREE.MathUtils.clamp((distance - 5) / 8, 0, 1);

        el.style.opacity = opacity;
        el.style.pointerEvents = opacity > 0.9 ? 'auto' : 'none';
    });

    return (
        <group position={[index % 2 === 0 ? -4.5 : 4.5, 0, cardZ]}>
            <Float floatIntensity={1.5} speed={1.2} rotationIntensity={0.3}>
                <Html transform center scale={0.7} distanceFactor={15} zIndexRange={[90, 0]}>
                    <div ref={wrapper} className="w-[400px]">
                        <ProjectCard project={project} />
                    </div>
                </Html>
            </Float>
        </group>
    );
};

const JourneyCamera = ({ scrollProgress }) => {
    useFrame((state, delta) => {
        const maxZ = myProjects.length * CARD_SPACING + RUN_OFF;
        const targetZ = 5 - scrollProgress.get() * maxZ;
        state.camera.position.z = THREE.MathUtils.damp(state.camera.position.z, targetZ, 4, delta);
    });
    return null;
};

const Scene = ({ scrollProgress }) => (
    <>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 15, 10]} intensity={1.2} />

        <fog attach="fog" args={['#020617', 10, 50]} />
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

        <JourneyCamera scrollProgress={scrollProgress} />

        <group position={[0, -4, 0]}>
            <gridHelper args={[300, 150, '#38bdf8', '#0f172a']} position={[0, 0, -100]} />
            <mesh position={[0, 0.05, -100]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[0.2, 300]} />
                <meshBasicMaterial color="#38bdf8" transparent opacity={0.7} />
            </mesh>
        </group>

        {myProjects.map((project, index) => (
            <SceneCard key={project.id} project={project} index={index} />
        ))}
    </>
);

const ProjectsPage = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });


    const headerOpacity = useTransform(scrollYProgress, [0, 0.04], [1, 0]);
    const headerY = useTransform(scrollYProgress, [0, 0.04], [0, -80]);
    const hintOpacity = useTransform(scrollYProgress, [0, 0.03], [1, 0]);

    return (
        <main className="projects-wrapper dark:bg-[#020617]">
            {/* Desktop: the 3D journey */}
            <div
                ref={container}
                className="projects-canvas-container"
                style={{ height: `${myProjects.length * 75 + 50}vh` }}
            >
                <div className="sticky top-0 w-full h-screen overflow-hidden">
                    <motion.header
                        style={{ opacity: headerOpacity, y: headerY }}
                        className="absolute top-24 left-0 w-full px-6 text-center z-10 pointer-events-none"
                    >
                        <h1 className="project-3d-title font-extrabold leading-tight mb-4 text-white">
                            Project <span className="text-gradient">Journey</span>
                        </h1>
                    </motion.header>

                    <div className="absolute inset-0 z-0">
                        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                            <Scene scrollProgress={scrollYProgress} />
                        </Canvas>
                    </div>

                    <motion.div
                        style={{ opacity: hintOpacity }}
                        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70 pointer-events-none animate-bounce"
                    >
                        <i className="fas fa-chevron-down text-2xl"></i>
                        <span className="tracking-[0.3em] uppercase text-[10px] font-bold">Scroll</span>
                    </motion.div>

                    {/* Progress rail */}
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 h-1/2 w-1 rounded-full bg-white/10 overflow-hidden z-10 pointer-events-none hidden md:block">
                        <motion.div
                            className="w-full bg-primary"
                            style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                        />
                    </div>
                </div>
            </div>

            {/* Mobile: the same cards, as a plain list */}
            <div className="projects-mobile-container pt-32 pb-24 px-6 min-h-screen">
                <header className="text-center mb-12" data-aos="fade-down">
                    <h1 className="project-mobile-title font-extrabold leading-tight mb-3 text-slate-900 dark:text-white">
                        Project <span className="text-gradient">Journey</span>
                    </h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        My work, newest first.
                    </p>
                </header>

                <div className="flex flex-col items-center gap-6">
                    {myProjects.map((project) => (
                        <div key={project.id} data-aos="fade-up" className="w-full max-w-sm">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default ProjectsPage;
