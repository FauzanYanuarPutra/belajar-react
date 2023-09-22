import { useLogin } from '../hooks/useLogin';
const Profile = () => {
  const user = useLogin();

  // console.log(user)

  return (
    <>
      <div>Profile</div>
      <h1>{user.user}</h1>
    </>
  );
};

export default Profile;
