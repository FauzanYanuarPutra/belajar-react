import { useEffect, useRef, useState } from 'react';
import Button from '../components/Elements/Button/Index';
import CardProduct from '../components/Fragments/CardProduct';
import { getProducts } from '../services/product.service';
import { useLogin } from '../hooks/useLogin';
import { useTotalPrice, useTotalPriceDispatch, } from '../context/TotalPrice';
import Navbar from '../components/Layouts/Navbar';

const Product = () => {
  const [cart, setCart] = useState([]);
  const [product, setProducts] = useState([]);
  const dispatch = useTotalPriceDispatch()
  const {total} = useTotalPrice()


  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || []);
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    if (product.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const Product = product.find((product) => product.id === item.id);
        return acc + Product.price * item.qty;
      }, 0);
      dispatch({
        type: "UPDATE",
        payload: {
          total: sum
        }
      });
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart, product]);



  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart((cart) => [...cart, { id, qty: 1 }]);
    }
  };

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (product.length > 0 && cart.length > 0) {
      totalPriceRef.current.style.display = 'table-row';
    } else {
      totalPriceRef.current.style.display = 'none';
    }
  }, [cart, product]);

  return (
    <>
      <Navbar></Navbar>

      <div className='flex  gap-4 justify-center mt-10'>
        <div className='w-4/6  flex flex-wrap justify-center gap-10'>
          {product.length > 0 &&
            product.map((data, index) => (
              <CardProduct key={index} id={data.id}>
                <CardProduct.Header image={data.image} />
                <CardProduct.Body title={data.title}>{data.description}</CardProduct.Body>
                <CardProduct.Footer price={data.price} id={data.id} handleAddToCart={handleAddToCart}></CardProduct.Footer>
              </CardProduct>
            ))}
        </div>
        <div className='w-2/6'>
          <h1 className='font-bold text-xl mb-3 text-blue-700'>Cart</h1>
          <table className='w-full text-left text-sm'>
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>price</th>
                <th>qty</th>
                <th>total</th>
              </tr>
            </thead>
            <tbody>
              {product.length > 0 &&
                cart.map((cart, index) => {
                  const Product = product.find((item) => item.id === cart.id);
                  return (
                    <tr key={cart.id}>
                      <td>{cart.id}</td>
                      <td>{Product.title}</td>
                      <td>{Product.price.toLocaleString('id-ID', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol' })}</td>

                      <td>{cart.qty}</td>
                      <td>
                        {(cart.qty * Product.price).toLocaleString('id-ID', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol' })}
                      </td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef}>
                <td colSpan='4'>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>{total.toLocaleString('id-ID', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol' })}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="my-10 flex justify-center ">
        <Counter ></Counter>
      </div> */}
    </>
  );
};

export default Product;
