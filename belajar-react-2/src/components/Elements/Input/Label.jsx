const Label = (props) => {
  const { label, name, className, ...rest } = props;
  return (
    <label htmlFor={label} className={`block ${className}`}>
      {name}
    </label>
  );
};

export default Label;
