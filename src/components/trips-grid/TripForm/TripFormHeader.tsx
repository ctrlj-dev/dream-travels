import { Typography } from "@/components/ui/Typography";
import { FC } from "react";

type TripFormHeaderProps = {
    title: string,
}

const TripFormHeader: FC<TripFormHeaderProps> = ({ title }) => {
    return (
        <Typography variant="h1" componentVariant="h2">{title}</Typography>
    )
}

export default TripFormHeader;