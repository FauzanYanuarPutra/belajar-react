import { Link } from 'react-router-dom';
import RegisterForm from '../components/Fragments/RegisterForm';
import AuthLayout from '../components/Layouts/AuthLayout';

const RegisterPage = () => {
  return (
    <AuthLayout title={'register'} type={'register'} to={'login'}>
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
