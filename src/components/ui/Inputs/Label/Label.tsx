import { FC, LabelHTMLAttributes, PropsWithChildren } from "react";
import { LabelRoot } from "./Label.styles";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & PropsWithChildren<{
    title: string;
}>

const Label: FC<LabelProps> = ({ title, children }) => {
    return (
        <LabelRoot htmlFor={title}>{children}</LabelRoot>
    )
}

export default Label;