'use client'

import { LinkButton } from "@/components/ui/Buttons/LinkButton";
import { Container } from "@/components/ui/Layout";
import { Typography } from "@/components/ui/Typography";
import theme from "@/lib/theme/theme";
import { FC, useContext } from "react";
import GridContext, { DefaultValues } from "./GridContext";

const GridNotFound: FC = () => {
    const { setFilters } = useContext(GridContext)

    const handleSearch = () => {
        setFilters(DefaultValues)
    }

    return (
        <Container $direction="column" $sx={{ margin: '30px auto' }}>
            <Typography variant={"body"}
                sx={{
                    margin: '8px auto',
                    color: theme.colors.secondary.dark
                }
                }> Theres no available trips</Typography >
            <LinkButton onClick={handleSearch} variant={"outlined"}>Start again</LinkButton>
        </Container >
    )
}

export default GridNotFound