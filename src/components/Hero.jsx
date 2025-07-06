import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import hero1 from "../assets/hero1.jpg"
import hero2 from "../assets/hero2.jpg"
import hero3 from "../assets/hero3.jpg"
import hero4 from "../assets/hero4.jpg"


const Hero = ({ openForm }) => {
    // Dubai luxury property images
    const backgroundImages = [hero1, hero2, hero3, hero4];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    
    // Change background every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % backgroundImages.length
            );
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Track scroll position
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            id="home"
            className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black"
        >
            {/* Background Images (No Blur) */}
            <div className="absolute inset-0 z-0">
                {backgroundImages.map((img, index) => (
                    <motion.img
                        key={index}
                        src={img}
                        alt="Luxury Dubai Property"
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{
                            opacity: index === currentImageIndex ? 1 : 0,
                            scale: index === currentImageIndex ? 1.05 : 1.1,
                        }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                ))}
                {/* Overlay Gradient (still keeps depth) */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#0b0c10]/90 z-10"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-[#f8f9fa] drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]"
                >
                    Discover Your <span className="text-gold drop-shadow-[0_0px_2px_#c9a227]">Dream</span> Luxury Apartments in Dubai
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg sm:text-xl mb-8 text-[#f8f9fa]/90 max-w-2xl mx-auto leading-relaxed"
                >
                    Experience unparalleled luxury with our curated selection of premium Dubai properties.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row justify-center gap-4 items-center"
                >
                    <button
                        onClick={openForm}
                        className="bg-gold text-[#0b0c10] hover:bg-gold-dark hover:shadow-[0_4px_20px_#ffd700aa] transform hover:scale-105 transition-all duration-300 font-semibold py-3 px-8 rounded-xl cursor-pointer"
                    >
                        Get in Touch
                    </button>
                    <button
                        className="border border-[#f8f9fa] text-[#f8f9fa] hover:bg-[#f8f9fa] hover:text-[#0b0c10] hover:shadow-[0_4px_20px_#ffffff55] transform hover:scale-105 transition-all duration-300 font-semibold py-3 px-8 rounded-xl cursor-pointer"
                        onClick={()=> navigate('/properties')}
                    >
                        Browse Properties
                    </button>
                </motion.div>
            </div>
        </section>


    );
};

export default Hero;