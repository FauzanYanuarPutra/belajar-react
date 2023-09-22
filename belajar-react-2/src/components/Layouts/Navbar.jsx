import { useTotalPrice } from "../../context/TotalPrice";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button/Index";

const Navbar = () => {
  const user = useLogin();
  const { total } = useTotalPrice();
  const Logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div className='flex gap-4 items-center justify-end px-10 h-16 bg-blue-500 text-white'>
      {user.user}
      
      <Button onClick={Logout}>Logout</Button>

      {total}

      
    </div>
  )
}

export default Navbar