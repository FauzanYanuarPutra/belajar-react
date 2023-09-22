import { useEffect, useRef, useState } from 'react';
import Button from '../Elements/Button/Index';
import InputForm from '../Elements/Input/Index';
import { Login } from '../../services/auth.service';

const LoginForm = () => {
  const [errorLogin, setErrorLogin] = useState('');
  const handleLogin = (e) => {
    e.preventDefault();

    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    Login(data, (res, callback) => {
      if (res) {
        localStorage.setItem('token', callback);
        window.location.href = '/products';
      } else {
        setErrorLogin(callback);
      }
    });
  };

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm name={'Username'} label={'username'} type={'text'} placeholder='username' ref={emailRef} />
      <InputForm name={'Password'} label={'password'} type={'password'} placeholder='*****' />
      <Button className={'bg-blue-600 w-full mt-2'} type={'submit'}>
        Login
      </Button>
      {errorLogin && <p className='text-red-600'>{errorLogin}</p>}
    </form>
  );
};

export default LoginForm;
