import React from 'react';
import './ProductCard.css'

const ProductCard = ({product}) => {
    return (
        <div className="product-card">
          <img src={product.thumbnail} alt={product.title} />
          <h2>{product.title}</h2>
          <p className='p-desc'>{product.description}</p>
        </div>
      );
}

export default ProductCard;
