import React, { useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuContext } from '../App';

const ProductRow = ({ product }) => {
  const { handleProductDelete, handleProductSelect } = useContext(MenuContext);

  return (
    <AnimatePresence>
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='collapse-title text-xl font-medium'
        >
          <div className='flex justify-between text-lg text-semibold'>
            <h2>{product.name}</h2>
            <h2>{product.price}</h2>
          </div>
        </motion.div>
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
      </>
    </AnimatePresence>
  );
};

export default ProductRow;
