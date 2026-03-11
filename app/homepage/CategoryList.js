import styles from "./categoryList.module.css";
import Link from "next/link";

export default async function CategoryList() {
  const data = await fetch("https://dummyjson.com/products/categories");
  const categories = await data.json();

  return (
    <ul className={`${styles.wrapper} container`}>
      {categories.map((cat) => {
        return (
          <Link key={cat.slug} href={`/products/${cat.slug}`}>
            <li className={styles.category}>{cat.name}</li>
          </Link>
        );
      })}
    </ul>
  );
}
