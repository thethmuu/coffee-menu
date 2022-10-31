import React from 'react';
import ProductRow from './ProductRow';

const ProductGroup = () => {
  return (
    <div className='mt-4'>
      <div className='flex justify-between text-2xl text-bold'>
        <h2>Fresh Juice</h2>
        <h2>Price</h2>
      </div>
      <ProductRow />
      <ProductRow />
    </div>
  );
};

export default ProductGroup;
