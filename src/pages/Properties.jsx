import { useEffect, useState } from "react";
import { AnimatePresence } from 'framer-motion';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactFormModal from "../components/ContactFormModal"



const properties = [
  {
    id: 1,
    name: "Capital Tower",
    location: "Business Bay Studio",
    description: "Escape to the serene mountains and wake up to breathtaking views. Perfect for couples seeking tranquility and adventure.",
    amenities: ["Mountain View", "Fireplace", "WiFi", "Kitchen"],
    airbnbLink: "https://www.airbnb.com/rooms/1",
    images: [
      "images/Capital_Tower_Business_Bay_Studio/img-1.jpg",
      "images/Capital_Tower_Business_Bay_Studio/image-2.jpg",
      "images/Capital_Tower_Business_Bay_Studio/image-3.jpg",
      "images/Capital_Tower_Business_Bay_Studio/image-4.jpg",
      "images/Capital_Tower_Business_Bay_Studio/image-5.jpg",
    ]
  },
  {
    id: 2,
    name: "Al Jwaraha JVT Studio",
    location: "Dubai, UAE",
    description: "Experience luxury by the ocean with direct beach access. Your perfect tropical getaway awaits.",
    amenities: ["Beach Access", "Pool", "AC", "Sea View", "Garden"],
    airbnbLink: "https://www.airbnb.com/rooms/2",
    images: ["images/Al_Jwaraha_JVT_Studio/image-1.jpg",
      "images/Al_Jwaraha_JVT_Studio/image-2.jpg",
      "images/Al_Jwaraha_JVT_Studio/image-3.jpg",
      "images/Al_Jwaraha_JVT_Studio/image-4.jpg",
      "images/Al_Jwaraha_JVT_Studio/image-5.jpg",
    ],
  },
  {
    id: 3,
    name: "Royal Residence 2 Studio",
    location: "Dubai Sports City",
    description: "Modern living in the heart of the city. Perfect for business travelers and urban explorers.",
    amenities: ["City Center", "Gym", "WiFi", "Balcony", "Garden"],
    airbnbLink: "https://www.airbnb.com/rooms/3",
    images: ["images/Dubai_Sports_City_Royal_Residence_2_Studio/image-1.jpg",
      "images/Dubai_Sports_City_Royal_Residence_2_Studio/image-2.jpg",
      "images/Dubai_Sports_City_Royal_Residence_2_Studio/image-3.jpg",
      "images/Dubai_Sports_City_Royal_Residence_2_Studio/image-4.jpg"
    ],
  },
  {
    id: 4,
    name: "Murjan JBR Studio",
    location: "Dubai, UAE",
    description: "Modern living in the heart of the city. Perfect for business travelers and urban explorers.",
    amenities: ["City Center", "Gym", "WiFi", "Balcony", "Garden"],
    airbnbLink: "https://www.airbnb.com/rooms/3",
    images: ["images/Murjan_JBR_Studio/image-1.jpg",
      "images/Murjan_JBR_Studio/image-2.jpg",
      "images/Murjan_JBR_Studio/image-3.jpg",
      "images/Murjan_JBR_Studio/image-4.jpg",
    ],
  },
  {
    id: 5,
    name: "Mag 5 Studio",
    location: "Dubai, UAE",
    description: "Modern living in the heart of the city. Perfect for business travelers and urban explorers.",
    amenities: ["City Center", "Gym", "WiFi", "Balcony", "Garden"],
    airbnbLink: "https://www.airbnb.com/rooms/3",
    images: ["images/Mag_5_Studio/image-1.jpg",
      "images/Mag_5_Studio/image-2.jpg",
      "images/Mag_5_Studio/image-3.jpg",
      "images/Mag_5_Studio/image-4.jpg",
    ],
  },
  {
    id: 6,
    name: "Crystal Placa JVC Studio",
    location: "Dubai, UAE",
    description: "Modern living in the heart of the city. Perfect for business travelers and urban explorers.",
    amenities: ["City Center", "Gym", "WiFi", "Balcony", "Garden"],
    airbnbLink: "https://www.airbnb.com/rooms/3",
    images: ["images/Crystal_Placa_JVC_Studio/image-1.jpg",
      "images/Crystal_Placa_JVC_Studio/image-2.jpg",
      "images/Crystal_Placa_JVC_Studio/image-3.jpg",
      "imagesCrystal_Placa_JVC_Studio/image-4.jpg",
      "images/Crystal_Placa_JVC_Studio/image-5.jpg"
    ],
  },
  {
    id: 7,
    name: "Glamz By Danube Furjan",
    location: "Dubai, UAE",
    description: "Modern living in the heart of the city. Perfect for business travelers and urban explorers.",
    amenities: ["City Center", "Gym", "WiFi", "Balcony", "Garden"],
    airbnbLink: "https://www.airbnb.com/rooms/3",
    images: ["images/Glamz_By_Danube_Furjan_1bedroom/image-1.jpg",
      "images/Glamz_By_Danube_Furjan_1bedroom/image-2.jpg",
      "images/Glamz_By_Danube_Furjan_1bedroom/image-3.jpg",
      "images/Glamz_By_Danube_Furjan_1bedroom/image-4.jpg",
    ],
  },
  {
    id: 8,
    name: "Azizi Rivera Nadel Sheba Studio",
    location: "Dubai, UAE",
    description: "Modern living in the heart of the city. Perfect for business travelers and urban explorers.",
    amenities: ["City Center", "Gym", "WiFi", "Balcony", "Garden"],
    airbnbLink: "https://www.airbnb.com/rooms/3",
    images: ["images/Azizi_Rivera_Nadel_Sheba_Studio/image-1.jpg",
      "images/Azizi_Rivera_Nadel_Sheba_Studio/image-2.jpg",
      "images/Azizi_Rivera_Nadel_Sheba_Studio/image-3.jpg",
    ],
  },
  {
    id: 9,
    name: "Autumn JVC",
    location: "Dubai, UAE",
    description: "Modern living in the heart of the city. Perfect for business travelers and urban explorers.",
    amenities: ["City Center", "Gym", "WiFi", "Balcony", "Garden"],
    airbnbLink: "https://www.airbnb.com/rooms/3",
    images: ["images/Autumn_JVC_1_Bedroom/image-1.jpg",
      "images/Autumn_JVC_1_Bedroom/image-2.jpg",
      "images/Autumn_JVC_1_Bedroom/image-3.jpg",
    ],
  },
  {
    id: 10,
    name: "District 1",
    location: "Dubai, UAE",
    description: "Modern living in the heart of the city. Perfect for business travelers and urban explorers.",
    amenities: ["City Center", "Gym", "WiFi", "Balcony", "Garden"],
    airbnbLink: "https://www.airbnb.com/rooms/3",
    images: ["images/District_1_1_Bedroom/image-1.jpg",
      "images/District_1_1_Bedroom/image-2.jpg",
      "images/District_1_1_Bedroom/image-3.jpg",
    ],
  },
  {
    id: 11,
    name: "J One Business Bay Studio",
    location: "Dubai, UAE",
    description: "Modern living in the heart of the city. Perfect for business travelers and urban explorers.",
    amenities: ["City Center", "Gym", "WiFi", "Balcony", "Garden"],
    airbnbLink: "https://www.airbnb.com/rooms/3",
    images: ["images/J_One_Business_Bay_Studio/image-1.jpg",
      "images/J_One_Business_Bay_Studio/image-2.jpg",
      "images/J_One_Business_Bay_Studio/image-3.jpg",
    ],
  },
  {
    id: 12,
    name: "Damac Maison Business Bay Studio",
    location: "Dubai, UAE",
    description: "Modern living in the heart of the city. Perfect for business travelers and urban explorers.",
    amenities: ["City Center", "Gym", "WiFi", "Balcony", "Garden"],
    airbnbLink: "https://www.airbnb.com/rooms/3",
    images: ["images/Damac_Maison_Business_Bay_Studio/image-1.jpg",
      "images/Damac_Maison_Business_Bay_Studio/image-2.jpg",
      "images/Damac_Maison_Business_Bay_Studio/image-3.jpg",
    ],
  },
  {
    id: 13,
    name: "Mag 555 Boulevard Studio",
    location: "Dubai, UAE",
    description: "Modern living in the heart of the city. Perfect for business travelers and urban explorers.",
    amenities: ["City Center", "Gym", "WiFi", "Balcony", "Garden"],
    airbnbLink: "https://www.airbnb.com/rooms/3",
    images: ["images/Mag_555_Boulevard_Studio/image-1.jpg",
      "images/Mag_555_Boulevard_Studio/image-2.jpg",
      "images/Mag_555_Boulevard_Studio/image-3.jpg",
    ],
  },
];



