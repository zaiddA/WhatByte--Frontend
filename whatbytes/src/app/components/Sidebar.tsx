'use client'

import { useState } from 'react'
import { categories, brands } from '../data/products'

// Removed temporary brands array
// const brands = ['Sony', 'Apple', 'Samsung', 'Nike', 'Adidas', 'Philips']; // Example brands

interface SidebarProps {
  selectedCategories: string[]
  onCategoryChange: (category: string) => void
  priceRange: [number, number | null]
  onPriceRangeChange: (range: [number, number | null]) => void
  selectedBrands: string[]; // Added selectedBrands prop
  onBrandChange: (brands: string[]) => void; // Added onBrandChange prop
}

export default function Sidebar({
  selectedCategories,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  selectedBrands, // Destructure new prop
  onBrandChange, // Destructure new prop
}: SidebarProps) {
  const [minPrice, maxPrice] = priceRange
  // New local state for Cacyroy price input
  const [cacyroyPriceInput, setCacyroyPriceInput] = useState('');

  const handleBrandToggle = (brand: string) => {
    onBrandChange(
      selectedBrands.includes(brand)
        ? selectedBrands.filter((b) => b !== brand)
        : [...selectedBrands, brand]
    );
  };

  return (
    <aside className="w-full md:w-64 flex flex-col gap-6">
      {/* Main Filters */}
      <div className="bg-blue-700 text-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold mb-6">Filters</h2>
        <div className="mb-8">
          <h3 className="font-semibold mb-3">Category</h3>
          <div className="flex flex-col gap-2">
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="category-filter"
                checked={selectedCategories.length === 0}
                onChange={() => onCategoryChange('')}
                className="form-radio text-blue-700 border-blue-700 focus:ring-2 focus:ring-blue-400"
              />
              <span>All</span>
            </label>
            {categories.map((category) => (
              <label key={category} className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="category-filter"
                  checked={selectedCategories.includes(category)}
                  onChange={() => onCategoryChange(category)}
                  className="form-radio text-blue-700 border-blue-700 focus:ring-2 focus:ring-blue-400"
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h3 className="font-semibold mb-3">Price</h3>
          {/* Price Filter UI based on the image */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              {/* Min Price Slider */}
              <input
                type="range"
                min="0"
                max="1000"
                value={minPrice}
                onChange={(e) => onPriceRangeChange([Number(e.target.value), maxPrice])}
                className="w-full accent-blue-400"
              />
              <span className="text-white font-semibold">0</span> {/* Label for min price */}
            </div>
            <div className="flex items-center gap-3">
              {/* Max Price Slider */}
              <input
                type="range"
                min="0"
                max="1000"
                value={maxPrice ?? 1000}
                onChange={(e) => onPriceRangeChange([minPrice, Number(e.target.value)])}
                className="w-full accent-blue-400"
              />
              <span className="text-white font-semibold">1000</span> {/* Label for max price */}
            </div>
          </div>
        </div>
        {/* Brand Filter */}
        <div className="mb-4">
          <h3 className="font-semibold mb-3">Brand</h3>
          <div className="flex flex-col gap-2">
            {brands.map((brand) => (
              <label key={brand} className="inline-flex items-center gap-2 text-white">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandToggle(brand)}
                  className="form-checkbox text-blue-700 border-blue-700 focus:ring-2 focus:ring-blue-400 rounded"
                />
                <span>{brand}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Cacyroy Filters Section - based on the second part of the image */}
      <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold mb-6">Cacyroy</h2>
        <div className="mb-8">
          <h3 className="font-semibold mb-3">Category</h3>
          <div className="flex flex-col gap-2">
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="cacyroy-category-filter"
                checked={selectedCategories.length === 0}
                onChange={() => onCategoryChange('')}
                className="form-radio text-blue-700 border-gray-300 focus:ring-2 focus:ring-blue-400"
              />
              <span>All</span>
            </label>
            {categories.map((category) => (
              <label key={category} className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="cacyroy-category-filter"
                  checked={selectedCategories.includes(category)}
                  onChange={() => onCategoryChange(category)}
                  className="form-radio text-blue-700 border-gray-300 focus:ring-2 focus:ring-blue-400"
                />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h3 className="font-semibold mb-3">Price</h3>
          <div className="flex items-center gap-3">
            {/* Price Input Field - based on the second part of the image */}
            <input
              type="number"
              // Bind value to the local state
              value={cacyroyPriceInput}
              // Update local state and call onPriceRangeChange
              onChange={(e) => {
                const value = e.target.value;
                setCacyroyPriceInput(value);
                // Update the main priceRange state for filtering
                onPriceRangeChange([priceRange[0], value === '' ? null : Number(value)]);
              }}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="enter your price"
            />
            {/* Arrow icon could be added here if needed for visual matching */}
          </div>
        </div>
      </div>
    </aside>
  )
} 