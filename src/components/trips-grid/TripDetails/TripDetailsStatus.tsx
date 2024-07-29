'use client'

import { Check, CheckSuccess } from "@/components/ui/Icons";
import { Typography } from "@/components/ui/Typography";
import { editTrip } from "@/lib/services/api/trips";
import { tripToTripInput } from "@/lib/services/mappers/trips.mapper";
import { TripInput } from "@/lib/services/mappers/types";
import { Status } from "@/lib/services/providers/types";
import theme from "@/lib/theme/theme";
import { FC, useContext } from "react";
import { GridContext } from "../Grid";
import TripContext from "../Trip/TripContext";
import { mapStatusToAction } from "./trip-details.utils";
import { DetailsStatusRoot } from "./TripDetailsStyles";

const getOppositeStatus = (currentStatus: Status): Status => {
    switch (currentStatus) {
        case Status.TODO:
            return Status.DONE;
        case Status.DONE:
            return Status.TODO;
        default:
            return currentStatus;
    }
};

const TripDetailsStatus: FC = () => {
    const { trip } = useContext(TripContext);
    const { setTrips } = useContext(GridContext);
    const { status } = trip;

    const handleComplete = async () => {
        const newStatus = getOppositeStatus(status);

        const input: TripInput = {
            ...tripToTripInput(trip),
            status: newStatus,
        };

        const response = await editTrip(input);

        if (response) {
            setTrips((prevTrips) => {
                return prevTrips.map((trips) =>
                    trips.id === response.id ? { ...trips, ...response } : trips
                );
            });
        }
    };


    return (
        <DetailsStatusRoot
            className={status === Status.DONE ? 'complete' : 'uncomplete'}
            onClick={handleComplete}
        >
            <Check />
            <CheckSuccess />
            <Typography
                variant="body"
                sx={{
                    color: theme.colors.primary.light,
                }}
            >
                {mapStatusToAction(status)}
            </Typography>
        </DetailsStatusRoot>
    );
}

export default TripDetailsStatus;
