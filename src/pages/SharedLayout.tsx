import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar';
const SharedLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
};
export default SharedLayout;
