
import { useState } from 'react';
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

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(true);

    return (
        <div className="min-h-screen ">
            {/* Navigation */}
            <Navbar
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                openForm={() => setIsFormOpen(true)}
            />

            {/* Main Content */}
            <Hero openForm={() => setIsFormOpen(true)} />
            <main className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-14'>
                <PropertyHighlights />
                <ExperienceSection />
                <Testimonials />
            </main>
            <UnforgettableExperience />
            <Footer openForm={() => setIsFormOpen(true)} />

            {/* Floating Contact Button */}
            <FloatingContactButton onClick={() => setIsFormOpen(true)} />
            {/* Contact Form Modal */}
            <AnimatePresence>
                {isFormOpen && (
                    <ContactFormModal onClose={() => setIsFormOpen(false)} />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Home;