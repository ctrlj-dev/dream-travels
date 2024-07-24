import { FC } from "react"
import { Typography } from "../Typography";

type HeroProps = {
    title: string;
    desc: string;
}

const Hero: FC<HeroProps> = ({ title, desc }) => {
    return (
        <>
            <Typography componentVariant="h1" variant={"h1"} sx={{ textAlign: 'center', marginTop: '64px' }}>
                {title}
            </Typography>
            <Typography componentVariant="h3" variant={"h3"} sx={{ textAlign: 'center', marginTop: '8px' }}>
                {desc}
            </Typography>
        </>
    )
}

export default Hero;