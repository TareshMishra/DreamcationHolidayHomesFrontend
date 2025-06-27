import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from "../assets/logo.png";
import { useState, useEffect } from 'react';

const Navbar = ({ isMenuOpen, setIsMenuOpen, openForm }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const navItems = [
        { name: 'Services', href: '#home' },
        { name: 'Properties', href: '#properties' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navBackground = scrolled || isMenuOpen;
    const textColor = navBackground ? 'text-[#0b0c10]' : 'text-[#f8f9fa]';

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${navBackground ? 'bg-white/90 shadow-sm shadow-[#e6c200]' : 'bg-transparent'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="mx-auto px-4 sm:px-6 lg:px-12 max-w-8xl w-full overflow-hidden">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex justify-center items-end">
                        <a href="/" className="flex items-center sm:w-48 w-60 lg:w-80 mt-4">
                            <img
                                src={logo}
                                alt="logo"
                                className={`h-full w-full object-cover transition-all duration-300 ${navBackground ? 'opacity-100' : 'opacity-90'}`}
                            />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center text-base space-x-6 lg:space-x-10 py-6">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`${textColor} hover:text-gold transition-colors duration-300 font-medium`}
                            >
                                {item.name}
                            </a>
                        ))}
                        <button
                            onClick={openForm}
                            className="bg-gold text-[#0b0c10] hover:bg-[#e6c200] hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium py-2 px-6 rounded-lg ml-4 border border-gold"
                        >
                            Contact Us
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`inline-flex items-center justify-center p-2 rounded-md ${textColor} hover:text-gold focus:outline-none transition-colors duration-300`}
                        >
                            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden fixed top-[65px] left-0 right-0 w-full bg-white/95 shadow-xl backdrop-blur-md rounded-b-2xl border-t border-gold/40 z-40"
                >
                    <div className="flex flex-col items-center py-6 px-4 space-y-4">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-base font-medium text-[#0b0c10] hover:text-gold transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}

                        <button
                            onClick={() => {
                                openForm();
                                setIsMenuOpen(false);
                            }}
                            className="mt-2 bg-gold text-[#0b0c10] hover:bg-gold-dark transition-all duration-300 py-2 px-6 rounded-lg border border-gold-dark"
                        >
                            Contact Us
                        </button>
                    </div>
                </motion.div>
            )}
        </motion.nav>


    );
};

export default Navbar;