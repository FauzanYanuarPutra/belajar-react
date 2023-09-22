import Button from '../Elements/Button/Index';
import InputForm from '../Elements/Input/Index';

const RegisterForm = () => {
  return (
    <form>
      <InputForm name={'First Name'} label={'firstname'} type={'text'} placeholder='input your firstname' onFocus={true} />
      <InputForm name={'Email'} label={'email'} type={'email'} placeholder='email' />
      <InputForm name={'Password'} label={'password'} type={'password'} placeholder='*****' />
      <InputForm name={'Confirm Password'} label={'confirm-password'} type={'password'} placeholder='*****' />
      <Button className={'bg-blue-600 w-full mt-2'}>Register</Button>
    </form>
  );
};

export default RegisterForm;
