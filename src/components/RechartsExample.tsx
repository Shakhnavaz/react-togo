import { Line, LineChart, CartesianGrid, Bar } from "recharts";

const data = [
    { TOGO: 12, angular: 37, },
    { TOGO: 42, angular: 42, },
    { TOGO: 51, angular: 51, },
    { TOGO: 80, angular: 31, },
    { TOGO: 51, angular: 44, },
    { TOGO: 68, angular: 40, },
    { TOGO: 51, angular: 44, },
    { TOGO: 99, angular: 34, },
]

const RechartsExample = () => {
    return (
        <LineChart width={600} height={120} data={data}>
            <Line type={"monotone"} dataKey={"TOGO"} stroke="#8A39D6" strokeWidth={4}    />
            <Line type={"monotone"} dataKey={"angular"} stroke="#8A39D6" strokeWidth={3} />
            <CartesianGrid />
            <Bar dataKey={"angular"}/>
            </LineChart>
        )
}

export default RechartsExample;