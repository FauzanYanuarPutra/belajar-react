import { useRouteError } from 'react-router-dom';
const NotFound = () => {
  const error = useRouteError();
  return (
    <div className='flex w-full h-[100vh] items-center justify-center'>
      {/* <h1 className="text-3xl text-blue-700">404 Not Found</h1> */}
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default NotFound;
