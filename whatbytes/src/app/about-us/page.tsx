'use client';

import Header from '../components/Header';
import Footer from '../components/Footer'; // Import the Footer component

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">About Us</h1>
        <div className="bg-white rounded-lg shadow-md p-6 leading-relaxed text-gray-700">
          <p className="mb-4">
            Welcome to WhatBytes-Pro, your number one source for amazing products.
            We're dedicated to giving you the very best of products, with a focus on
            quality, customer service, and uniqueness.
          </p>
          <p className="mb-4">
            Founded in 2024, WhatBytes-Pro has come a long way from its beginnings.
            When we first started out, our passion for providing the best products
            drove us to do intense research, and gave us the impetus to turn hard work
            and inspiration into a booming online store. We now serve customers all over
            the world and are thrilled to be a part of the eco-friendly wing of the industry.
          </p>
          <p>
            We hope you enjoy our products as much as we enjoy offering them to you.
            If you have any questions or comments, please don't hesitate to contact us.
          </p>
          <p className="mt-6 font-semibold text-gray-800">Sincerely,</p>
          <p className="text-gray-800">The WhatBytes-Pro Team</p>
        </div>
      </main>
      <Footer /> {/* Use the Footer component */}
    </div>
  );
} 