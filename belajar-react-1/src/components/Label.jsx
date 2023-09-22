export default function Input({value, children, ...props}) {
  return (
    <label {...props} className='text-slate-700 mb-2 block'>{ value || children }</label>
  )
}