'use client';

import { SearchBar } from "@/components/ui/Inputs/SearchBar";
import { FC, useContext, useState } from "react";
import { GridContext } from '../Grid/GridContext';

const TripsFiltersFinder: FC = () => {
    const { filters, setFilters } = useContext(GridContext);
    const [value, setValue] = useState<string>('');

    const handleChange = (value: string) => {
        setValue(value)
    }

    const onSubmit = () => {
        setFilters({ ...filters, search: value });
    };

    return (
        <SearchBar
            rootClassName="trips-finder"
            onChange={(e) => handleChange(e.target.value)}
            onSubmit={onSubmit}
        />
    );
};

export default TripsFiltersFinder;
