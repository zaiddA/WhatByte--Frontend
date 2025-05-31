import ImageSearch from '../components/ImageSearch';
import Link from 'next/link';

export default function ImageSearchPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-8">
        <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">Back to Home</Link>
        <h1 className="text-3xl font-bold text-center mb-8">Image Search</h1>
        <ImageSearch />
      </div>
    </main>
  );
} 