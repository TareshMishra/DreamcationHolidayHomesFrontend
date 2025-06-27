import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiPhone, FiMail, FiUser, FiCalendar } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactFormModal = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        checkIn: null,
        checkOut: null,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [openPicker, setOpenPicker] = useState({ checkIn: false, checkOut: false });

    const phoneNumber = '+971521919810';
    const whatsappMessage = 'Hello, I would like to get more information about your services.';

    const openWhatsApp = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(url, '_blank');
    };

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate if check-out date is after check-in date
        if (!formData.checkIn) {
            toast.warn('Check-in date is required');
            return;
        }
        if (!formData.checkOut) {
            toast.warn('Check-out date is required');
            return;
        }

        setIsSubmitting(true);
        try {
            // const url = 'https://dreamcation-backend-1.onrender.com/submit-form'

            // Send the form data including check-in and check-out dates to the backend
            const response = await axios.post('https://dreamcationholidayhomesbackend.onrender.com', {
                ...formData,  // Spread the existing form data
                checkIn: formData.checkIn.toISOString(),
                checkOut: formData.checkOut.toISOString(),
            }, {
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            console.log(response)
            if (response.status === 200) {
                setSubmitSuccess(true);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    checkIn: null,
                    checkOut: null,
                });

                setTimeout(() => {
                    onClose();
                    setSubmitSuccess(false);
                }, 2000);
            } else {
                toast.error('Failed to submit form. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Failed to submit form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <AnimatePresence>
            <ToastContainer />
            <motion.div
                key="contact-form-modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md md"
            >
                <motion.div
                    initial={{ scale: 0.95, y: 20, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.95, y: 20, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className="relative bg-gradient-to-br from-[#0b0c10] to-[#1a1c20] rounded-lg md:rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto overflow-hidden border border-gold/50 max-sm:max-h-[85vh] max-sm:overflow-y-auto"
                >

                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-gold-dark" />

                    <button
                        onClick={onClose}
                        className="absolute z-20 top-2 right-2 sm:top-3 sm:right-3 p-1 sm:p-2 rounded-full text-[#f8f9fa] hover:text-gold focus:outline-none transition-colors duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.3)]"
                        aria-label="Close contact form"
                    >
                        <FiX size={20} className="sm:w-6 sm:h-6" />
                    </button>

                    <div className="p-4 sm:p-6 md:p-8">
                        <div className="text-center mb-4 sm:mb-6 md:mb-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gold mb-1 sm:mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                                Get In Touch
                            </h2>
                            <p className="text-sm sm:text-base text-[#f8f9fa]/80">
                                We'll get back to you within 24 hours
                            </p>
                        </div>

                        {submitSuccess ? (
                            <div className="text-center py-6 sm:py-8 md:py-10">
                                <div className="text-gold text-4xl sm:text-5xl mb-3 sm:mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">✓</div>
                                <h3 className="text-lg sm:text-xl font-bold text-[#f8f9fa] mb-1 sm:mb-2">
                                    Thank You!
                                </h3>
                                <p className="text-sm sm:text-base text-[#f8f9fa]/80">
                                    Your message has been sent successfully.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="relative">
                                    <label htmlFor="name" className="block text-sm font-medium text-[#f8f9fa]/90 mb-1">Your Name</label>
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gold">
                                        <FiUser className="w-5 h-5" />
                                    </div>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={(e) => handleChange('name', e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 rounded-xl border border-gold/30 bg-[#0b0c10]/50 backdrop-blur-sm text-[#f8f9fa] focus:ring-2 focus:ring-gold/50 focus:border-gold"
                                        placeholder="John Smith"
                                        required
                                    />
                                </div>

                                <div className="relative">
                                    <label htmlFor="email" className="block text-sm font-medium text-[#f8f9fa]/90 mb-1">Email Address</label>
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gold">
                                        <FiMail className="w-5 h-5" />
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={(e) => handleChange('email', e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 rounded-xl border border-gold/30 bg-[#0b0c10]/50 backdrop-blur-sm text-[#f8f9fa] focus:ring-2 focus:ring-gold/50 focus:border-gold"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>

                                <div className="relative">
                                    <label htmlFor="phone" className="block text-sm font-medium text-[#f8f9fa]/90 mb-1">Mobile Number</label>
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gold">
                                        <FiPhone className="w-5 h-5" />
                                    </div>
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={(e) => handleChange('phone', e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 rounded-xl border border-gold/30 bg-[#0b0c10]/50 backdrop-blur-sm text-[#f8f9fa] focus:ring-2 focus:ring-gold/50 focus:border-gold"
                                        placeholder="+1 (555) 123-4567"
                                        required
                                    />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {["checkIn", "checkOut"].map((field, idx) => (
                                        <div key={field} className="space-y-1">
                                            <label htmlFor={field} className="block text-sm font-medium text-[#f8f9fa]/90">
                                                {field === "checkIn" ? "Check-In Date" : "Check-Out Date"}
                                            </label>
                                            <button
                                                type="button"
                                                className="w-full flex items-center gap-3 px-3 py-2 rounded-xl border border-gold/30 bg-[#0b0c10]/50 backdrop-blur-sm text-[#f8f9fa] focus:ring-2 focus:ring-gold/50"
                                                onClick={() => setOpenPicker((prev) => ({ ...prev, [field]: true }))}
                                            >
                                                <FiCalendar className="text-gold w-5 h-5" />
                                                <span>
                                                    {formData[field] ? format(formData[field], 'dd MMM yyyy') : `Select date`}
                                                </span>
                                            </button>

                                            {openPicker[field] && (
                                                <div
                                                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
                                                    onClick={() => setOpenPicker({ checkIn: false, checkOut: false })}
                                                >
                                                    <div
                                                        className="bg-transparent p-4 rounded-xl shadow-lg"
                                                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                                                    >
                                                        <DatePicker
                                                            selected={formData[field]}
                                                            onChange={(d) => {
                                                                handleChange(field, d);
                                                                setOpenPicker({ checkIn: false, checkOut: false });
                                                            }}
                                                            inline
                                                            minDate={
                                                                field === "checkIn"
                                                                    ? new Date() // disables past dates for check-in
                                                                    : formData.checkIn || new Date() // disables dates before check-in for check-out
                                                            }
                                                            // Disable previous day/month/year in the calendar view
                                                            dayClassName={(date) => {
                                                                const today = new Date();
                                                                if (field === "checkIn" && date < today) {
                                                                    return "bg-gray-100";
                                                                }
                                                                if (field === "checkOut" && date <= formData.checkIn) {
                                                                    return "bg-gray-100"; // Disable dates before check-in date for check-out
                                                                }
                                                                return "";
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}

                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-2.5 px-4 text-sm md:text-base rounded-xl bg-gradient-to-r from-gold to-gold-dark text-[#0b0c10] font-medium hover:shadow-lg hover:shadow-gold/20 transition-all hover:scale-[1.02] active:scale-100 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending' : 'Send Message'}
                                </button>
                            </form>
                        )}

                        <div className="mt-6 pt-6 border-t border-gold/30 text-center">
                            <p className="text-sm text-[#f8f9fa]/80 mb-2">Or contact us directly via:</p>
                            <button
                                onClick={openWhatsApp}
                                className="flex items-center justify-center mx-auto px-4 py-2 text-sm rounded-lg bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors duration-300"
                            >
                                <FaWhatsapp className="mr-2 w-4 h-4" /> WhatsApp
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ContactFormModal;
