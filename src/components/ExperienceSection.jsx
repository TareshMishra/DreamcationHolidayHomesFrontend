import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import room from "../assets/room.jpeg"
import bedroom from "../assets/bedroom.jpeg"

const ExperienceSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20 bg-[#fdfaf5] relative overflow-hidden">
      {/* Golden Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute right-0 top-1/4 w-64 h-64 bg-gold/30 rounded-full blur-3xl"></div>
        <div className="absolute left-0 bottom-1/4 w-48 h-48 bg-gold/20 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-0">
        {/* Block 1 - Luxury Suites */}
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <p className="text-sm text-gold font-semibold uppercase tracking-wider mb-2">Experience Dreamcation Residences</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6">Luxury Suites</h2>
            <p className="text-[#444] text-lg leading-relaxed mb-4">
              Step into a world of refined comfort and indulgence with our Luxury Suites, exclusively curated for the discerning traveler.
            </p>
            <p className="text-[#444] text-lg leading-relaxed mb-6">
              We redefine opulence by blending world-class hospitality with the warmth of a private residence.
            </p>
            <button className="group flex items-center justify-center gap-2 px-6 py-3 bg-gold hover:bg-gold-dark text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              KNOW MORE
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <div className="rounded-2xl overflow-hidden border border-gold/20 bg-white transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-[1.03]">
              <img
                src={room}
                alt="Luxury Suites"
                className="w-full h-[400px] object-cover transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>

        {/* Block 2 - Luxury Apartments */}
        <div className="flex flex-col-reverse lg:flex-row items-center ">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <div className="rounded-2xl overflow-hidden border border-gold/20 bg-white transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-[1.03]">
              <img
                src={bedroom}
                alt="Luxury Apartment"
                className="w-full h-[400px] object-cover transition-transform duration-500"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:w-1/2 text-center lg:text-left pl-6 mt-4"
          >
            <p className="text-sm text-gold font-semibold uppercase tracking-wider mb-2">Experience Dreamcation Residences</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6">Luxury Apartments</h2>
            <p className="text-[#444] text-lg leading-relaxed mb-4">
              Discover the art of elevated living with Dreamcation Holiday Homes, where every luxury apartment is a fusion of style, comfort, and sophistication.
            </p>
            <p className="text-[#444] text-lg leading-relaxed mb-6">
              Whether visiting for business, leisure, or long stays — our homes feel like home, only better.
            </p>
            <button className="group flex items-center justify-center gap-2 px-6 py-3 bg-gold hover:bg-gold-dark text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
              KNOW MORE
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>

  );
};

export default ExperienceSection;