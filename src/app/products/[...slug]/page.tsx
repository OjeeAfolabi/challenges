import React from "react";

import { products } from "@/app/data/products";
const MainProductPage = async ({ params }: { params: { slug: string[] } }) => {
  const { slug } = await params;

  const [category, productSlug] = slug;
    console.log("category:", category, "productSlug:", productSlug);

  const product = products.find(
    (product) => product.category === category && product.id === productSlug
  );

  return <div>
    <h1 className="text-3xl font-bold mb-4">Product Details</h1>
    <h2 className="text-gray-800 text-2xl">{product?.name}</h2>
    <p>Category: {category}</p>
    <p>Product {productSlug}</p>
    {/* Additional product details can be fetched and displayed here */}
  </div>;
};

export default MainProductPage;
