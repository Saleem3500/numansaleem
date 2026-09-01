import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
// Layout & UI Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TechStack from './components/TechStack';
import SocialSidebar from './components/SocialSidebar';
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import AmbientBackground from './components/AmbientBackground';

// Page Components
import Hero from './components/Hero';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import GraduationStory from './components/GraduationStory/GraduationStory';
import SkillsPage from './components/SkillsPage';
import ExperiencePage from './components/ExperiencePage';
import ProjectsPage from './components/ProjectsPage';
import EducationPage from './components/EducationPage';
import GalleryPage from './components/GalleryPage';
import Contact from './components/Contact';
import { Analytics } from "@vercel/analytics/react"

// A single composition component for the Home layout
const HomePage = () => (
  <>
    <Hero />
    <Skills />
    <GraduationStory />
    <Achievements />
  </>
);

const App = () => {
  // Read initial theme directly from the DOM to avoid flashes or mismatched states
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  );

  // Track loading state explicitly
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();

  // App initialization & loader handling
  useEffect(() => {
    // Lock scrolling while loader is active
    document.body.style.overflow = 'hidden';

    // Helper to finish loading sequence safely
    const completeLoading = () => {
      document.body.style.overflow = 'auto';
      document.body.style.overflowX = 'clip';
      setIsLoading(false);

      // Initialize AOS safely after content is visible
      if (window.AOS) window.AOS.init({ duration: 800, once: true });
    };

    // If GSAP is available, use it for the smooth animation sequence
    if (window.gsap) {
      window.gsap.timeline()
        .to('.spinner, .spinner-label', { scale: 0.8, opacity: 0, duration: 0.5, ease: 'power2.in' })
        .to('#loader', { opacity: 0, duration: 0.6, onComplete: completeLoading });
    } else {
      completeLoading();
    }
  }, []);

  // Handle route switching & smooth scrolling
  useEffect(() => {
    let frame;

    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Arriving from another route, the target section is not painted yet on
      // the first pass, so retry for a few frames before giving up.
      const scrollToHash = (attempt = 0) => {
        const targetElement = document.querySelector(location.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        } else if (attempt < 20) {
          frame = requestAnimationFrame(() => scrollToHash(attempt + 1));
        }
      };
      scrollToHash();
    }

    // Refresh scroll animations dynamically whenever layout changes
    if (window.AOS) {
      setTimeout(() => window.AOS.refreshHard(), 100);
    }

    return () => cancelAnimationFrame(frame);
  }, [location]);

  // Simplify theme toggling logic
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!document.documentElement.classList.contains('dark') ? false : true);
  };

  return (
    <>
      <Cursor />
      <AmbientBackground />

      {/* Conditionally unmount loader when finished */}
      {isLoading && <Loader />}

      <div
        id="main-content"
        style={{
          opacity: isLoading ? 0 : 1,
          visibility: isLoading ? 'hidden' : 'visible',
          transition: 'opacity 0.8s ease',
        }}
        className="min-h-screen flex flex-col"
      >
        <Navbar toggleTheme={toggleTheme} isDark={isDark} />

        {/* Define your application's routing map cleanly */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </main>

        <TechStack />
        <Contact />
        <Footer />
        <SocialSidebar />
        <Analytics />
      </div>
    </>
  );
};

export default App;
