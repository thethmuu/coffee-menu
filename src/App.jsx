import { createContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import ProductGroup from './components/ProductGroup';
import ProductRow from './components/ProductRow';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

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


export const MenuContext = createContext();

const STORAGE_KEY = 'menuapp.products';

function App() {
  const [products, setProducts] = useState(sampleProducts);
  const [selectedProductId, setSelectedProductId] = useState();
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
  }

  function handleProductDataChange(id, productData) {
    const newProducts = [...products];
    const productIndex = newProducts.findIndex((product) => product.id === id);
    newProducts[productIndex] = productData;
    setProducts(newProducts);
  }

  function handleProductDelete(id) {
    setProducts(products.filter((product) => product.id !== id));
  }

  function handleProductSelect(id) {
    setSelectedProductId(id);
  }

  return (
    <MenuContext.Provider value={menuContextValue}>
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
    </MenuContext.Provider>
  );
}

export default App;
