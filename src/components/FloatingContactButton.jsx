import { motion } from 'framer-motion';
import { FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingContactButton = ({ onClick }) => {

  const phoneNumber = '+971521919810';
  const whatsappMessage = 'Hello, I would like to get more information about your services.';

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-8 right-8 z-50 space-y-2"
    >
      <button
        onClick={openWhatsApp}
        className="bg-green-700 text-[#0b0c10] p-4 rounded-full shadow-xl hover:bg-green-800 transition-colors duration-300 flex items-center justify-center cursor-pointer"
        aria-label="whatsapp"
      >
        <FaWhatsapp size={24} />
      </button>
      <button
        onClick={onClick}
        className="bg-gold text-[#0b0c10] p-4 rounded-full shadow-xl hover:bg-gold-dark transition-colors duration-300 flex items-center justify-center cursor-pointer"
        aria-label="Contact Us"
      >
        <FiPhone size={24} />
        <span className="sr-only">Contact Us</span>
      </button>

    </motion.div>

  );
};

export default FloatingContactButton;