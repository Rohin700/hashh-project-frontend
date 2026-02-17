import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Truck, CreditCard, Shield, Star } from 'lucide-react';
import Footer from './footer';

export default function Homepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Placeholder images - replace with your actual images
  const carouselImages = [
    {
        url: 'https://static.vecteezy.com/system/resources/previews/054/359/990/large_2x/assortment-of-cannabis-buds-in-glass-jars-on-wooden-shelves-free-photo.jpg',
        alt: 'Featured Product 1'
    },
    {
        url: 'https://www.vice.com/wp-content/uploads/sites/2/2021/12/1639647510062-0001a3937.jpeg',
        alt: 'Featured Product 2'
    }
  ];

  const features = [
    {
      icon: Truck,
      title: '24/7 Delivery',
      description: 'Round-the-clock delivery service across all of Canada',
      color: 'bg-rose-500'
    },
    {
      icon: CreditCard,
      title: 'Flexible Payment',
      description: 'Accept both cash and UPI payments for convenience',
      color: 'bg-indigo-500'
    },
    {
      icon: Shield,
      title: 'Trusted Platform',
      description: 'Verified, secure, and reliable service',
      color: 'bg-emerald-500'
    }
  ];

  const colorfulImages = [
    {
      url: 'https://livlwell-production-ror.s3-us-west-2.amazonaws.com/posts/WhatisaPre-Roll%2CorPre-RolledJoint/LWBlog-Pre-Rolls-Desktop-1280x720.jpg',
      alt: 'Collection 1'
    },
    {
      url: 'https://www.vmcdn.ca/f/files/greatwest/images/branded-content-features/cannabis-weekly/articles/18a-the-ultimate-guide-to-using-cannabis-gummies.jpg;w=760',
      alt: 'Collection 2'
    }
  ];

  const bestSellers = [
    {
      id: 1,
      name: '2 and 3 Ounce Deal - AA+ TOM FORD PINK KUSH',
      price: '$119.99 - $179.99',
      image: 'https://www.bulkbuddy.co/wp-content/uploads/2026/01/Tom-ford-pink-kush-strain1.jpg',
      rating: 4.8,
      types: 'Indica'
    },
    {
      id: 2,
      name: '2 and 3 Ounce Deal - AA+ Rainbow Belts',
      price: '$119.99 - $179.99',
      image: 'https://res.cloudinary.com/dgbmiun9z/images/f_auto,q_auto/v1711076804/HendRx/oqodgteqr80mbjbeqw3s/oqodgteqr80mbjbeqw3s.jpg?_i=AA',
      rating: 4.9,
      types: 'Hybrid'
    },
    {
      id: 3,
      name: '2 and 3 Ounce Deal - AA+ Lemon Larry',
      price: '$119.99 - $179.99',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLzzM2w2rkXYrwX4hLfNbqEEOTSz8GGiHy2w&s',
      rating: 4.7,
      types: 'Sativa'
    },
    {
      id: 4,
      name: '2 and 3 Ounce Deal - AAA+ Cheese N Chong',
      price: '$144.99 - $224.99',
      image: 'https://images.leafly.com/flower-images/defaults/generic/strain-3.png',
      rating: 4.9,
      types: 'Sativa'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, carouselImages.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Carousel Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="relative group">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-105'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-8 bg-white'
                      : 'w-2 bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - Single Row, No Borders */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center group cursor-pointer"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                }}
              >
                <div className={`w-16 h-16  rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Colorful Images Section */}
      <div className="bg-[url(https://img.freepik.com/free-photo/vibrant-marijuana-plant-leaves-with-vibrant-green-colors_23-2151299901.jpg?semt=ais_wordcount_boost&w=740&q=80)] bg-cover bg-center bg-no-repeat py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {colorfulImages.map((item, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                }}
              >
                <div className="bg-white rounded-2xl p-8 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden shadow-xl">
                    <img
                      src={item.url}
                      alt={item.alt}
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Best Sellers Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Best Selling
          </h2>
          <p className="text-gray-600 text-lg">
            Our most popular products loved by customers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product, index) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.types} 
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl text-gray-900">
                      {product.price}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold text-gray-700">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    <Footer></Footer>
    </div>
  );
}