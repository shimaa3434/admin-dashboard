import React from 'react'
import Single from '../../compenents/single/Single'
import {singleProduct} from '../../data'
const Product = () => {
  return (
    <div className='product'>
      <Single  {...singleProduct}/>
    </div>
  )
}

export default Product