import React from 'react'
import data from "./data.json"
import { useState } from 'react'
import { v4 as uuid } from "uuid";
import Card from './card';
import styles from "./card.module.css"
function Navbar() {
    const [items, setItems] = useState(data);

    const handleIncrement = (id) => {
        const counter = items.map((e) => e.id == id ? {...e, qty:e.qty+1}:e) ;
        setItems(counter);
    }
    const handleDecrement = (id) => {
        const counter = items.map((e) => e.id == id ? {...e, qty:e.qty-1}:e) ;
        setItems(counter);
    }

    return (
        <div className={styles.nav}>
            {items.map((item, id) => {
                return <Card key={id} data1={item} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
            })}
        </div>
    )
}

export default Navbar
