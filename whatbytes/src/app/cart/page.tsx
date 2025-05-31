'use client'

import { useCartStore } from '../store/cartStore'
import Link from 'next/link'
import Image from 'next/image'
import { Trash2 } from 'lucide-react'

export default function CartPage() {
  const { items, removeItem, updateQuantity } = useCartStore()

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header will be added by the layout if it exists */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-8">Your Cart</h1>

        {items.length === 0 ? (
          <div className="text-center text-gray-500">
            Your cart is empty.
            <p className="mt-4">
              <Link href="/" className="text-blue-600 hover:underline">
                Continue Shopping
              </Link>
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {items.map((item) => (
              <div key={item.id} className="flex items-center border-b pb-6">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className="rounded-md"
                  />
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-lg font-bold text-gray-900">{item.title}</h2>
                  <p className="text-sm text-gray-600">Category: {item.category}</p>
                  <p className="text-lg font-semibold text-gray-900 mt-1">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-4">
                  {/* Quantity controls */}
                  <button
                    onClick={() => {
                      if (item.quantity === 1) {
                        removeItem(item.id);
                      } else {
                        updateQuantity(item.id, item.quantity - 1);
                      }
                    }}
                    className="px-3 py-1 border rounded-md hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 border rounded-md hover:bg-gray-100"
                  >
                    +
                  </button>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-4 text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}

            {/* Cart Summary */}
            <div className="mt-8 border-t pt-8">
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-gray-900">Total:</span>
                <span className="text-2xl font-bold text-blue-700">${total.toFixed(2)}</span>
              </div>
              {/* Add a checkout button here if needed */}
              <button className="mt-6 w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700">Proceed to Checkout</button>
            </div>
          </div>
        )}
      </main>
      {/* Footer will be added by the layout if it exists */}
    </div>
  )
} 