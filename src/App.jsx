function App() {
  return (
    <main className='bg-gray-100 h-screen'>
      <div className='container flex bg-white mx-auto'>
        {/* add form */}
        <div className='w-1/2 p-4'>
          <form>
            <div className='form-control w-full max-w-xs'>
              <label className='label'>
                <span className='label-text'>Product name</span>
              </label>
              <input
                type='text'
                placeholder='Type here'
                className='input input-bordered input-sm w-full max-w-xs'
              />
            </div>
            <div className='form-control w-full max-w-xs'>
              <label className='label'>
                <span className='label-text'>Price</span>
              </label>
              <input
                type='text'
                placeholder='Type here'
                className='input input-bordered input-sm w-full max-w-xs'
              />
            </div>
            <div className='form-control w-full max-w-xs'>
              <label className='label'>
                <span className='label-text'>Category</span>
              </label>
              <select className='select select-bordered select-sm w-full max-w-xs'>
                <option disabled selected>
                  Select category
                </option>
                <option>Drinks</option>
                <option>Cake</option>
                <option>Pizza</option>
              </select>
            </div>
            <button className='btn btn-sm btn-primary mt-4'>Save</button>
          </form>
        </div>
        {/* preview UI */}
        <div className='w-1/2 p-4 preview'>preview</div>
      </div>
    </main>
  );
}

export default App;
