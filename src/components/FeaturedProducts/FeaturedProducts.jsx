import React from 'react';
import './FeaturedProducts.css';

const products = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    price: "$999",
    image: "iphone14pro.jpg",
    rating: "4.8",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    price: "$899",
    image: "s23.jpg",
    rating: "4.7",
  },
  {
    id: 3,
    name: "OnePlus 11",
    price: "$799",
    image: "oneplus11.jpg",
    rating: "4.6",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <h2>🌟 Featured Products 🌟</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
            <p>⭐ {product.rating}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
      <button className="view-all-btn">View All Products</button>
    </section>
  );
};

export default FeaturedProducts;
