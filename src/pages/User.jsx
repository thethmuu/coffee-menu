import React from 'react';
import { motion } from 'framer-motion';
import ProductList from '../components/ProductList';

const User = ({ products }) => {
  return (
    <>
      <main className='bg-gray-100 h-screen md:flex justify-center'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='md:w-1/2 h-full p-4 flex justify-center preview'
        >
          <ProductList products={products} />
        </motion.div>
      </main>
    </>
  );
};

export default User;
