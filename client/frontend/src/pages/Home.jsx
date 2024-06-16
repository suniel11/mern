// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Printing Shop</h1>
          <p className="text-xl mb-8">Quality Printing Solutions for All Your Needs</p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold">Get Started</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Business Cards</h3>
              <p className="text-gray-700">High-quality business cards to make a lasting impression.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Posters & Flyers</h3>
              <p className="text-gray-700">Custom posters and flyers to promote your business or event.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Brochures</h3>
              <p className="text-gray-700">Professional brochures that showcase your products and services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded shadow-md">
              <p className="text-gray-700 mb-4">"Excellent service and high-quality prints! Highly recommend!"</p>
              <h4 className="text-xl font-semibold">- John Doe</h4>
            </div>
            <div className="bg-gray-100 p-6 rounded shadow-md">
              <p className="text-gray-700 mb-4">"Fast turnaround and great prices. Will use again!"</p>
              <h4 className="text-xl font-semibold">- Jane Smith</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Print?</h2>
          <p className="text-xl mb-8">Contact us today to get started on your next project!</p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold">Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
