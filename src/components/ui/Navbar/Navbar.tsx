import { FC } from 'react';
import { NavbarRoot } from './Navbar.styles';
import NavbarBrand from './NavbarBrand';
import NavbarNav from './NavbarNav';

const Navbar: FC = () => {
  return (
    <NavbarRoot>
      <NavbarBrand />
      <NavbarNav />
    </NavbarRoot>
  );
};

export default Navbar;
