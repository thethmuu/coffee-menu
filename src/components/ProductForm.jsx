import React, { useContext } from 'react';
import { MenuContext, categories } from '../App';

const ProductForm = ({ selectedProduct }) => {
  const { handleProductDataChange } = useContext(MenuContext);

  const handleInputChange = (updatedData) => {
    handleProductDataChange(selectedProduct.id, {
      ...selectedProduct,
      ...updatedData,
    });
  };

  return (
    <form className='w-2/3 mt-5'>
      <div className='form-control w-full'>
        <label className='label'>
          <span className='label-text'>Product name</span>
        </label>
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered input-sm w-full'
          value={selectedProduct.name}
          name='name'
          onChange={(e) => handleInputChange({ name: e.target.value })}
        />
      </div>
      <div className='form-control w-full'>
        <label className='label'>
          <span className='label-text'>Price</span>
        </label>
        <input
          type='number'
          placeholder='Type here'
          className='input input-bordered input-sm w-full'
          value={selectedProduct.price}
          name='price'
          onChange={(e) => handleInputChange({ price: e.target.value })}
        />
      </div>
      <div className='form-control w-full'>
        <label className='label'>
          <span className='label-text'>Category</span>
        </label>
        <select
          value={selectedProduct.category}
          onChange={(e) =>
            handleInputChange({ category: parseInt(e.target.value) })
          }
          name='category'
          className='select select-bordered select-sm w-full'
        >
          <option disabled>Select category</option>
          {categories.map((category) => (
            <option
              selected={category.id === selectedProduct.category}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <button className='btn btn-sm btn-primary mt-4'>Save</button>
    </form>
  );
};

export default ProductForm;
