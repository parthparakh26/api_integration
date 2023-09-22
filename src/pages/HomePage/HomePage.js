import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import './HomePage.css';
import FadeLoader from "react-spinners/FadeLoader";
import ProductCard  from '../../components/ProductCard/ProductCard';
import {Link} from 'react-router-dom';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const limit = 10;
  const [skip, setSkip] = useState(0);

  const loadMoreData = async () => {
    setLoading(true);

    try {
      const res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
      const newProducts = res.data.products;
      if (newProducts.length === 0) {
        setHasMore(false);
      } else {
        // Simulate a 2-second delay before loading the next set of products
        setTimeout(() => {
          setProducts((prevProducts) => [...prevProducts, ...newProducts]);
          setSkip(skip + limit);
          setLoading(false);
        }, 2000); // 2000 milliseconds (2 seconds) delay
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false); // Make sure to set loading to false in case of an error
    }
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div className="HomePage">
      <InfiniteScroll
        dataLength={products.length}
        next={loadMoreData}
        hasMore={hasMore}
        style={{
          overflow: 'hidden', 
        }}
        loader={<FadeLoader
          color='#36d7b7'
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          cssOverride={override}
        />}
      >
        <div className="product-grid">
          {products.map((product, index) => (
            <Link to={`/${product.id}`} key={`${product.id}-${index}`} style={{ textDecoration: 'none', color:'inherit' }} state={product}>
                <ProductCard key={`${product.id}-${index}`} product={product} />
            </Link>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default HomePage;
