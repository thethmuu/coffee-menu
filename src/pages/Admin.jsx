import React from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Admin = ({ selectedProduct, products, showError }) => {
  return (
    <>
      <main className='bg-gray-100 h-screen'>
        <div className='container h-full flex bg-white mx-auto'>
          {/* add form */}
          <div className='w-1/2 p-4 flex justify-center'>
            {selectedProduct && (
              <ProductForm selectedProduct={selectedProduct} />
            )}
          </div>
          {/* preview UI */}
          <div className='w-1/2 p-4 flex justify-center preview'>
            <ProductList products={products} isAdmin={true} />
          </div>
        </div>
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
