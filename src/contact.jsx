import React, { useState } from 'react';
import Footer from './footer';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    address: '',
    order: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.contact || !formData.address || !formData.order) {
    alert("Please fill all the fields carefully");
    return;
  }

  try {
    let url = "https://green-garden-unzh.onrender.com" + "/mailsend/domailing";

    let response = await axios.post(url, fd, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });

    if (response.data.status) {
      setIsSubmitted(true);
    }

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);

  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    alert("Something went wrong!");
  }
};


  return (
    <div>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3 sm:mb-4">
            Get in Touch
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            We'd love to hear from you. Send us your order details.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/50 p-6 sm:p-8 lg:p-10">
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm sm:text-base font-semibold text-slate-700 mb-2 sm:mb-3">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border-2 border-slate-200 rounded-xl sm:rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 text-slate-700 text-sm sm:text-base"
                placeholder="Enter your full name"
              />
            </div>

            {/* Contact Number Field */}
            <div>
              <label htmlFor="contact" className="block text-sm sm:text-base font-semibold text-slate-700 mb-2 sm:mb-3">
                Contact Number
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border-2 border-slate-200 rounded-xl sm:rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 text-slate-700 text-sm sm:text-base"
                placeholder="Enter your contact number"
              />
            </div>

            {/* Address Field */}
            <div>
              <label htmlFor="address" className="block text-sm sm:text-base font-semibold text-slate-700 mb-2 sm:mb-3">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows="3"
                className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border-2 border-slate-200 rounded-xl sm:rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 text-slate-700 resize-none text-sm sm:text-base"
                placeholder="Enter your delivery address"
              />
            </div>

            {/* Order Details Field */}
            <div>
              <label htmlFor="order" className="block text-sm sm:text-base font-semibold text-slate-700 mb-2 sm:mb-3">
                Order Details
              </label>
              <textarea
                id="order"
                name="order"
                value={formData.order}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 sm:px-5 py-3 sm:py-3.5 border-2 border-slate-200 rounded-xl sm:rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 text-slate-700 resize-none text-sm sm:text-base"
                placeholder="Describe your order in detail..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3.5 sm:py-4 rounded-xl sm:rounded-2xl hover:from-blue-600 hover:to-indigo-700 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 text-sm sm:text-base lg:text-lg"
            >
              Submit Order
            </button>
          </form>

          {/* Success Message */}
          {isSubmitted && (
            <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 animate-fadeIn">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-green-700 font-medium text-sm sm:text-base">
                  Thank you! Your message has been sent successfully.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Text */}
        <p className="text-center text-slate-500 text-xs sm:text-sm mt-6 sm:mt-8">
          We typically respond within 24 hours
        </p>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
    <Footer></Footer>
    </div>
  );
}