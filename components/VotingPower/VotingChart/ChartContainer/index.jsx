import { useContext } from "react";
import { Cell, Legend, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, ResponsiveContainer, Tooltip } from "recharts";
import { AppContext } from "../../../../utils/context";
import { CustomTooltip } from "../../../CustomTooltip";
import { ChartContainer } from "./styled";

export default function () {
    const { voting } = useContext(AppContext)

    const percentTransformer = (label) => {
        const s = voting.reduce((a, b) => a + b.value, 0)
        return `${Number.parseFloat((label / s * 100).toFixed(1)) || ''}%`
    }

    return (
        <ChartContainer>
            <ResponsiveContainer width={'100%'} height={500}>
                <PieChart width="100%" height="100%" >
                    <Legend verticalAlign="top" height={36} />
                    <Pie data={voting} legendType='circle' nameKey='title' dataKey="value" label={label => percentTransformer(label.value)}>
                        {
                            voting.map(vote => <Cell key={vote.title} fill={vote.color} />)
                        }
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                </PieChart>
            </ResponsiveContainer>
        </ChartContainer>
    )
}