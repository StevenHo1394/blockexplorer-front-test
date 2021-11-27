import { Typo } from "core";
import { Container, sSubtitle } from "../styled";
import ChartContainerComponent from "./ChartContainer";
import { PriceChart } from "./styled";

export default function PriceChartComponent() {
    return (
        <PriceChart>
            <Container>
                <Typo variant="chart-title">
                    Price
                </Typo>
                <Typo variant="chart-subtitle" className={sSubtitle} >
                    The price of Bitcoin over the last day
                </Typo>
                <ChartContainerComponent />
            </Container>
        </PriceChart>
    )
}