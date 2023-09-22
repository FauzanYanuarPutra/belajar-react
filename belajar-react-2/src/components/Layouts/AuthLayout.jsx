import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { DarkMode } from '../../context/DarkMode';

const AuthLayout = (props) => {
  const { children, title, type, to } = props;
  const { darkMode, setDarkMode } = useContext(DarkMode);

  return (
    <div className={`flex gap-3 w-full h-[100vh] items-center justify-center  ${darkMode ? 'bg-slate-700' : 'bg-white'} `}>
      <div className='w-[400px]'>
      <button className='absolute top-5 right-5' onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'Light' : 'Dark'}</button>

        <div className='mb-6'>
          <h1 className='text-3xl font-bold text-blue-600'>{title}</h1>
          <p className='text-md mt-1 text-slate-600'>Welcome, Please enter your details</p>
        </div>
        {children}
        <div className='mt-5 text-sm'>
          {type === 'login' ? "Don't have an account?" : 'Already have an account?'}{' '}
          <Link to={'/' + to} className='font-bold text-blue-700  capitalize'>
            {to}
            {/* {to.charAt(0).toUpperCase() + to.slice(1)} */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
