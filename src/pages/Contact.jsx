// client/src/pages/Contact.jsx (UPDATED with Interactive Map and Single Address)

import React, { useState } from 'react';
import axios from 'axios';
import { Mail, MapPin, Phone, ArrowRight, Check, Clock } from 'lucide-react';

// Initialize the form data state
const initialFormData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
};

// Map Coordinates (Placeholder: Use your actual RAK coordinates)
const RAK_MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.539308112028!2d55.9760756!3d25.751639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef58607a9876e5d%3A0xc3f8e5b412b1860a!2sRAK%20Engineering!5e0!3m2!1sen!2sae!4v1699999999999!5m2!1sen!2sae";

const Contact = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState(initialFormData);
    const [status, setStatus] = useState({ loading: false, success: false, error: null });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = (e) => {
        e.preventDefault();
        // Basic validation for Step 1
        if (step === 1 && (!formData.name || !formData.email || !formData.phone)) {
            setStatus({ ...status, error: 'Please fill in Name, Email, and Phone before proceeding.' });
            return;
        }
        setStatus({ ...status, error: null });
        setStep(step + 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: null });

        try {
            // Submit data to the backend contact route
            const response = await axios.post('/api/contact', formData);

            if (response.data.success) {
                setStatus({ loading: false, success: true, error: null });
                setFormData(initialFormData); // Clear form on success
                setStep(3); // Move to success step
            }
        } catch (err) {
            console.error('Submission error:', err);
            // Handling the Axios 500 status error
            setStatus({ loading: false, success: false, error: err.response?.data?.message || 'Submission failed. Please check the server logs (500 error).' });
            setStep(3); // Move to error/success step
        }
    };

    // --- RENDER FUNCTIONS FOR EACH STEP (RETAINED) ---
    const renderStep1 = () => (
        <>
            <h3 className="text-2xl font-bold text-navy mb-6">Step 1: Your Contact Information</h3>
            <div className="space-y-4">
                <input type="text" name="name" placeholder="Your Full Name*" onChange={handleChange} value={formData.name} required className="w-full p-3 border border-light-gray rounded-lg" />
                <input type="email" name="email" placeholder="Email Address*" onChange={handleChange} value={formData.email} required className="w-full p-3 border border-light-gray rounded-lg" />
                <input type="tel" name="phone" placeholder="Phone Number*" onChange={handleChange} value={formData.phone} required className="w-full p-3 border border-light-gray rounded-lg" />
                <input type="text" name="company" placeholder="Company Name (Optional)" onChange={handleChange} value={formData.company} className="w-full p-3 border border-light-gray rounded-lg" />
            </div>
            <button onClick={handleNext} className="mt-6 w-full flex items-center justify-center space-x-2 px-6 py-3 bg-accent-blue text-white font-semibold rounded-lg hover:bg-navy transition-colors">
                <span>Next: Project Details</span> <ArrowRight className="w-5 h-5" />
            </button>
        </>
    );

    const renderStep2 = () => (
        <>
            <h3 className="text-2xl font-bold text-navy mb-6">Step 2: Project Scope and Details</h3>
            <div className="space-y-4">
                <select name="projectType" onChange={handleChange} value={formData.projectType} className="w-full p-3 border border-light-gray rounded-lg">
                    <option value="">Select Project Type*</option>
                    <option value="Fabrication">Structural Fabrication</option>
                    <option value="Machining">CNC & Precision Machining</option>
                    <option value="Maintenance">Site Maintenance / Overhaul</option>
                    <option value="Turnkey">Turnkey Industrial Projects</option>
                </select>
                <select name="budget" onChange={handleChange} value={formData.budget} className="w-full p-3 border border-light-gray rounded-lg">
                    <option value="">Estimated Budget Range*</option>
                    <option value="< $50K">Less than $50K</option>
                    <option value="$50K - $200K">$50K - $200K</option>
                    <option value="$200K - $1M">$200K - $1M</option>
                    <option value="> $1M">Over $1 Million</option>
                </select>
                <textarea name="message" placeholder="Please describe your project or needs in detail..." rows="5" onChange={handleChange} value={formData.message} required className="w-full p-3 border border-light-gray rounded-lg" />
            </div>
            <div className="flex justify-between mt-6 space-x-4">
                <button type="button" onClick={() => setStep(1)} className="px-6 py-3 bg-light-gray text-navy font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                    ← Back
                </button>
                <button type="submit" disabled={status.loading} className="flex items-center justify-center space-x-2 px-6 py-3 bg-accent-orange text-white font-semibold rounded-lg hover:bg-navy transition-colors disabled:opacity-50">
                    {status.loading ? 'Sending...' : 'Submit Inquiry'}
                </button>
            </div>
        </>
    );

    const renderStep3 = () => (
        <div className="text-center py-20">
            {status.success ? (
                <>
                    <Check className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-navy mb-2">Thank You, {formData.name.split(' ')[0]}!</h3>
                    <p className="text-lg text-text-dark/80">
                        Your inquiry has been successfully submitted. We will review your project details and get back to you within 24 hours.
                    </p>
                </>
            ) : (
                <>
                    <h3 className="text-3xl font-bold text-red-600 mb-2">Submission Error</h3>
                    <p className="text-lg text-text-dark/80">{status.error}</p>
                    <button type="button" onClick={() => setStep(1)} className="mt-6 px-6 py-3 bg-accent-orange text-white font-semibold rounded-lg hover:bg-navy transition-colors">
                        Try Again
                    </button>
                </>
            )}
        </div>
    );
    // -----------------------------------------------------------------


    return (
        <section className="container mx-auto py-20 px-4">
            <h1 className="text-5xl font-extrabold text-center text-navy mb-3">Partner with RAK Engineering</h1>
            <p className="text-xl text-center text-text-dark/80 mb-16 max-w-3xl mx-auto">
                Discuss your next heavy fabrication, CNC machining, or turnkey project with our experts.
            </p>
            
            <div className="grid lg:grid-cols-3 gap-12">
                
                {/* Branch Info Cards (left column) */}
                {/* We keep the space-y-6 container but it now only holds one card */}
                <div className="lg:col-span-1 space-y-6">
                    
                    {/* 1. RAK Head Office + Map Embed */}
                    <div className="bg-white rounded-xl shadow-lg border-t-4 border-accent-orange overflow-hidden">
                        <div className="p-6">
                            <MapPin className="w-8 h-8 text-accent-orange mb-3" />
                            <h4 className="text-xl font-semibold text-navy">RAK Head Office</h4>
                            <address className="not-italic text-text-dark/80 space-y-1 text-sm">
                                <p>STREET - SHEIKH SAQR BIN MUHAMMAD AL QASIMI</p>
                                <p>ZONE - AL SHAML, Plot 210020289</p>
                                <p>P.O. BOX - 5382, Ras Al Khaimah, U.A.E.</p>
                                <p className="flex items-center space-x-2"><Phone size={16} className="text-accent-blue" /><a href="tel:+97172275331">+97172442028</a></p>
                                <p className="flex items-center space-x-2"><Mail size={16} className="text-accent-blue" /><a href="mailto:info@rakengineering.ae">rak@rakengg.ae</a></p>
                            </address>
                        </div>
                        {/* Map Embed */}
                        <div className="w-full h-56">
                            <iframe 
                                src={RAK_MAP_EMBED_URL} // Use your defined RAK URL
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Multi-Step Form (right column) */}
                <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-2xl">
                    <form onSubmit={handleSubmit}>
                        {step === 1 && renderStep1()}
                        {step === 2 && renderStep2()}
                        {step === 3 && renderStep3()}
                        
                        {/* Status Message for Step 1/2 */}
                        {status.error && step < 3 && (
                            <p className="mt-4 text-red-500 font-medium">{status.error}</p>
                        )}
                        
                        {/* Progress Indicator */}
                        {step < 3 && (
                            <div className="mt-8">
                                <p className="text-sm font-semibold text-navy">Progress: Step {step} of 2</p>
                                <div className="w-full h-2 bg-light-gray rounded-full mt-2">
                                    <div 
                                        className={`h-2 bg-accent-orange rounded-full transition-all duration-500`}
                                        style={{ width: `${step === 1 ? '50%' : '100%'}` }}
                                    ></div>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;