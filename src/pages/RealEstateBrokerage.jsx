import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ContactFormModal from '../components/ContactFormModal';

const RealEstateBrokerage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const communities = [
        {
            id: 1,
            name: "Palm Jumeirah",
            image: "/public/images/palm-jumeirah.jpg",
            location: "Jumeirah Dubai",
        },
        {
            id: 2,
            name: "Downtown",
            image: "/public/images/downtown.jpg",
            location: "Downtown Dubai",
        },
        {
            id: 3,
            name: "JVC",
            image: "/public/images/jvc.jpg",
            location: "JVC Dubai",
        },
        {
            id: 4,
            name: "JVT",
            image: "/public/images/JVT.jpg",
            location: "JVT Dubai",
        },
    ];

    const developers = [
        {
            name: "Emaar",
            logo: "https://logos-world.net/wp-content/uploads/2023/03/Emaar-Properties-Logo.png",
        },
        {
            name: "Nakheel",
            logo: "https://oqoodpropertiesllc.com/wp-content/uploads/2021/12/Nakheel-logo.png",
        },
        {
            name: "Dubai Properties",
            logo: "https://releganceproperties.com/wp-content/uploads/2023/04/dp.png",
        },
        {
            name: "DAMAC",
            logo: "https://vectorseek.com/wp-content/uploads/2023/09/DAMAC-Properties-Logo-Vector.svg-.png",
        },
        {
            name: "AZIZI",
            logo: "https://landhouse.ae/wp-content/uploads/2020/12/azizi-logo-black.png",
        },
        {
            name: "Meraas",
            logo: "https://upload.wikimedia.org/wikipedia/commons/6/68/Meraas-logo.svg",
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(communities.length / 2));
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prev) => (prev - 1 + Math.ceil(communities.length / 2)) % Math.ceil(communities.length / 2)
        );
    };

    const getCurrentCommunities = () => {
        const startIndex = currentSlide * 2;
        return communities.slice(startIndex, startIndex + 2);
    };

    return (
        <div className="overflow-x-hidden">
            <Navbar openForm={() => setIsFormOpen(true)} />
            <div className="min-h-screen">
                {/* Header Section */}
                <div className="container mx-auto px-6 py-16 mt-16">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">
                            Find Your <span className="text-gold">Dream</span> Property in Dubai
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            From luxury waterfront apartments to premium commercial spaces, we connect you with
                            Dubai's most prestigious properties. Your perfect investment opportunity awaits with our
                            expert guidance and{" "}
                            <strong className="text-gold-dark">unmatched market expertise</strong>.
                        </p>
                    </div>
                </div>

                {/* Featured Communities Section */}
                <div className="bg-[var(--custom-white)] bg-white border-t border-b border-gray-100 py-16 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl font-bold text-gray-900">Featured Communities</h2>
                            <div className="flex items-center gap-4">
                                <span className="text-blue-600 font-semibold cursor-pointer hover:text-blue-800 transition-colors">
                                    View all communities
                                </span>
                                <div className="flex gap-2">
                                    <button
                                        onClick={prevSlide}
                                        className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:bg-gray-50"
                                    >
                                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:bg-gray-50"
                                    >
                                        <ChevronRight className="w-5 h-5 text-gray-600" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {getCurrentCommunities().map((community) => (
                                <div
                                    key={community.id}
                                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                                >
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src={community.image}
                                            alt={community.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="text-2xl font-bold text-white mb-2">{community.name}</h3>
                                        <p className="text-gray-200">{community.location}</p>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                                        <span className="text-white text-sm font-medium">Premium</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center mt-6 gap-2">
                            {Array.from({ length: Math.ceil(communities.length / 2) }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Trusted Partners Section */}
                <div className="bg-[#fdf9f0] py-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">
                            Trusted Partner of the Most Prominent Developers
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
                            {developers.map((developer, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-6 shadow-md w-full h-32 flex items-center justify-center"
                                >
                                    <img
                                        src={developer.logo}
                                        alt={developer.name}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {isFormOpen && (
                    <ContactFormModal onClose={() => setIsFormOpen(false)} />
                )}
            </AnimatePresence>
            <Footer />
        </div>
    );
};

export default RealEstateBrokerage;
