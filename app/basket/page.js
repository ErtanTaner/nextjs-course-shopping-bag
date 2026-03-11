import styles from './page.module.css';
import BasketItems from './BasketItems';

export default function Basket() {
    return (
        <div className={styles.basket}>
          <div className="page-header">
           <h1>Shopping Bag</h1> 
          </div>
        <BasketItems />
        </div>
    );
}
