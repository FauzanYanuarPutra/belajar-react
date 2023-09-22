import { useState } from 'react';

function App() {
  const initialProducts = [
    {
      id: 1,
      name: 'Vintage Backbag',
      price: 54.99,
      discountedPrice: 94.99,
      quantity: 1,
      image: './image/photo1.png',
    },
    {
      id: 2,
      name: 'Vintage Backpack',
      price: 54.99,
      discountedPrice: 94.99,
      quantity: 1,
      image: './image/photo2.png',
    },
  ];

  const [products, setProducts] = useState(initialProducts);

  const changeQuantity = (productId, changeAmount) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? {
              ...product,
              quantity: Math.max(1, product.quantity + changeAmount),
            }
          : product,
      ),
    );
  };

  return (
    <>
      <div className='max-w-[1000px] mx-5  my-10 md:mx-auto'>
        <h1 className='text-3xl font-[600] mb-5 text-[#4E5150]'>Checkout</h1>
        <div className='md:flex  '>
          <div className='md:order-2 w-full p-8 bg-[#F2F2F2] rounded-xl flex flex-col gap-10'>
            {products.map((product) => (
              <div key={product.id} className='grid gap-4 grid-cols-2'>
                <img src={product.image} alt='' className='rounded-xl' />
                <div className=' flex flex-col justify-between'>
                  <div>
                    <h1 className='mb-2'>{product.name}</h1>
                    <div className='flex items-center gap-3'>
                      <p className='text-md text-[orange]'>${product.price}</p>
                      <p className='line-through text-sm'>
                        ${product.discountedPrice}
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center justify-between w-full border-[1px] border-gray-400 rounded-lg px-2 py-3'>
                    <button
                      className='text-[25px] bg-gray-300 text-gray-500 w-[30px] h-[30px] flex items-center justify-center rounded-lg cursor-pointer'
                      onClick={() => changeQuantity(product.id, -1)}
                    >
                      -
                    </button>
                    <div className='text-[25px]'>{product.quantity}</div>
                    <button
                      className='text-[25px] bg-gray-300 text-gray-500 w-[30px] h-[30px] flex items-center justify-center rounded-lg cursor-pointer'
                      onClick={() => changeQuantity(product.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div>
              <div className='flex justify-between border-t-[1px] mt-3 border-gray-500 pt-3'>
                <p>Shipping</p>
                <p>$19</p>
              </div>
              <div className='flex justify-between border-t-[1px] mt-3 border-gray-500 pt-3'>
                <p>Total</p>
                <p>$148.98</p>
              </div>
            </div>
          </div>
          <div className='md:order-1 w-full mt-10 md:mt-0'>
            <h1 className='mt-10 mb-1'>Contact information</h1>
            <div>
              <div className='grid grid-cols-1'>
                <label htmlFor='full-name' className='text-sm mb-1 mt-4'>
                  E-mail
                </label>
                <div className='relative'>
                  <span className='absolute inset-y-0 left-0 pl-2 flex items-center'>
                    <img src='./svg/fullname.svg' alt='' width='25px' />
                  </span>
                  <input
                    type='text'
                    className='border-[1.5px] border-gray-500 pl-10 pr-1 py-2 rounded-xl w-full text-md font-[500]'
                    placeholder='Enter your email..'
                  />
                </div>
              </div>
              <div className='grid grid-cols-1'>
                <label htmlFor='full-name' className='text-sm mb-1 mt-4'>
                  Full name
                </label>
                <div className='relative'>
                  <span className='absolute inset-y-0 left-0 pl-2 flex items-center'>
                    <img src='./svg/fullname.svg' alt='' width='25px' />
                  </span>
                  <input
                    type='text'
                    className='border-[1.5px] border-gray-500 pl-10 pr-1 py-2 rounded-xl w-full text-md font-[500]'
                    placeholder='Enter your phone..'
                  />
                </div>
              </div>
            </div>
            <h1 className='mt-10 mb-1'>Shipping address</h1>
            <div>
              <div className='grid grid-cols-1'>
                <label htmlFor='full-name' className='text-sm mb-1 mt-4'>
                  Full name
                </label>
                <div className='relative'>
                  <span className='absolute inset-y-0 left-0 pl-2 flex items-center'>
                    <img src='./svg/fullname.svg' alt='' width='25px' />
                  </span>
                  <input
                    type='text'
                    className='border-[1.5px] border-gray-500 pl-10 pr-1 py-2 rounded-xl w-full text-md font-[500]'
                    placeholder='Your name..'
                  />
                </div>
              </div>
              <div className='grid grid-cols-1'>
                <label htmlFor='full-name' className='text-sm mb-1 mt-4'>
                  Address
                </label>
                <div className='relative'>
                  <span className='absolute inset-y-0 left-0 pl-2 flex items-center'>
                    <img src='./svg/fullname.svg' alt='' width='25px' />
                  </span>
                  <input
                    type='text'
                    className='border-[1.5px] border-gray-500 pl-10 pr-1 py-2 rounded-xl w-full text-md font-[500]'
                    placeholder='Your address..'
                  />
                </div>
              </div>
              <div className='grid grid-cols-1'>
                <label htmlFor='full-name' className='text-sm mb-1 mt-4'>
                  City
                </label>
                <div className='relative'>
                  <span className='absolute inset-y-0 left-0 pl-2 flex items-center'>
                    <img src='./svg/fullname.svg' alt='' width='25px' />
                  </span>
                  <input
                    type='text'
                    className='border-[1.5px] border-gray-500 pl-10 pr-1 py-2 rounded-xl w-full text-md font-[500]'
                    placeholder='Your city..'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
