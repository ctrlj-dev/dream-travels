'use client'

import { FC, useContext } from "react";
import { Trip } from "../Trip";
import { TripWrapper } from "../Trip/TripContext";
import { GridContext } from './GridContext';
import GridNotFound from "./GridNotFound";
import GridRow from "./GridRow";

const GridContent: FC = () => {
    const { trips } = useContext(GridContext)

    if (trips.length === 0) {
        return (
            <GridNotFound />
        )
    }

    return (
        <div>
            {trips.map(trip => (
                <GridRow key={`${trip.id}-{${trip.title}}`}>
                    <TripWrapper trip={trip}>
                        <Trip truncate />
                    </TripWrapper>
                </GridRow>
            ))
            }
        </div >
    )
}

export default GridContent