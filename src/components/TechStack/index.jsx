import React from 'react';

const techItems = [
    { icon: "fab fa-react", name: "React.js" },
    { icon: "fas fa-layer-group", name: "Next.js" },
    { icon: "fas fa-file-code", name: "TypeScript" },
    { icon: "fab fa-node-js", name: "Node.js" },
    { icon: "fab fa-js-square", name: "JavaScript" },
    { icon: "fas fa-table", name: "PostgreSQL" },
    { icon: "fas fa-database", name: "SQL / MongoDB" },
    { icon: "fas fa-project-diagram", name: "GraphQL" },
    { icon: "fab fa-aws", name: "AWS" },
    { icon: "fab fa-html5", name: "HTML5" },
    { icon: "fab fa-css3-alt", name: "CSS3 / Tailwind" },
    { icon: "fab fa-git-alt", name: "Git / GitHub" },
    { icon: "fas fa-rocket", name: "Oracle Apex" },
];

const TechStack = () => {
    return (
        <div className="infinite-scroll-container glass-nav border-t border-b border-primary/10">
            <div className="infinite-scroll-track">
                {/* Duplicate the array inline to enable smooth infinite scrolling */}
                {[...techItems, ...techItems].map((tech, idx) => (
                    <div key={idx} className="infinite-scroll-item">
                        <i className={tech.icon}></i> {tech.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;
