import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
    {
        id: 1,
        name: "Anna",
        country: "Russia",
        content: "Чисто, уютно, есть всё необходимое. Виды из окон фантастические! Хозяин все время на связи. Месторасположение супер.👍🏻",
        rating: 5,
    },
    {
        id: 2,
        name: "Essam",
        country: "Saudi Arabia",
        content: "المكان خيالي وهدوء والمنظر والجلسه الخارجيه ترد الروح .. وافضل شي التصميم الداخلي هويه مصريه روعه والاسره 10 قيم اعطيتهم مريحه .. ما شاء الله لو في اكثر من",
        rating: 5,
    },
    {
        id: 3,
        name: "Rima",
        country: "Indonesia",
        content: "Smooth check in, nice apartment, Clean, view is stunning I recommended 👍👍",
        rating: 5,
    },
    {
        id: 4,
        name: "Julie",
        country: "United Kingdom",
        content: "Great location in the heart of JBR and the Marina. Views over the palm from 36 floors up. Very clean and comfortable. The main bedroom corner view is spectacular.", rating: 5,
    },
    {
        id: 5,
        name: "Diya",
        country: "Germany",
        content: "The stay was great and the check in experience was smooth, overall highly recommend.",
        rating: 5,
    },
    {
        id: 6,
        name: "Jessica",
        country: "Germany",
        content: "I was impressed with how the apartment was exactly as described and as how the photos illustrated I was quite happy ",
        rating: 5,
    },
    {
        id: 7,
        name: "Boris",
        country: "Germany",
        content: "The apartment was spacious, comfortable, and offered exceptionally beautiful views from the windows. Everything you could ask for. A perfect balance of price and the quality you get for your money.",
        rating: 5,
    },
    {
        id: 8,
        name: "Nada",
        country: "Oman",
        content: "The apartment was very clean and new. The furniture, sheets and towels were bright white. The smell was nice and the view overlooked the water canal. The kitchen was fully equipped and the dishes were elegant. It only needed towels to dry the dishes and wipe the surfaces.",
        rating: 5,
    },
    {
        id: 9,
        name: "Kirsty",
        country: "Australia",
        content: "Great location, comfortable beds, views are amazing, short walk to lots of cafes and restaurants, pool is lovely and warm, owner was easy to communicate with and very helpful.", rating: 5,
    },
    {
        id: 10,
        name: "Raqiya",
        country: "Oman",
        content: "I had a wonderful stay at this apartment. The host was incredibly friendly and accommodating, and the rooms were very comfortable.",
        rating: 5,
    }
];

const Testimonials = () => {
    const sliderRef = useRef();
    const [autoplay, setAutoplay] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setAutoplay(true);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: autoplay,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute right-0 top-1/4 w-64 h-64 rounded-full bg-gold blur-xl"></div>
                <div className="absolute left-0 bottom-1/3 w-48 h-48 rounded-full bg-gold blur-xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <div className="inline-block bg-gold/10 px-4 py-2 rounded-full mb-4 border border-gold/20">
                        <p className="text-gold text-sm font-medium tracking-wider">CLIENT TESTIMONIALS</p>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b0c10] mb-3">
                        Voices of <span className="text-gold">Satisfaction</span>
                    </h2>
                    <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
                </motion.div>

                <div className="relative px-0 sm:px-4 md:px-8">
                    <Slider ref={sliderRef} {...settings} className='py-4 px-2 sm:px-4'>
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="px-2">
                                <div className="bg-white px-4 py-8 max-sm:py-4 md:px-8 rounded-xl flex flex-col justify-between border border-gold/10 hover:border-gold/30 transition-all duration-300 shadow-sm hover:shadow-md h-[26rem] sm:h-[28rem] relative overflow-hidden group">
                                    {/* Decorative elements */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-[#f1e5ac]"></div>
                                    <div className="absolute bottom-4 right-4 text-gold/10 text-6xl sm:text-7xl group-hover:text-gold/20 transition-all duration-300">
                                        <FaQuoteLeft />
                                    </div>

                                    {/* Name, Country and Role */}
                                    <div className="text-center mb-2 md:mb-6">
                                        <div className="flex flex-col items-center">
                                            <div className="relative">
                                                <div className="text-[#0b0c10]/60 text-lg font-semibold px-4 sm:px-6 py-2 rounded-full mb-3">
                                                    {testimonial.name}
                                                </div>
                                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-gold text-sm px-2 whitespace-nowrap">
                                                    {testimonial.country}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quote */}
                                    <div className="relative z-10 px-2">
                                        <div className="text-center mb-3">
                                            <FaQuoteLeft className="text-gold/70 text-xl mb-3" />
                                        </div>
                                        <p className="text-[#0b0c10]/80 text-sm max-sm:font-light sm:text-base text-center leading-relaxed font-medium px-2">
                                            {testimonial.content}
                                        </p>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex justify-center mt-4 sm:mt-6 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-sm">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                className={`${i < testimonial.rating ? 'text-gold' : 'text-gray-300'} text-base sm:text-lg mx-0.5`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                    {/* Custom Arrows - Enhanced */}
                    <div className='absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1 sm:-translate-x-2'>
                        <CustomArrow type='prev' onClick={() => sliderRef.current.slickPrev()} />
                    </div>
                    <div className='absolute top-1/2 right-0 -translate-y-1/2 translate-x-1 sm:translate-x-2'>
                        <CustomArrow type='next' onClick={() => sliderRef.current.slickNext()} />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CustomArrow = ({ type, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="z-10 w-12 h-12 max-sm:w-8 max-sm:h-8 flex items-center justify-center bg-gold hover:bg-gold-dark text-white rounded-full shadow-md transition-colors duration-300"
            aria-label={type === 'prev' ? 'Previous' : 'Next'}
        >
            {type === 'prev' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            )}
        </button>
    );
};

export default Testimonials;