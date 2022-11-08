import { createContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { v4 as uuid } from 'uuid';
import ProductGroup from './components/ProductGroup';
import ProductRow from './components/ProductRow';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

const sampleProducts = [
  {
    id: 1,
    name: 'Latte',
    price: '4000',
    category: 1,
  },
  {
    id: 2,
    name: 'Americano',
    price: '4500',
    category: 1,
  },
  {
    id: 3,
    name: 'Expresso',
    price: '3500',
    category: 1,
  },
  {
    id: 4,
    name: 'Pizza',
    price: '8500',
    category: 3,
  },
];

// imperative (how)
// declarative (what)

export const categories = [
  {
    id: 1,
    name: 'Drinks 🧃',
  },
  {
    id: 2,
    name: 'Cake 🍰',
  },
  {
    id: 3,
    name: 'Pizza 🍕',
  },
];

export const MenuContext = createContext();

const STORAGE_KEY = 'menuapp.products';

function App() {
  const [products, setProducts] = useState(sampleProducts);
  const [selectedProductId, setSelectedProductId] = useState();
  const [showError, setShowError] = useState(false);
  const selectedProduct = products.find(
    (product) => product.id === selectedProductId
  );

  useEffect(() => {
    // get from API
    const productsJSON = localStorage.getItem(STORAGE_KEY);
    if (productsJSON !== null) setProducts(JSON.parse(productsJSON));
  }, []);

  useEffect(() => {
    // save data to API
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  const menuContextValue = {
    handleProductDelete,
    handleProductAdd,
    handleProductSelect,
    handleProductDataChange,
  };

  function handleProductAdd() {
    const newProduct = {
      id: uuid(),
      name: '',
      price: '',
      category: '',
    };
    setProducts([...products, newProduct]);
    setSelectedProductId(newProduct.id);
  }

  function handleProductDataChange(id, updatedData) {
    const newProducts = [...products];
    const productIndex = newProducts.findIndex((product) => product.id === id);
    newProducts[productIndex] = updatedData;
    setProducts(newProducts);
  }

  function handleProductDelete(id) {
    setProducts(products.filter((product) => product.id !== id));
    setShowError(true);
    setTimeout(() => setShowError(false), 2000);
  }

  function handleProductSelect(id) {
    setSelectedProductId(id);
  }

  return (
    <MenuContext.Provider value={menuContextValue}>
      <Router>
        <nav className='container py-2'>
          <ul className='flex justify-around'>
            <Link to='/'>Home</Link>
            <Link to='/courses'>Courses</Link>
            <Link to='/about-us'>About Us</Link>
          </ul>
        </nav>
        <Routes>
          <Route
            path='/'
            element={
              <Home
                selectedProduct={selectedProduct}
                products={products}
                showError={showError}
              />
            }
          />
          <Route path='/courses' element={<Courses />} />
          <Route path='/about-us' element={<AboutUs />} />
        </Routes>
      </Router>
    </MenuContext.Provider>
  );
}

export default App;

function Home({ selectedProduct, products, showError }) {
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
            <ProductList products={products} />
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
}

const Courses = () => (
  <motion.h1
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    className='container mx-auto text-center bg-gray-200'
  >
    Courses
  </motion.h1>
);
const AboutUs = () => (
  <motion.h1
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    className='container mx-auto text-center bg-gray-200'
  >
    About Us
  </motion.h1>
);
