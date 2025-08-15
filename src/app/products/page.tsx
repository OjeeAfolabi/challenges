import React from "react";
import { products } from "../data/products";
import Link from "next/link";
const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li className="mt-5" key={product.id}>
            <Link href={`/products/${product.category}/${product.id}/${product.name}`}>
              <h2 className="text-red-800">{product.name}</h2>
            </Link>
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Category: {product.category}</p>
            <p>Brand: {product.brand}</p>
            <p>Stock: {product.stock}</p>
            <p>
              Rating: {product.rating} ({product.reviews} reviews)
            </p>
            <img
              src={product.imageUrl}
              alt={product.name}
              style={{ width: "100px" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
