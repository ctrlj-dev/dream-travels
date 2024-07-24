import { Hero } from "@/components/ui/Hero"
import { getTrips } from "@/lib/services/api/trips"
import { FC, Suspense } from "react"
import { TripsFilters } from "../TripsFilters"
import GridContent from "./GridContent"
import { GridWrapper } from "./GridContext"

const Grid: FC = async () => {
    const data = await getTrips();
    return (
        <GridWrapper data={data}>
            <Hero title={"The places you dream of"} desc={"Let’s live new adventures"} />
            <TripsFilters />
            <Suspense fallback='...loading'>
                <GridContent />
            </Suspense>
        </GridWrapper >
    )
}

export default Grid