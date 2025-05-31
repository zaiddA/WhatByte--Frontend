'use client'

import { useState, useEffect } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ProductCard from './components/ProductCard'
import { products } from './data/products'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import Footer from './components/Footer'
import { Suspense } from 'react'

function HomePageContent() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number | null]>([0, null])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])

  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const category = searchParams.get('category')
    const price = searchParams.get('price')
    const brands = searchParams.get('brands')

    if (category) {
      setSelectedCategories([category])
    } else {
      setSelectedCategories([])
    }

    if (price) {
      const [minStr, maxStr] = price.split('-')
      const min = Number(minStr)
      const max = maxStr === '' || isNaN(Number(maxStr)) ? null : Number(maxStr)

      if (!isNaN(min)) {
        setPriceRange([min, max])
      }
    }

    if (brands) {
      setSelectedBrands(brands.split(','))
    }
  }, [searchParams])

  useEffect(() => {
    const params = new URLSearchParams()
    if (selectedCategories.length > 0) {
      params.set('category', selectedCategories[0])
    }
    params.set('price', `${priceRange[0]}-${priceRange[1] === null ? '' : priceRange[1]}`)
    if (selectedBrands.length > 0) {
      params.set('brands', selectedBrands.join(','))
    }

    router.replace(`/?${params.toString()}`)

  }, [selectedCategories, priceRange, selectedBrands, router])

  const handleCategoryChange = (category: string) => {
    if (category === '') {
      // 'All' category selected
      setSelectedCategories([]);
    } else {
      // Specific category selected
      setSelectedCategories([category]);
    }
  }

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category)
    const matchesPrice =
      product.price >= priceRange[0] &&
      (priceRange[1] === null || product.price <= priceRange[1])
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    const matchesBrand =
      selectedBrands.length === 0 ||
      (typeof product.brand === 'string' && selectedBrands.includes(product.brand));

    return matchesCategory && matchesPrice && matchesSearch && matchesBrand
  })

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <Header onSearchChange={setSearchQuery} />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <Sidebar
            selectedCategories={selectedCategories}
            onCategoryChange={(category) => {
              setSelectedCategories(category === '' ? [] : [category]);
            }}
            priceRange={priceRange}
            onPriceRangeChange={(range) => {
              setPriceRange(range);
            }}
            selectedBrands={selectedBrands}
            onBrandChange={(brands) => {
              setSelectedBrands(brands);
            }}
          />

          {/* Product Grid */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-blue-900 mb-8">Product Listing</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No products found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePageContent />
    </Suspense>
  );
} 