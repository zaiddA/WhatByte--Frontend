'use client';

import Header from '../components/Header';
import Footer from '../components/Footer'; // Import the Footer component

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">Contact Us</h1>
        <div className="bg-white rounded-lg shadow-md p-6 leading-relaxed text-gray-700">
          <p className="mb-4">
            Have questions or need assistance? Please feel free to reach out to us.
            You can contact us using the information below or by filling out the contact form.
          </p>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact Information</h2>
            <p>Email: <a href="mailto:info@whatbytespro.com" className="text-blue-600 hover:underline">info@whatbytespro.com</a></p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Demo Street, Anytown, CA 91234</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Send Us a Message</h2>
            <p>A contact form could be added here in a future iteration.</p>
            {/* Placeholder for a contact form */}
            {/* <form> ... </form> */}
          </div>
        </div>
      </main>
      <Footer /> {/* Use the Footer component */}
    </div>
  );
} 