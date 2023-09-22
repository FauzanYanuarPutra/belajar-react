import { useEffect, useState } from 'react';
import { getUser } from '../services/auth.service';

export const useLogin = () => {
  const [user, setUser] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser(getUser(token));
    } else {
      window.location.href = '/login';
    }
  }, []);

  return user;
};
