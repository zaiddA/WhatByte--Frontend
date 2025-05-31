import React from 'react';
import Link from 'next/link';
import { products } from '../data/products';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-bold text-lg">Filters</span>
          <div className="flex gap-2 text-sm">
            <Link href="/" className="hover:underline text-blue-200">All</Link>
            {/* Dynamically add category filters */}
            {Array.from(new Set(products.map(product => product.category))).map(category => (
              <div key={category} className="flex gap-2 text-sm">
                <span className="text-blue-300">|</span>
                <Link href={`/?category=${category}`} className="hover:underline text-blue-200">{category}</Link>
              </div>
            ))}
          </div>
          <span className="text-xs text-blue-200 mt-2">© 2024 American</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Link href="/about-us" className="hover:underline text-blue-200">About Us</Link>
          <Link href="/contact" className="hover:underline text-blue-200">Contact</Link>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="font-bold text-lg">Follow Us</span>
          <div className="flex gap-4 mt-1">
            <a href="#" className="hover:text-blue-400" aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.621c-.518 0-.759.232-.759.767v1.533h2.395l-.305 2.316h-2.09v7.084h-3.09v-7.084h-2.116v-2.316h2.116v-1.72c0-2.081 1.267-3.699 3.6-3.699l2.105.004v2.105z"/></svg></a>
            <a href="#" className="hover:text-blue-400" aria-label="Twitter"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.188 3.83-2.073 6.735-4.917 9.2-.517.444-.989.832-1.414 1.165 1.525.097 2.715-.027 3.945-.657 1.055-.53 1.868-1.255 2.44-2.292-.515.04-1.025.062-1.53.058-.684-.006-1.352-.096-2.012-.295 1.22-.114 2.23-.492 3.03-1.17-.843.043-1.694.02-2.543-.065.465-.745.822-1.5.967-2.33-.712.053-1.424.097-2.132.13-.71.033-1.417.06-2.126.08-.012-.223-.018-.445-.018-.667 0-.56.05-1.117.15-1.664.24-.96.63-1.82 1.18-2.6.55-.78.977-1.438 1.363-1.99 1.298-1.77 2.8-2.8 4.65-3.16.08.965.116 1.94.12 2.91.004 1-.01 2-.037 2.99.94-.06 1.82-.23 2.6-.52.78-.29 1.45-.65 2-1.1-.32.965-.64 1.8-.96 2.53-.32.73-.63 1.4-.93 2.02z"/></svg></a>
            <a href="#" className="hover:text-blue-400" aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.251-.148-4.771-1.692-4.919-4.919-.058-1.265-.068-1.644-.068-4.849 0-3.204.012-3.584.069-4.849 0-3.233 1.537-4.772 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.668.014-4.949.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.691-.073 4.949 0 3.259.014 3.668.072 4.949.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.691.073 4.949.073 3.259 0 3.668-.014 4.949-.072 4.354-.2 6.78-2.618 6.979-6.98.059-1.281.073-1.691.073-4.949 0-3.259-.014-3.667-.072-4.949-.199-4.358-2.618-6.78-6.979-6.98-1.281-.059-1.691-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
} 