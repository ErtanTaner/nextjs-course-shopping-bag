"use client";

import styles from "./categoryFilter.module.css";
import { useRouter } from "next/navigation";

export default function CategoryFilter({ categories, activeCat }) {
  const router = useRouter();
  const handleFilter = (slug) => {
    if (!slug || slug === activeCat) router.push("/products");
    else router.push(`/products/${slug}`);
  };
  return (
    <ul className={styles["category-filter"]}>
      {categories
        ? categories.map((cat) => (
            <li
              key={cat.slug}
              className={activeCat === cat.slug ? styles.active : ""}
              onClick={() => handleFilter(cat.slug)}
            >
              {cat.name}
            </li>
          ))
        : ""}
    </ul>
  );
}
