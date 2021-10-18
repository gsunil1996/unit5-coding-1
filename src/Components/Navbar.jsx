import React from 'react'
import data from "./data.json"
import { useState } from 'react'
import { v4 as uuid } from "uuid";
import Card from './card';

function Navbar() {
    const [items, setItems] = useState(data);

    return (
        <div>
            {items.map((item, id) => {
                return <Card key={id} data1={item} />
            })}
        </div>
    )
}

export default Navbar
