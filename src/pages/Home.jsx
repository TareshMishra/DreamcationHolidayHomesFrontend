import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { GoogleOAuthProvider } from '@react-oauth/google';

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

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(true);
    const [showGoogleModal, setShowGoogleModal] = useState(false);

    return (
        <GoogleOAuthProvider clientId="919479785161-66geqv1so7nka7mjthplcrg2g9n2g0lq.apps.googleusercontent.com">
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

                {/* Google OAuth Modal */}
                <AnimatePresence>
                    {showGoogleModal && (
                        <GoogleOauth onClose={() => setShowGoogleModal(false)} />
                    )}
                </AnimatePresence>
            </div>
        </GoogleOAuthProvider>
    );
};

export default Home;
