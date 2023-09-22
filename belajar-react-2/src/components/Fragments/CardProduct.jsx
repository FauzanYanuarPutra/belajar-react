import { Link } from 'react-router-dom';
import Button from '../Elements/Button/Index';

const CardProduct = (props) => {
  const { children, id } = props;

  return (
    <Link to={`/product/${id}`} className='max-w-md w-[400px] bg-gray-200 flex flex-col justify-between cursor-pointer'>
      {children}
    </Link>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <div className='w-full h-[125px] '>
      <img src={`${image}`} alt='' className='w-full h-full object-cover' />
    </div>
  );
};

const Body = (props) => {
  const { title, children } = props;
  return (
    <div className='my-2 mx-4 mt-4  h-full'>
      <h1 className='font-bold text-lg'>{title}</h1>
      <p className='text-sm'>{children}</p>
    </div>
  );
};

const Footer = (props) => {
  const { price, id, handleAddToCart, key } = props;

  return (
    <div className='mx-4 mb-4 flex justify-between items-center'>
      <div>
        {price.toLocaleString('id-ID', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol' })}
        {/* {price.toLocaleString("id-ID", { style: "currency", currency: "USD"})} */}
      </div>
      <div>
        <Button
          text={'Add to Cart'}
          className={'bg-blue-600'}
          onClick={(e) => {
            e.preventDefault();
            handleAddToCart(id);
          }}
        />
      </div>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
