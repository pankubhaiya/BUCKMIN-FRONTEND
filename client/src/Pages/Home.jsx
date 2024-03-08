import React, { useState } from 'react';
import DpMenu from '../Component/Menu';
import Header from '../Component/Header';
const Home = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className="h-screen flex w-screen bg-white">
            {/* Sidebar */}
            <DpMenu />
            <Header />
           
        </div>
    );
};

export default Home;
