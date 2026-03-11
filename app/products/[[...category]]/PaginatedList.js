"use client";

import { useState } from "react";
import ProductCard from "../../components/ProductCard";
import Loader from "../../components/Loader";

export default function PaginatedList({
  initProducts,
  totalProducts,
  category,
}) {
  const [products, setProducts] = useState(initProducts);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLoadMore = async () => {
    setError("");
    setLoading(true);
    try {
      const data = await fetch(
        `https://dummyjson.com/products${category ? `/category/${category}` : ""}?limit=8&skip=${products.length}`,
      );
      const res = await data.json();
      setProducts((prev) => [...prev, ...res.products]);
    } catch (error) {
      setError("Failed to fetch more item");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {products.map((prod) => {
        return <ProductCard key={prod.id} product={prod} />;
      })}
      {products.length < totalProducts ? (
        <button onClick={handleLoadMore} disabled={loading}>
          {loading ? <Loader /> : "Load more"}
        </button>
      ) : (
        ""
      )}
      <p>
        Showing {products.length} of {totalProducts} products
      </p>
      {error && <p>{error}</p>}
    </>
  );
}
