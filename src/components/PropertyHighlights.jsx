import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import pool from "../assets/pool.jpeg"
import wellness from "../assets/wellness.jpeg"
import resturants from "../assets/resturants.jpeg"
import amenties from "../assets/amenties.jpeg"

const PropertyHighlights = () => {
  const features = [
    {
      image: resturants,
      title: "Restaurants",
      description: "Delectably distinguished"
    },
    {
      image: wellness,
      title: "Wellness",
      description: "The SPA"
    },
    {
      image: pool,
      title: "Pool & Fitness",
      description: "Fitness Center"
    },
    {
      image: amenties,
      title: "Amenities",
      description: "Club Lounge"
    }
  ];

  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background blur circles removed for cleaner look */}
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-gold/10 px-4 py-2 rounded-full mb-4 border border-gold/20">
            <p className="text-gold text-sm font-medium">DREAMCATION SIGNATURE PROPERTY</p>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0b0c10] mb-3">
            <span className="text-gold">Dreamcation</span> Residences
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </motion.div>

        {/* Glassmorphic Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative h-72 bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 transition-transform duration-500 hover:-translate-y-2 hover:scale-[1.03] shadow-[0_8px_16px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_30px_rgba(255,215,0,0.35)]"
            >
              {/* Background image with zoom on hover */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${feature.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10 text-white">
                <h3 className="text-2xl font-bold mb-1 drop-shadow-md">{feature.title}</h3>
                <p className="text-white/90 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>


        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="bg-gold hover:bg-gold-dark text-[#0b0c10] font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_#ffd70080] flex items-center justify-center mx-auto gap-2 text-base sm:text-lg">
            <FiStar className="animate-pulse text-xl" />
            Experience Dreamcation Luxury
          </button>
          <p className="text-[#0b0c10]/60 mt-4 text-sm">Exclusive listings available through Dreamcation partners</p>
        </motion.div>
      </div>
    </section>

  );
};

export default PropertyHighlights;