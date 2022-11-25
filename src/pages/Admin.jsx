import React from 'react';
import { motion } from 'framer-motion';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Admin = ({ selectedProduct, products, showError }) => {
  return (
    <>
      <main className='bg-gray-100 h-screen'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='container h-full flex flex-col md:flex-row bg-white mx-auto'
        >
          {/* add form */}
          <div className='md:w-1/2 p-4 flex justify-center'>
            {selectedProduct && (
              <ProductForm selectedProduct={selectedProduct} />
            )}
          </div>
          {/* preview UI */}
          <div className='md:w-1/2 p-4 flex justify-center preview'>
            <ProductList products={products} isAdmin={true} />
          </div>
        </motion.div>
      </main>
      {showError && (
        <div className='toast toast-top toast-end'>
          <div className='alert alert-error'>
            <div>
              <span>Product deleted 😃</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Admin;
