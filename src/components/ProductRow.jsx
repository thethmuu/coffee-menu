import React, { useContext } from 'react';
import { MenuContext } from '../App';

const ProductRow = ({ product, isAdmin }) => {
  const { handleProductDelete, handleProductSelect } = useContext(MenuContext);

  return (
    <>
      <div className='collapse-title text-xl font-medium'>
        <div className='flex justify-between text-lg text-semibold'>
          <h2>{product.name}</h2>
          <h2>{product.price}</h2>
        </div>
      </div>
      {isAdmin && (
        <div className='collapse-content flex justify-end'>
          <button
            onClick={() => handleProductSelect(product.id)}
            className='btn btn-primary btn-xs mr-1'
          >
            Edit
          </button>
          <button
            onClick={() => handleProductDelete(product.id)}
            className='btn btn-error btn-xs'
          >
            Del
          </button>
        </div>
      )}
    </>
  );
};

export default ProductRow;
