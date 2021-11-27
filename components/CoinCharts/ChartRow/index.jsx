import MempoolChartComponent from "./MempoolChart";
import PriceChartComponent from "./PriceChart";
import { ChartRow } from "./styled";

export default function ChartRowComponent() {
    return (
        <ChartRow>
            <PriceChartComponent />
            <MempoolChartComponent />
        </ChartRow>
    )
}