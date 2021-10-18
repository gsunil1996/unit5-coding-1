import React from 'react'
import data from "./data.json"
import { useState } from 'react'
import { v4 as uuid } from "uuid";
import Card from './card';
import styles from "./card.module.css"
function Navbar() {
    const [items, setItems] = useState(data);

    return (
        <div className={styles.nav}>
            {items.map((item, id) => {
                return <Card key={id} data1={item} />
            })}
        </div>
    )
}

export default Navbar
