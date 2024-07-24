'use client'

import { Card } from "@/components/ui/Card";
import { FC, useContext } from "react";
import TripActions from "./TripActions";
import TripContext from "./TripContext";
import TripModal from "./TripModal";

type TripProps = {
    truncate?: boolean
}

const Trip: FC<TripProps> = ({ truncate = true }) => {
    const { state, trip } = useContext(TripContext)
    const { isOpen } = state
    const { title, desc, image } = trip

    return (
        <>
            <Card title={title} desc={desc} image={image} alt={title} truncate={truncate}>
                <TripActions link={"/"} />
            </Card >
            <TripModal isOpen={isOpen} />
        </>
    )
}

export default Trip;