import React, { useContext } from 'react';
import { MenuContext } from '../App';
import logo from '../images/brand-logo.png';
import ProductGroup from './ProductGroup';

const ProductList = ({ products }) => {
  const { handleProductAdd } = useContext(MenuContext);

  return (
    <>
      <div className='w-2/3 mx-auto'>
        <div className='flex justify-center items-center'>
          <img src={logo} alt='Logo' className='w-24 h-24' />
        </div>
        {products.map((product) => (
          <ProductGroup key={product.id} product={product} />
        ))}
        <button className='btn btn-sm' onClick={handleProductAdd}>
          Add Product
        </button>
      </div>
      ;
    </>
  );
};

export default ProductList;
