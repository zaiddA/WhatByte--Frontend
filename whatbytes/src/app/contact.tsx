export default function Contact() {
  return (
    <main className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">Contact Us</h1>
        <p className="text-gray-700 mb-6">
          Have a question, comment, or need support? Fill out the form below or reach out to us directly. We're here to help!
        </p>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Name</label>
            <input type="text" className="w-full border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input type="email" className="w-full border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="you@email.com" />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Message</label>
            <textarea className="w-full border border-blue-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" rows={4} placeholder="How can we help you?" />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md">Send Message</button>
        </form>
        <div className="mt-8 text-gray-600">
          <p>Email: <a href="mailto:support@whatbytes.com" className="text-blue-600 hover:underline">support@whatbytes.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a></p>
        </div>
      </div>
    </main>
  );
} 