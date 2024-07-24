'use client'

import { Check, CheckSuccess } from "@/components/ui/Icons"
import { Typography } from "@/components/ui/Typography"
import theme from "@/lib/theme/theme"
import { FC, useCallback, useContext, useEffect, useState } from "react"
import TripContext from "../Trip/TripContext"
import { DetailsStatusRoot } from "./TripDetailsStyles"
import { Status } from "@/lib/services/providers/types"
import { mapStatusToAction } from "./trip-details.utils"
import { editTrip } from "@/lib/services/api/trips"

const TripDetailsStatus: FC = () => {
    const { trip } = useContext(TripContext)
    const { status } = trip
    const [status_, setStatus] = useState(status);
    const complete = status_.toUpperCase() === Status.DONE;

    const handleComplete = useCallback(async () => {
        if (complete) {
            const response = await editTrip({ status: 'todo' });
            if (response) {
                setStatus(response.status);
            }
        } else {
            const response = await editTrip({ status: 'done' });
            if (response) {
                setStatus(response.status);
            }
        }
    }, [complete]);





    return (
        <DetailsStatusRoot
            className={complete ? 'complete' : 'uncomplete'}
            onClick={() => handleComplete()}
        >
            <Check />
            <CheckSuccess />
            <Typography
                variant="body"
                sx={{
                    color: theme.colors.primary.light
                }}>
                {mapStatusToAction(status_)}
            </Typography >
        </DetailsStatusRoot >

    )

}

export default TripDetailsStatus