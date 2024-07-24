import { Typography } from "@/components/ui/Typography";
import { FC } from "react";

type TripFormErrorProps = {
    message: string | undefined;
}

const TripFormError: FC<TripFormErrorProps> = ({ message }) => {

    if (!message) {
        return null
    }

    return (
        <Typography className="error" componentVariant="p" variant={"caption"} sx={{ marginTop: '4px' }}>{message}</Typography>
    )
}

export default TripFormError;