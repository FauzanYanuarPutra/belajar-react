import { Link } from 'react-router-dom';
import LoginForm from '../components/Fragments/LoginForm';
import AuthLayout from '../components/Layouts/AuthLayout';

const LoginPage = () => {
  return (
    <AuthLayout title={'Login'} type={'login'} to={'register'}>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
