'use client'

import { ShoppingCart, Search, User, Image as ImageIcon } from 'lucide-react'
import Link from 'next/link'
import { useCartStore } from '../store/cartStore'
import { useState } from 'react';

interface HeaderProps {
  onSearchChange?: (query: string) => void;
}

export default function Header({ onSearchChange }: HeaderProps) {
  const items = useCartStore((state) => state.items)
  const itemCount = items.reduce((total, item) => total + item.quantity, 0)
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <header className="bg-blue-700 py-4 px-0 sticky top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex-1 flex items-center min-w-0">
          <Link href="/" className="flex items-center min-w-0">
            <span className="text-3xl font-extrabold text-white whitespace-nowrap truncate">Logo</span>
          </Link>
        </div>
        {/* Search Bar */}
        <form className="flex-1 max-w-xl mx-8 flex items-center bg-white rounded-lg px-4 py-2 min-w-0" onSubmit={(e) => {
          e.preventDefault();
          onSearchChange?.(searchInputValue);
        }}>
          <Search className="h-5 w-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search for products..."
            value={searchInputValue}
            onChange={(e) => setSearchInputValue(e.target.value)}
            className="w-full bg-transparent outline-none text-gray-700 min-w-0"
          />
        </form>
        {/* Cart and Profile */}
        <div className="flex-1 flex items-center justify-end space-x-4 min-w-0">
          <Link href="/image-search" className="p-2 rounded-full hover:bg-blue-600" title="Image Search">
            <ImageIcon className="h-6 w-6 text-white" />
          </Link>
          <Link href="/cart" className="relative p-2 rounded-full hover:bg-blue-600">
            <ShoppingCart className="h-6 w-6 text-white" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-blue-700 text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                {itemCount}
              </span>
            )}
          </Link>
          {/* Profile */}
          <div className="relative">
            <button className="p-2 rounded-full hover:bg-blue-600 focus:outline-none" onClick={toggleProfileDropdown}>
              <User className="h-6 w-6 text-white" />
            </button>
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Profile</Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
} 