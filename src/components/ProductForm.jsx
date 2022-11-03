import React, { useContext } from 'react';
import { MenuContext, categories } from '../App';

const ProductForm = ({ selectedProduct }) => {
  const { handleProductDataChange } = useContext(MenuContext);

  const handleInputChange = (e) => {
    // setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    handleProductDataChange(selectedProduct.id, {
      ...selectedProduct,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className='w-2/3'>
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
        />
      </div>
      <div className='form-control w-full'>
        <label className='label'>
          <span className='label-text'>Category</span>
        </label>
        <select
          name='category'
          value={selectedProduct.category}
          onChange={(e) => {
            handleProductDataChange(selectedProduct.id, {
              ...selectedProduct,
              [e.target.name]: parseInt(e.target.value),
            });
          }}
          className='select select-bordered select-sm w-full'
        >
          <option disabled>Select category</option>
          {categories.map((category) => (
            <option
              value={category.id}
              selected={category.id === selectedProduct.category}
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
