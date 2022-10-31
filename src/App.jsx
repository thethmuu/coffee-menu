import AddForm from './components/AddForm';
import ProductGroup from './components/ProductGroup';
import logo from './images/brand-logo.jpg';

function App() {
  return (
    <main className='bg-gray-100 h-screen'>
      <div className='container h-100 flex bg-white mx-auto'>
        {/* add form */}
        <div className='w-1/2 p-4'>
          <AddForm />
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
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
