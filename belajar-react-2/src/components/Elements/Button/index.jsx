const Button = ({ ...props }) => {
  const { children = '...', type = 'button', className = 'bg-black' } = props;
  return (
    <button {...props} className={`${className} text-white px-6 py-2 rounded-md`} {...{ type }}>
      {props.text || children}
    </button>
  );
};

export default Button;
