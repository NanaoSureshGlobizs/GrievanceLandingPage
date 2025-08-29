"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
    { name: "BISHNUPUR", value: 92.63, color: "#2563eb" },
    { name: "CHANDEL", value: 61.62, color: "#2563eb" },
    { name: "CHURACHANDPUR", value: 75.43, color: "#2563eb" },
    { name: "IMPHAL EAST", value: 97.81, color: "#16a34a" },
    { name: "IMPHAL WEST", value: 89.63, color: "#2563eb" },
    { name: "JIRIBAM", value: 73.46, color: "#2563eb" },
    { name: "KAKCHING", value: 40.69, color: "#ef4444" },
    { name: "KANGPOKPI", value: 55.63, color: "#ef4444" },
    { name: "NONEY", value: 45.63, color: "#ef4444" },
    { name: "PHERZAWL", value: 39.13, color: "#ef4444" },
    { name: "SENAPATI", value: 53.73, color: "#ef4444" },
    { name: "TAMENGLONG", value: 42.53, color: "#ef4444" },
    { name: "TENGNOUPAL", value: 22.63, color: "#ef4444" },
    { name: "THOUBAL", value: 54.33, color: "#ef4444" },
    { name: "UKHRUL", value: 47.71, color: "#ef4444" },
]

const CustomYAxisTick = (props: any) => {
    const { x, y, payload } = props;
    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={5} textAnchor="end" fill="#fff" fontSize={12}>
                {payload.value}
            </text>
        </g>
    );
};

const CustomXAxisTick = (props: any) => {
    const { x, y, payload, data } = props;
    const item = data.find((d: any) => d.name === payload.value);
    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={16} textAnchor="end" fill="#fff" fontSize={12} transform="rotate(-35)">
                {`${item.value}%`}
            </text>
        </g>
    );
};

export function GrievanceChart() {
    return (
        <ResponsiveContainer width="100%" height={500}>
            <BarChart data={data} layout="vertical" margin={{ left: 10, right: 30, top: 20, bottom: 20 }}>
                <XAxis type="number" hide />
                <YAxis
                    dataKey="name"
                    type="category"
                    axisLine={false}
                    tickLine={false}
                    tick={<CustomYAxisTick />}
                    width={100}
                />
                <Bar dataKey="value" barSize={15} radius={[0, 10, 10, 0]}>
                    {data.map((entry, index) => (
                        <rect key={`cell-${index}`} x={0} y={0} width={entry.value} height={15} fill={entry.color} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    )
}
