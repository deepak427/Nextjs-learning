import React from 'react'
import AddtoCart from '../AddtoCart'
// import styles from './ProductCart.module.css'

const ProductCart = () => {
  return (
    // <div className={styles.cardContainer}>
    <div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500'>
      <AddtoCart />
    </div>
  )
}

export default ProductCart
