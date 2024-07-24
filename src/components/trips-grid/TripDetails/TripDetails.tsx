import { Typography } from "@/components/ui/Typography";
import { FC, useContext } from "react";
import { TripContext, TripStatus } from "../Trip";
import TripDetailsImage from "./TripDetailsImage";
import { DetailsInfo, DetailsRoot } from "./TripDetailsStyles";
import TripDetailsItinerary from "./TripDetailsItinerary";

const TripDetails: FC = () => {
    const { trip } = useContext(TripContext)
    const { title, desc } = trip
    return (
        <>
            <TripDetailsImage />
            <DetailsRoot>
                <DetailsInfo>
                    <Typography variant="h1" componentVariant="h2">{title}</Typography>
                    <TripStatus />
                    <Typography variant={"body"}>{desc}</Typography>
                </DetailsInfo>
                <TripDetailsItinerary />
            </DetailsRoot>
        </>
    )
}

export default TripDetails