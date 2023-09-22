import { forwardRef } from 'react';
import Input from './Input';
import Label from './Label';

const InputForm = forwardRef((props, ref) => {
  const { type, label, name, placeholder, onFocus, ...rest } = props;
  return (
    <div className='my-4'>
      <Label {...{ label }} {...{ name }} className={'mb-2'} />
      <Input {...{ type, label, ref }} placeholder={placeholder} />
    </div>
  );
});

export default InputForm;
