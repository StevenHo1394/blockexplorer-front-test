import { useContext } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { AppContext } from "../../../../../utils/context";
import { CustomTooltip } from "../../../../CustomTooltip";
import { ChartContainer } from "../../styled";

export default function ChartContainerComponent () {
    const { priceChartValues } = useContext(AppContext)

    const dateFormatter = (dateNum) => {
        if(priceChartValues[0]?.time == dateNum) {
          return ''
        }
        const date = new Date(dateNum)
        return date.toLocaleString('en-US', { hour: 'numeric', hour12: true }).substr(0, 10);
    }

    return (
        <ChartContainer>
            <ResponsiveContainer width="100%" height={300}>
                {
                    priceChartValues ?
                        <AreaChart data={priceChartValues}>
                        <defs>
                            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1" >
                            <stop offset="12%" stopColor="#6748F6" stopOpacity={0.9} ></stop>
                            <stop offset="100%" stopColor="#A150DD" stopOpacity={0.1} ></stop>
                            </linearGradient>
                        </defs>
        
                            <Area type="monotone" dataKey="value" stroke="#E93AF7" fill="url(#color)" />
                            <XAxis 
                            dataKey="time" 
                            tickFormatter={date => dateFormatter(date)}
                            interval={6}
                            axisLine={false}
                            tickLine={false}
                            tickMargin={15}
                            tick={{fill: '#98A1B2'}}
                            />
                            <YAxis 
                            dataKey="value" 
                            tickLine={false}
                            tickFormatter={val => `$${val}`}
                            tickCount={6}
                            axisLine={false}
                            tick={{fill: '#98A1B2'}}
                            tickMargin={15}
                            domain={[() => {
                                return Math.min(...(priceChartValues.map(el => Number.parseInt(el.value))))
                            }, () => {
                                return Math.max(...(priceChartValues.map(el => Number.parseInt(el.value))))
                            }]}
                            />
                            <Tooltip content={<CustomTooltip/>} />
                            <CartesianGrid opacity={0.3} vertical={false} />
                        </AreaChart>
                : null
                }
            </ResponsiveContainer>
        </ChartContainer>
    )
}