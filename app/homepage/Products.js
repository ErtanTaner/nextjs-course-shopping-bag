import styles from "./products.module.css";
import ProductList from "./ProductList";
import ErrorBoundary from "../components/ErrorBoundary";
import Link from "next/link";

export default function Products() {
  return (
    <div className={styles.products}>
      <div className={`${styles.wrapper} container`}>
        <h2>Highest Rated Products</h2>
        <p>
          Check out below a curated list of the products that received the
          highest ratings from our customers
        </p>
        <ErrorBoundary fallback="Could not get the products list, please refresh the page">
          <ProductList />
        </ErrorBoundary>
        <Link href="/products">
          <button>View all products</button>
        </Link>
      </div>
    </div>
  );
}
