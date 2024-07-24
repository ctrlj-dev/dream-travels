import { Typography } from "@/components/ui/Typography";
import theme from "@/lib/theme/theme";
import { FC, useContext } from "react";
import { TripContext } from "../Trip";
import { DetailsItineraryContainer, DetailsItineraryRow } from "./TripDetailsStyles";

const TripDetailsItinerary: FC = () => {
    const { trip } = useContext(TripContext)
    const { itinerary } = trip
    const hasItineray = itinerary && itinerary?.length > 0

    return (
        <>
            <Typography variant={"h2"} componentVariant="h3" sx={{ paddingBottom: '24px' }}>Itinerary</Typography>
            <DetailsItineraryContainer>
                {hasItineray ? (
                    <>
                        {itinerary.map(schedule => (
                            <DetailsItineraryRow key={`${schedule.id}-${trip.title}`}>
                                <Typography className="schedule-title" variant="body" componentVariant="p">Day {schedule.day}: {schedule.location}</Typography>
                                <Typography className="schedule-description" variant="body" componentVariant="p">{schedule.desc}</Typography>
                            </DetailsItineraryRow>
                        ))}
                    </>
                ) : (
                    <Typography variant="body" componentVariant="p" sx={{ color: theme.colors.primary.light, paddingBottom: '54px' }}>No itinerary available.</Typography>
                )
                }
            </DetailsItineraryContainer >
        </>
    )
}

export default TripDetailsItinerary