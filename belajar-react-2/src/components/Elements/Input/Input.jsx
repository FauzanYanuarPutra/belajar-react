import { forwardRef, useEffect, useRef } from 'react';

const Input = forwardRef((props, ref) => {
  const { type, label, placeholder, ...rest } = props;

  return (
    <input {...{ type }} {...rest} ref={ref} id={label} name={label} placeholder={placeholder} className='w-full border border-gray-300 rounded-md' />
  );
});

export default Input;
