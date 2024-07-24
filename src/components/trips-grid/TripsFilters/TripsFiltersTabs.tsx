'use client';

import { Tab, TabsGroup } from "@/components/ui/Tab";
import { Status } from "@/lib/services/providers/types";
import { FC, useContext, useState } from "react";
import { GridContext } from "../Grid/GridContext";

const TripsFiltersTab: FC = () => {
    const { setFilters, filters } = useContext(GridContext);
    const [value, setValue] = useState<Status>();

    const handleTab = (status: Status | undefined) => {
        setValue(status);
        setFilters({ ...filters, status });
    };

    return (
        <TabsGroup>
            <Tab onClick={() => handleTab(undefined)} active={!value}>All</Tab>
            <Tab onClick={() => handleTab(Status.TODO)} active={value === Status.TODO}>Upcoming</Tab>
            <Tab onClick={() => handleTab(Status.DONE)} active={value === Status.DONE}>Completed</Tab>
        </TabsGroup>
    );
};

export default TripsFiltersTab;
