import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import WhatAreBackroomsSection from './components/WhatAreBackroomsSection';
import LevelsSection from './components/LevelsSection';
import DreamcoreSection from './components/DreamcoreSection';
import SurvivalGuideSection from './components/SurvivalGuideSection';
import Footer from './components/Footer';
import CodeEntryGate from './components/CodeEntryGate';

const App: React.FC = () => {
    return (
        <div className="min-h-screen" style={{ background: 'oklch(0.09 0.008 95)' }}>
            <CodeEntryGate />
            <NavBar />
            <main>
                <HeroSection />
                <WhatAreBackroomsSection />
                <LevelsSection />
                <DreamcoreSection />
                <SurvivalGuideSection />
            </main>
            <Footer />
        </div>
    );
};

export default App;
