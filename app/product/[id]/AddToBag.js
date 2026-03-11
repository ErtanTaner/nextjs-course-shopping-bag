"use client"

import { useState } from 'react';
import styles from './addToBag.module.css';
import { useBasket } from '../../context/BasketContext';

export default function AddToBag({ product }) {
    const { items, addToBag, removeFromBag, updateQuantity } = useBasket();
    const itemInBag = items.find(item => item.id === product.id);
    const [quantity, setQuantity] = useState(itemInBag ? itemInBag.quantity : 1);
    console.log(itemInBag);

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity < 1)
            return undefined;
        if (newQuantity > product.stock)
            return undefined;
        setQuantity(newQuantity);
        if (itemInBag)
            updateQuantity(product.id, newQuantity);
    }

    return (
        <div className={styles["add-to-bag"]}>
          <div className={styles.quantity}>
            <button onClick={() => handleQuantityChange(quantity - 1)} disabled={quantity <= 1} className="minimal">-</button>
            <input disabled value={quantity} />
            <button onClick={() => handleQuantityChange(quantity + 1)} disabled={quantity >= product.stock} className="minimal">+</button>
          </div>
        { itemInBag ? (
            <div className={styles.actions}>
              <p>Added to basket!</p>
              <button onClick={() => removeFromBag(product.id)} className='outline'>Remove</button>
            </div>
           ) :
            <button onClick={() => addToBag(product, quantity)}>Add to bag</button>
        }
        </div>
    );
}

