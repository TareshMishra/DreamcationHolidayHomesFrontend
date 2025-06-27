import { motion } from 'framer-motion';

const NightExperienceSection = () => {
    return (
        <section className="relative px-4 sm:px-6 lg:px-8 overflow-hidden py-10">
            {/* Dubai Night View Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2600&q=80"
                    alt="Dubai Night View"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-100"></div>
            </div>

            {/* Content Container */}
            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="y-8 sm:py-16"
                >
                    <div className="text-center mb-2">
                        <span className="inline-block bg-gold/10 px-4 py-1 rounded-full border border-gold/20 text-gold text-sm font-medium">
                            EXCLUSIVE OFFER
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-3xl md:text-5xl font-bold text-[#f8f9fa] mb-6 text-center leading-tight">
                        Plan a Luxury Dubai Experience
                    </h2>

                    <p className="text-lg text-[#f8f9fa] mb-8 text-center max-w-3xl mx-auto leading-relaxed">
                        Crafting your ideal stay while opening doors to Dubai’s breathtaking attractions
                    </p>


                    {/* Premium Badges */}
                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                        {['Burj Khalifa Access', 'Private Yacht Tours', 'VIP Club Entry', '24/7 Concierge'].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-xs bg-gold px-3 py-2 rounded-full text-white font-medium"
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Decorative Gold Elements */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gold/20 to-transparent z-10"></div>
        </section>
    );
};

export default NightExperienceSection;