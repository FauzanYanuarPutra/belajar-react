export default function PlaceContentCenter({children}) {
  return (
    <div className={'bg-slate-100 antialiased flex items-center justify-center min-h-screen '}>
      <div className='max-w-md w-full'>
        {children}
      </div>
    </div>
  )
}