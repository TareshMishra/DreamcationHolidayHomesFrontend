import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import picture1 from '../assets/pmc/image1.jpg';
import picture2 from '../assets/pmc/image2.jpg';
import picture3 from '../assets/pmc/image3.jpg';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ContactFormModal from '../components/ContactFormModal';

const Pmc = () => {

    const [isFormOpen, setIsFormOpen] = useState(false);


    return (
        <div className="overflow-x-hidden">
            <Navbar openForm={() => setIsFormOpen(true)} /> 
            <div className=" text-[#0b0c10] mt-16">
                {/* Hero Header */}
                <div className=" py-16 text-center px-6">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gold mb-4">Dreamcation <span className='text-black'> Capital</span></h1>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Premium Real Estate Development & Project Management Consultancy in Dubai
                    </p>
                </div>

                {/* Section 1: Developer */}
                <section className='bg-mustard'>
                    <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
                        <img src={picture1} alt="Premium Developer" className="rounded-xl shadow-md" />
                        <div>
                            <h2 className="text-3xl font-bold text-gold mb-4">As a Premium Developer</h2>
                            <p className="text-gray-700 mb-6">
                                Dreamcation Capital redefines urban living through future-ready luxury developments in Dubai.
                                Our expert team delivers turnkey projects with modern design, top quality, and investor focus.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li><strong className="text-black">Premium Construction</strong> – Top-grade materials & craftsmanship</li>
                                <li><strong className="text-black">Strategic Locations</strong> – High-potential, well-connected areas</li>
                                <li><strong className="text-black">Contemporary Design</strong> – Smart, sustainable architecture</li>
                                <li><strong className="text-black">Turnkey Delivery</strong> – Fully managed end-to-end execution</li>
                                <li><strong className="text-black">High ROI</strong> – Flexible plans & strong investment appeal</li>
                                <li><strong className="text-black">On-Time Handover</strong> – Reliable delivery timelines</li>
                                <li><strong className="text-black">Luxury Amenities</strong> – Lifestyle-focused development</li>
                                <li><strong className="text-black">Full Compliance</strong> – Aligned with DLD, RERA & UAE laws</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Section 2: PMC */}
                <section className="bg-gray-50 py-16 px-6">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gold mb-4">As a Project Management Consultant</h2>
                            <p className="text-gray-700 mb-6">
                                We bring visions to life with expert project lifecycle management, ensuring profitability, precision, and peace of mind.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li><strong className="text-black">Complete Lifecycle</strong> – From feasibility to delivery</li>
                                <li><strong className="text-black">Cost & Time Efficiency</strong> – Optimize resources</li>
                                <li><strong className="text-black">Strict Quality Control</strong> – Safety & standards</li>
                                <li><strong className="text-black">Stakeholder Coordination</strong> – Consultants, contractors, suppliers</li>
                                <li><strong className="text-black">ROI Analysis</strong> – Financial modeling & advisory</li>
                                <li><strong className="text-black">Regulatory Support</strong> – Permits, compliance, and legal</li>
                                <li><strong className="text-black">Transparent Reporting</strong> – Real-time updates & dashboards</li>
                                <li><strong className="text-black">Post-Delivery Support</strong> – Facility & asset management</li>
                            </ul>
                        </div>
                        <img src={picture2} alt="Project Management Consultant" className="rounded-xl shadow-md" />
                    </div>
                </section>

                {/* Section 3: Why Choose Us */}
                <section className='bg-mustard'>
                    <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
                        <img src={picture3} alt="Why Choose Dreamcation" className="rounded-xl shadow-md" />
                        <div>
                            <h2 className="text-3xl font-bold text-gold mb-4">Why Choose Dreamcation Capital?</h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                                <li className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                    ✅ Proven Track Record
                                </li>
                                <li className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                    ✅ Dubai Market Experts
                                </li>
                                <li className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                    ✅ Tech-Driven Execution
                                </li>
                                <li className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                    ✅ Investor & End-User Focus
                                </li>
                                <li className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                    ✅ Trusted by Landowners & Institutions
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <AnimatePresence>
                    {isFormOpen && (
                        <ContactFormModal onClose={() => setIsFormOpen(false)} />
                    )}
                </AnimatePresence>
            <Footer/>
        </div>
    );
};

export default Pmc;
