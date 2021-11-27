import { Container, sSubtitle } from "../styled";
import { MempoolChart } from "./styled";
import ChartContainerComponent from "./ChartContainer";
import { Typo } from "core";

export default function MempoolChartComponent() {
    return (
        <MempoolChart>
            <Container>
                <Typo variant="chart-title">
                    Circulating Supply
                </Typo>
                <Typo variant="chart-subtitle" className={sSubtitle}>
                    The aggregate size of unconfirmed transactions in bytes
                </Typo>
                <ChartContainerComponent />
            </Container>
        </MempoolChart>
    )
}