import Image from 'next/image';
import { FC } from 'react';

const NavbarBrand: FC = () => {
    return <Image alt="dreams travel brand" src="/brand.svg" width={40} height={40} />;
};

export default NavbarBrand;
