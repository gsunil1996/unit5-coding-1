import React from 'react'
import styles from "./card.module.css"

function Card({data1, handleDecrement, handleIncrement}) {
    return (
      <div>
        <div className={styles.box}>
          <div>
            <img src={data1.image_url} alt="image" />
          </div>
          <p>{data1.product_name}</p>
          <p>{data1.description}</p>
          <p>{data1.price}</p>

          <div className={styles.btn}>
            <button onClick={handleDecrement}>-</button>
            <div>{data1.qty}</div>
            <button onClick={handleIncrement}>+</button>
          </div>

          {data1.is_available ? (
            <div>
              {" "}
              <button> High Stock</button>
            </div>
          ) : (
            <div>
              <button>Low Stock</button>
            </div>
          )}
        </div>
      </div>
    );
}

export default Card
