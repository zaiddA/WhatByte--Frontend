'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Star, Minus, Plus } from 'lucide-react'
import { Product } from '../store/cartStore'
import { useCartStore } from '../store/cartStore'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem)
  const removeItem = useCartStore((state) => state.removeItem)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const cartItem = useCartStore((state) => state.items.find(item => item.id === product.id));

  const rating = product.rating;

  return (
    <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center p-6 transition-transform hover:scale-105 hover:shadow-2xl border border-gray-100">
      <Link href={`/product/${product.id}`} className="w-full flex flex-col items-center">
        <div className="relative w-32 h-32 mb-4">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 128px"
            className="object-contain"
          />
        </div>
        <h3 className="text-base font-semibold text-gray-900 mb-1 text-center hover:text-blue-600 transition-colors">
          {product.title}
        </h3>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} fill={i < rating ? 'currentColor' : 'none'} />
          ))}
        </div>
        <p className="text-lg text-blue-700 font-bold mb-4 text-center">${product.price.toFixed(0)}</p>
      </Link>
      {
        cartItem ? (
          <div className="w-full flex items-center justify-between bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md mt-auto">
            <button
              onClick={() => {
                if (cartItem.quantity === 1) {
                  removeItem(product.id);
                } else {
                  updateQuantity(product.id, cartItem.quantity - 1);
                }
              }}
              className="p-1 rounded-full hover:bg-blue-700 transition-colors"
            >
              <Minus className="h-5 w-5" />
            </button>
            <span className="font-semibold text-lg">{cartItem.quantity}</span>
            <button
              onClick={() => addItem(product)}
              className="p-1 rounded-full hover:bg-blue-700 transition-colors"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => addItem(product)}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 font-semibold shadow-md mt-auto"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Add to Cart</span>
          </button>
        )
      }
    </div>
  )
} 