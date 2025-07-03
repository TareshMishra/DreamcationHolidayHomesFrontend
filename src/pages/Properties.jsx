import { useEffect, useState } from "react";

const properties = [
  {
    id: 1,
    name: "Cozy Mountain Retreat",
    location: "Manali, Himachal Pradesh",
    description: "Escape to the serene mountains and wake up to breathtaking views. Perfect for couples seeking tranquility and adventure.",
    amenities: ["Mountain View", "Fireplace", "WiFi", "Kitchen"],
    airbnbLink: "https://www.airbnb.com/rooms/1",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 2,
    name: "Beachside Villa",
    location: "Goa, India",
    description: "Experience luxury by the ocean with direct beach access. Your perfect tropical getaway awaits.",
    amenities: ["Beach Access", "Pool", "AC", "Sea View"],
    airbnbLink: "https://www.airbnb.com/rooms/2",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 3,
    name: "Urban Loft",
    location: "Bangalore, Karnataka",
    description: "Modern living in the heart of the city. Perfect for business travelers and urban explorers.",
    amenities: ["City Center", "Gym", "WiFi", "Balcony"],
    airbnbLink: "https://www.airbnb.com/rooms/3",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
    ],
  },
];

const Properties = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredProperty, setHoveredProperty] = useState(null);

  useEffect(() => {
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
    <div className="min-h-screen py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          <span className="text-blue-600">Discover</span> Your Perfect{" "}
          <span className="text-blue-600">Getaway</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          From mountain retreats to beachside villas, each property is carefully 
          curated to provide you with an <span className="text-blue-600 font-semibold">unforgettable experience</span>. 
          Your dream vacation is just a click away.
        </p>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {properties.map((property) => (
          <div
            key={property.id}
            className={`bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 ${
              hoveredProperty === property.id 
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
                <p className="text-blue-600 font-medium mb-3 flex items-center">
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
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-xl transition-colors duration-300 flex items-center justify-center"
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
                  <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors duration-300 flex items-center justify-center">
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
                  className={`w-16 h-12 object-cover rounded cursor-pointer transition-all ${
                    index === currentImageIndex 
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

      {/* Call to Action Section */}
      {/* <div className="text-center mt-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-3xl p-12 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          Ready for Your <span className="font-bold">Dream Vacation</span>?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Don't just dream about it - experience it. Book your perfect getaway today.
        </p>
        <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl text-lg transition-colors duration-300 shadow-lg">
          Explore All Properties
        </button>
      </div> */}
    </div>
  );
};

export default Properties;