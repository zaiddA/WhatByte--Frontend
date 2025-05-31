'use client'

import { use, useState } from 'react'
import Image from 'next/image'
import { useCartStore } from '../../store/cartStore'
import { products } from '../../data/products'
import Header from '../../components/Header'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import ImageCarousel from '../../components/ImageCarousel'

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const product = products.find((p) => p.id === Number(id))
  const [quantity, setQuantity] = useState(1)
  const addItem = useCartStore((state) => state.addItem)

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">Product not found</h1>
          </div>
        </main>
      </div>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link href="/" className="text-blue-600 hover:underline flex items-center gap-1">
            &larr; Back to Products
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Image Section */}
            <div className="md:w-1/2">
              {product.images && product.images.length > 0 ? (
                <ImageCarousel images={product.images} title={product.title} />
              ) : product.image ? (
                <div className="relative h-96 w-full">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className="rounded-md"
                  />
                </div>
              ) : null}
            </div>

            {/* Details Section */}
            <div className="md:w-1/2 p-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {product.title}
              </h1>
              <p className="text-2xl text-blue-600 font-semibold mb-4">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="mb-4">
                <span className="text-sm text-gray-500">Category:</span>
                <span className="ml-2 text-gray-800">{product.category}</span>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 border rounded-md hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 border rounded-md hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Customer Reviews</h2>
            <div className="text-gray-600">
              {/* Placeholder for reviews */}
              {/* <p>No reviews yet. Be the first to write a review!</p> */}
              {/* Future implementation could fetch and display actual reviews here */}
              
              {/* Placeholder Reviews List */}
              {
                [ // Array of placeholder review objects
                  { id: 1, author: 'John Doe', rating: 5, comment: 'Great product! Highly recommend.' },
                  { id: 2, author: 'Jane Smith', rating: 4, comment: 'Good quality for the price.' },
                  { id: 3, author: 'Peter Jones', rating: 5, comment: 'Love these headphones!' },
                ].length > 0 ? (
                  <ul>
                    {[ // Map over placeholder reviews
                      { id: 1, author: 'John Doe', rating: 5, comment: 'Great product! Highly recommend.' },
                      { id: 2, author: 'Jane Smith', rating: 4, comment: 'Good quality for the price.' },
                      { id: 3, author: 'Peter Jones', rating: 5, comment: 'Love these headphones!' },
                    ].map(review => (
                      <li key={review.id} className="border-b border-gray-200 py-4 last:border-b-0">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-gray-800">{review.author}</span>
                          {/* Placeholder for star rating display */}
                          <span className="text-sm text-gray-500">Rating: {review.rating}/5</span>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No reviews yet. Be the first to write a review!</p>
                )
              }
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 