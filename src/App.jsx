import { useState } from 'react';
import AddForm from './components/AddForm';
import ProductGroup from './components/ProductGroup';
import logo from './images/brand-logo.jpg';
import { v4 as uuid } from 'uuid';
import ProductRow from './components/ProductRow';

function App() {
  const [newProduct, setNewProduct] = useState({
    id: uuid(),
    name: '',
    price: '',
    category: '',
  });

  return (
    <main className='bg-gray-100 h-screen'>
      <div className='container h-100 flex bg-white mx-auto'>
        {/* add form */}
        <div className='w-1/2 p-4'>
          <AddForm newProduct={newProduct} setNewProduct={setNewProduct} />
        </div>
        {/* preview UI */}
        <div className='w-1/2 p-4 flex justify-center preview'>
          <div className='w-2/3 mx-auto'>
            <div className='justify-center items-center'>
              <img src={logo} alt='Logo' />
            </div>
            {/* Product group */}
            <ProductGroup />
            {/* Product group */}
            <ProductGroup />
            {/* New Product */}
            <div className='mt-4'>
              <div className='flex justify-between text-2xl text-bold'>
                <h2>Fresh Juice</h2>
                <h2>Price</h2>
              </div>
              <ProductRow name={newProduct.name} price={newProduct.price} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
