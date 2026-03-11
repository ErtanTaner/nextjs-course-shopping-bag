"use client"

import styles from './basketItems.module.css';
import { useBasket } from '../context/BasketContext';
import { formatPrice } from '../util';
import Link from 'next/link';
import Image from 'next/image';

export default function BasketItems() {
    const { items, removeFromBag, updateQuantity, emptyBasket } = useBasket();

    const handleRemoveItem = (id) => {
        if (confirm("Are you sure you want to remove this item from the basket?"))
            removeFromBag(id);
    }

    const handleEmptyBasket = (id) => {
        if (confirm("Are you sure you want to empty your basket?"))
            emptyBasket();
    }

    const calculateTotal = () => formatPrice(items.reduce((t, n) => (n.price * n.quantity) + t, 0));

    return (
        <main className="container">
        {items.length > 0 ?
            <>
                <table className={styles["shopping-bag-table"]}>
                    <thead>
                        <tr>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Subtotal</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                        <tr key={item.id}>
                            <td>
                                <Image src={item.thumbnail} alt={`Image for ${item.title}`} width={50} height={50} />
                            </td>
                            <td>
                                <Link href={`/product/${item.id}`}>{item.title}</Link>
                            </td>
                            <td>
                              {formatPrice(item.price)}
                            </td>
                            <td className={styles.quantity}>
                                <div className={styles["actions"]}>
                                    <button
                                        className={styles.qty}
                                        disabled={item.quantity <= 1}
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    >
                                        -
                                    </button>
                                    <input type="text" value={item.quantity} disabled />
                                    <button
                                        className={styles.qty}
                                        disabled={item.quantity >= item.stock}
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    >
                                        +
                                    </button>
                                </div>
                                <div className={styles["stock"]}>
                                  {item.stock} items in stock
                                </div>
                            </td>
                            <td>
                              {formatPrice(item.price * item.quantity)}
                            </td>
                            
                            <td>
                                <button onClick={() => handleRemoveItem(item.id)} title="Remove from basket" className="transparent"> &#x2715; </button>
                            </td>
                        </tr>
                        ))} 
         
                        <tr className={styles['grand-total']}>
                            <td colSpan="4"></td>
                            <td  colSpan="2">
                            Grand Total: {calculateTotal()}
                            </td>
                            
                        </tr>
                    </tbody>
                </table>
                <section className={styles["basket-options"]}>
                  <button className="outline" onClick={handleEmptyBasket}>Empty Basket</button>
                  <Link href="/products">
                    <button className="outline">Continue shopping</button>
                  </Link>
                  <button onClick={() => alert("Congrats, you finished the process")}>Checkout</button>
                </section>
            </>
            :
            <div className={styles['empty-basket']}>
              <h3>
                Your basket is empty!
              </h3>
              <p><Link href="/products">Click here</Link> to start shopping.</p>
            </div>
        }
        </main>
    );
}
