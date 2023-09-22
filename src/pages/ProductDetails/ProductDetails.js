import React,{useState} from 'react';
import './ProductDetails.css'
import {useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state;
  const [quantity, setQuantity] = useState(1); 

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!product) {
    return <p>No product details available.</p>;
  }

  return (
    <div className='product---details'>
        <div className='product---display'>
          <img src={product.thumbnail} className='product---image'></img> 
        </div>
        <div className='product---info'>
          <div>
            <h1 className='product---title'>{product.title}</h1>
          </div>
          <div className='about---product'>
            <b>Product description :</b>
          </div>
          <div>
            <i className='product---desc'>{product.description}</i>
          </div>
           <div className='quantity'>
              <p className='qty--label'>Qty :</p><button className='decrement---qty' onClick={decrement}>-</button><span className='qty---counter'>{quantity}</span><button className='increment---qty' onClick={increment}>+</button>
           </div>
           <div className='button---for---cart'>
              <button className='add---to---cart'>Add to Cart</button>
              <div className='product---totalcost'>
                 <b><p className='product---price'>${product.price}</p></b>
              </div>
           </div>
        </div>
      </div>
  )
}

export default ProductDetails;