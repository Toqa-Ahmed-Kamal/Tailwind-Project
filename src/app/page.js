import Image from "next/image";


export default function products() {
  const products = [
    { id: 1, label: "SALE", name: "Wireless Headphones Pro", price: 89.99, oldPrice: 129.99, rating: 128, color: "from-purple-400 to-blue-500" },
    { id: 2, name: "Smart Fitness Watch", price: 199.99, rating: 256, color: "from-green-400 to-blue-500" },
    { id: 3, label: "NEW", name: "Gaming Laptop Pro", price: 1299.99, rating: 89, color: "from-orange-400 to-pink-500" },
    { id: 4, label: "30%", name: "Bluetooth Speaker", price: 59.99, oldPrice: 65.99, rating: 167, color: "from-pink-400 to-purple-500" },
    { id: 5, name: "Wireless Earbuds", price: 79.99, rating: 342, color: "from-blue-400 to-purple-500" },
    { id: 6, label: "NEW", name: "Tablet Pro 12.9”", price: 899.99, rating: 76, color: "from-gray-400 to-gray-600" },
    { id: 7, label: "SALE", name: "Smartphone X", price: 699.99, oldPrice: 899.99, rating: 512, color: "from-orange-400 to-yellow-400" },
    { id: 8, name: "Camera DSLR Pro", price: 1199.99, rating: 93, color: "from-cyan-400 to-blue-400" },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
        <p className="text-gray-500 mt-2">Discover our latest collection of tech gadgets</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <div
              className={`relative h-40 w-full rounded-lg bg-gradient-to-r ${product.color} mb-4`}
            >
              {product.label && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  {product.label}
                </span>
              )}
              <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
                ❤️
              </button>
            </div>

            <h3 className="text-gray-800 font-semibold text-sm">{product.name}</h3>
            <div className="text-yellow-400 text-sm my-1">
              ★★★★★ <span className="text-gray-400 text-xs">({product.rating})</span>
            </div>

            <div className="flex items-center justify-between mt-2">
              <div>
                <span className="text-lg font-bold text-gray-800">${product.price}</span>
                {product.oldPrice && (
                  <span className="text-gray-400 line-through text-sm ml-2">${product.oldPrice}</span>
                )}
              </div>
              <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <footer className="bg-gray-900 text-gray-300 mt-16 py-10 px-6 rounded-t-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-white mb-2">TechStore</h4>
            <p className="text-sm">Your one-stop shop for all tech gadgets and accessories.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Quick Links</h4>
            <ul className="text-sm space-y-1">
              <li>About Us</li>
              <li>Contact</li>
              <li>Shipping Info</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Customer Service</h4>
            <ul className="text-sm space-y-1">
              <li>Returns</li>
              <li>Warranty</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
        <p className="text-center text-gray-500 text-xs mt-6">© 2024 TechStore. All rights reserved.</p>
      </footer>
    </main>
  );
}

