import { Typography } from "../../Typography";
import ChartContainer from "./ChartContainer";
import { Container, VotingChart } from "./styled";

export default function () {
    return (
        <VotingChart>
            <Container>
                <Typography variant="h1">
                    Voting Power
                </Typography>
                <ChartContainer/>
            </Container>
        </VotingChart>
    )
}