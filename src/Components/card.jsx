import React from 'react'
import styles from "./card.module.css"

function Card({data1}) {
    return (
      <div>
        <div className={styles.box}>
          <p>{data1.product_name}</p>
          <p>{data1.description}</p>
        </div>
      </div>
    );
}

export default Card
