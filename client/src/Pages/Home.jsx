import React, { useState, useEffect } from 'react';
import DpMenu from '../Component/Menu';
import Header from '../Component/Header';

const Home = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="h-screen flex w-screen bg-white">
            {windowWidth >= 650 && <DpMenu />}
            <Header />
        </div>
    );
};

export default Home;
