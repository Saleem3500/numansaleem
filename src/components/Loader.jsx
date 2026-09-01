import React from 'react';

const Loader = () => {
    return (
        <div
            id="loader"
            className="fixed inset-0 z-[10000] bg-lightBg dark:bg-darkBg flex flex-col items-center justify-center gap-6 transition-colors duration-300"
        >
            <div className="spinner" role="status" aria-label="Loading"></div>
            <span className="spinner-label">Loading</span>
        </div>
    );
};

export default Loader;
