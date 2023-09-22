import clsx from "clsx";
export default function Button(props) {
  const { className = 'bg-black', text, children, type = 'button' } = props;

  return (
    <button
      {...props}
      {...{type}}
      className={clsx(className, '[&>svg]:w-5 whitespace-nowrap  [&>svg]:h-5 [&>svg]:stroke-1 rounded-md px-4 py-2 text-white flex items-center gap-2')}>
      {text || children}
    </button>
  );
}
