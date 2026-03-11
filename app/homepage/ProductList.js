import styles from "./productList.module.css";
import ProductCard from "../components/ProductCard";

export default async function ProductList() {
  const data = await fetch(
    "https://dummyjson.com/products?limit=12&sortBy=rating&order=desc",
  );
  const products = await data.json();

  return (
    <ul className={styles["products-list"]}>
      {products.products.map((prod) => (
        <ProductCard key={prod.id} product={prod} />
      ))}
    </ul>
  );
}
