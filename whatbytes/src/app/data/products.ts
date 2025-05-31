import { Product } from '../store/cartStore'

export const products: Product[] = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    category: "Electronics",
    description: "High-quality wireless headphones with noise cancellation.",
    rating: 5,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600", // Placeholder
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700", // Placeholder
    ],
    brand: "Sony",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    category: "Electronics",
    description: "Feature-rich smartwatch with health tracking capabilities.",
    rating: 4,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600", // Placeholder
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700", // Placeholder
    ],
    brand: "Apple",
  },
  {
    id: 3,
    title: "Running Shoes",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    category: "Sports",
    description: "Comfortable running shoes for professional athletes.",
    rating: 5,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600", // Placeholder
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700", // Placeholder
    ],
    brand: "Nike",
  },
  {
    id: 4,
    title: "Modern Sofa",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500",
    category: "Home",
    description: "Comfortable modern sofa with premium fabric and elegant design.",
    rating: 4,
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700",
    ],
    brand: "IKEA",
  },
  {
    id: 5,
    title: "Yoga Mat",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=500",
    category: "Sports",
    description: "Non-slip yoga mat with carrying strap.",
    rating: 5,
    images: [
      "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=500",
      "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=600", // Placeholder
      "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=700", // Placeholder
    ],
    brand: "YogaBrand",
  },
  {
    id: 6,
    title: "Blender",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500",
    category: "Home",
    description: "High-speed blender for smoothies and food processing.",
    rating: 4,
    images: [
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500",
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600", // Placeholder
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=700", // Placeholder
    ],
    brand: "BlendCo",
  }
]

export const categories = Array.from(new Set(products.map(product => product.category)))
export const brands = Array.from(new Set(products.map(product => product.brand))).filter(brand => brand !== undefined) as string[]; 