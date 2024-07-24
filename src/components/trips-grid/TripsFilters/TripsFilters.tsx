import { FC } from "react"
import { TripsFiltersRow } from "./TripsFiltersStyles"
import TripsFiltersFinder from "./TripsFiltersFinder"
import TripsFiltersTabs from "./TripsFiltersTabs"

const TripsFilters: FC = () => {
    return (
        <TripsFiltersRow>
            <TripsFiltersFinder />
            <TripsFiltersTabs />
        </TripsFiltersRow >
    )
}

export default TripsFilters;