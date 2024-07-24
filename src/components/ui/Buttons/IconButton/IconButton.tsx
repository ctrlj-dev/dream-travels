'use client'

import { FC } from "react";
import { IconButtonRoot } from "./IconButton.styles";

type IconButtonProps = {
    icon: React.ReactNode
    onClick: () => void;
}
const IconButton: FC<IconButtonProps> = ({ icon, onClick }) => {
    return (
        <IconButtonRoot type='button' onClick={onClick}>{icon}</IconButtonRoot>
    )
}

export default IconButton; 