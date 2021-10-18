import React from 'react'
import styles from "./card.module.css"

function Card({data1}) {
    return (
      <div>
        <div className={styles.box}>
          <div>
            <img src={data1.image_url} alt="image" />
          </div>
          <p>{data1.product_name}</p>
                <p>{data1.description}</p>
                <p>{data1.price}</p>
        </div>
      </div>
    );
}

export default Card
