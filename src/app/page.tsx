import { TripsGridView } from "@/components/trips-grid";
import { Container } from "@/components/ui/Layout";

export default async function Home() {
    return (
        <Container $direction="column">
            <TripsGridView />
        </Container >
    );
}