const Properties = ({ showGoogleSignIn }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredProperty, setHoveredProperty] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      showGoogleSignIn();
    }, 8000);
    console.log("Properties component loaded - Your dream vacation starts here!");
  }, []);

  const openImageModal = (images, index) => {
    setSelectedImage(images);
    setCurrentImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedImage.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedImage.length - 1 : prev - 1
    );
  };

  const handleKeyPress = (e) => {
    if (!selectedImage) return;
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') closeImageModal();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  return (
    <div className="overflow-x-hidden">
      <Navbar openForm={() => setIsFormOpen(true)} />

      <div className="min-h-screen py-16 px-4 mt-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            <span className="text-gold">Discover</span> Your Perfect{" "}
            <span className="text-gold">Getaway</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From mountain retreats to beachside villas, each property is carefully
            curated to provide you with an <span className="text-gold-dark font-semibold">unforgettable experience</span>.
            Your dream vacation is just a click away.
          </p>
        </div>

        {/* Trusted Partners Section */}
        <div className="relative z-10 bg-mustard text-italic py-12 px-4 border-y border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 ">
              Trusted Associate Partners
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              We partner with the world's top travel platforms to bring you the best stays.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-20">
            {/* Airbnb */}
            <div className="w-40 h-40 flex flex-col items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <img
                src="https://cdn.prod.website-files.com/5ee732bebd9839b494ff27cd/5eef3b332a1f3748fd890a38_logo%20airbnb%20icon-p-500.png"
                alt="Airbnb"
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* Booking.com */}
            <div className="w-40 h-40 flex flex-col items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <img
                src="https://logos-world.net/wp-content/uploads/2021/08/Booking-Logo.png"
                alt="Booking.com"
                className="w-32 h-32 object-contain"
              />
            </div>
          </div>
        </div>




        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mt-12">
          {properties.map((property) => (
            <div
              key={property.id}
              className={`bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 ${hoveredProperty === property.id
                ? 'scale-105 shadow-2xl'
                : 'hover:scale-102 hover:shadow-xl'
                }`}
              onMouseEnter={() => setHoveredProperty(property.id)}
              onMouseLeave={() => setHoveredProperty(null)}
            >
              {/* Main Image - Fixed the overlay issue */}
              <div className="relative group overflow-hidden">
                <img
                  src={property.images[0]}
                  alt={property.name}
                  className="w-full h-72 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-110"
                  onClick={() => openImageModal(property.images, 0)}
                />

                {/* Image Counter Badge */}
                <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {property.images.length} photos
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold mb-2 text-gray-800">
                    {property.name}
                  </h2>
                  <p className="text-gold font-medium mb-3 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {property.location}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {property.description}
                  </p>
                </div>

                {/* Amenities */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                    What's Included
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {property.amenities.map((amenity, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                    Gallery Preview
                  </h3>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {property.images.slice(0, 4).map((img, index) => (
                      <div key={index} className="relative flex-shrink-0">
                        <img
                          src={img}
                          alt={`${property.name} ${index + 1}`}
                          className="w-20 h-16 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity border-2 border-transparent hover:border-blue-600"
                          onClick={() => openImageModal(property.images, index)}
                        />
                        {index === 3 && property.images.length > 4 && (
                          <div
                            className="absolute inset-0 bg-black bg-opacity-60 rounded-lg flex items-center justify-center cursor-pointer"
                            onClick={() => openImageModal(property.images, index)}
                          >
                            <span className="text-white text-xs font-bold">
                              +{property.images.length - 4}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => openImageModal(property.images, 0)}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-xl transition-colors duration-300 flex items-center justify-center cursor-pointer"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    View Gallery
                  </button>
                  <a
                    href={property.airbnbLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <button className="w-full py-3 bg-gold-dark hover:bg-gold text-white font-bold rounded-xl transition-colors duration-300 flex items-center justify-center cursor-pointer">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Book Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={closeImageModal}
          >
            <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute top-4 left-4 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm z-10">
                {currentImageIndex + 1} / {selectedImage.length}
              </div>

              {/* Main Image */}
              <img
                src={selectedImage[currentImageIndex]}
                alt={`Gallery image ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Navigation Arrows */}
              {selectedImage.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-3 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-3 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Thumbnail Navigation */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto p-2">
                {selectedImage.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-16 h-12 object-cover rounded cursor-pointer transition-all ${index === currentImageIndex
                      ? 'border-2 border-blue-600 opacity-100'
                      : 'border border-gray-400 opacity-60 hover:opacity-80'
                      }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
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

export default Properties;