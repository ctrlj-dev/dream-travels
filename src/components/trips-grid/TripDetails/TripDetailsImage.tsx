import { FC, useContext } from "react";
import { DetailsImageRoot } from "./TripDetailsStyles";
import TripContext from "../Trip/TripContext";
import Image from "next/image";
import theme from "@/lib/theme/theme";

const TripDetailsImage: FC = () => {
    const { trip } = useContext(TripContext)
    const { title, image } = trip
    return (
        <DetailsImageRoot>
            <Image
                src={image}
                priority
                sizes='50wv'
                alt={title}
                fill
                style={{
                    objectFit: 'cover',
                    borderTopRightRadius: theme.borders.radius.secondary,
                    borderTopLeftRadius: theme.borders.radius.secondary
                }} />
        </DetailsImageRoot>
    )
}

export default TripDetailsImage