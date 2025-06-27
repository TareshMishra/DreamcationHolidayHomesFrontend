import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import logo from "../assets/logo.png";

const Footer = ({ openForm }) => {
  return (
    <footer className="bg-white text-[#0b0c10] py-10 px-6 sm:px-8 lg:px-16 relative z-50 shadow-[0_10px_25px_rgba(0,0,0,0.08)] rounded-t-2xl backdrop-blur-md border-t border-[#d4af37]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <a href="/" className="inline-block w-56 lg:w-64 transition-transform hover:scale-105">
              <img
                src={logo}
                alt="logo"
                className="h-12 w-full object-cover transition-all duration-300 opacity-90"
              />
            </a>
            <p className="text-sm text-[#444] leading-relaxed">
              We are the First Technology Based Property Management Company in Dubai we Promote your Properties through Technology Based Lead Generation, specialist in Algorithms and Pricing Strategy in Airbnb and Booking we enhance your Visibility
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: FiFacebook, link: "https://www.facebook.com/profile.php?id=61575254652757" },
                { Icon: FiTwitter, link: "https://x.com/Dreamcationbnb?t=dK4kpWNfCqETLEJQRcKIlQ&s=08" },
                { Icon: FiInstagram, link: "https://www.instagram.com/dreamcationbnb?igsh=MWN4eTdpaTQwcjNieg==" },
                { Icon: FiLinkedin, link: "https://www.linkedin.com/company/dreamcation-homes/" }
              ].map(({ Icon, link }, idx) => (
                <a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#f5f5f5] hover:bg-gold-dark hover:text-white transition-all shadow-md"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>


          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-[#0b0c10]">Contact Us</h3>
            <ul className="space-y-4 text-sm lg:text-base">
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-1 text-[#d4af37]" />
                <span>Marsa 1, Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-[#d4af37]" />
                <span>0558663492</span>
              </li>
              <li className="flex items-center gap-3 break-words">
                <FiMail className="text-[#d4af37]" />
                <span className='break-words'> Info@dreamcationholidayhomes.com</span>
              </li>
            </ul>
          </motion.div>
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-[#0b0c10]">Quick Links</h3>
            <ul className="space-y-4 text-sm lg:text-base">
              <li><a href="/" className="hover:text-[#d4af37] transition-colors">Services</a></li>
              <li><a href="/" className="hover:text-[#d4af37] transition-colors">Properties</a></li>
              <li><button onClick={openForm} className="hover:text-[#d4af37] transition-colors">Contact</button></li>
            </ul>
          </motion.div>

        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 border-t border-[#e5e5e5] pt-6 text-center text-sm text-gray-500"
        >
          <p>&copy; {new Date().getFullYear()} Dreamcation. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>

  );
};

export default Footer;