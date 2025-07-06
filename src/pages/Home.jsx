import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';


import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import FloatingContactButton from '../components/FloatingContactButton';
import ContactFormModal from '../components/ContactFormModal';
import PropertyHighlights from '../components/PropertyHighlights';
import Footer from '../components/Footer';
import ExperienceSection from '../components/ExperienceSection';
import UnforgettableExperience from '../components/UnforgettableExperience';
import GoogleOauth from '../components/GoogleOauth';
import Temp from '../components/Temp';

const Home = ({showGoogleSignIn}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);

    useEffect(()=>{
        setTimeout(() => {
            showGoogleSignIn();
        }, 6000);
    }, [])
    
    return (
        
            <div className="min-h-screen">
                <Navbar
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                    openForm={() => setIsFormOpen(true)}
                />

                <Hero openForm={() => setIsFormOpen(true)} />

                <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-14">
                    <PropertyHighlights />
                    <ExperienceSection />
                    <Testimonials />
                </main>

                <UnforgettableExperience />
                <Footer openForm={() => setIsFormOpen(true)} />

                <FloatingContactButton onClick={() => setIsFormOpen(true)} />

                <AnimatePresence>
                    {isFormOpen && (
                        <ContactFormModal onClose={() => setIsFormOpen(false)} />
                    )}
                </AnimatePresence>
            </div>
    );
};

export default Home;
