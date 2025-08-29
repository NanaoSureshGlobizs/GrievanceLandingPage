"use client"

import { Progress } from "@/components/ui/progress"

const data = [
    { name: "BISHNUPUR", value: 92.63, color: "#2563eb" },
    { name: "CHANDEL", value: 61.62, color: "#16a34a" },
    { name: "CHURACHANDPUR", value: 75.43, color: "#2563eb" },
    { name: "IMPHAL EAST", value: 97.81, color: "#16a34a" },
    { name: "IMPHAL WEST", value: 89.63, color: "#2563eb" },
    { name: "JIRIBAM", value: 73.40, color: "#2563eb" },
    { name: "KAKCHING", value: 40.69, color: "#2563eb" },
    { name: "KAMJONG", value: 58.63, color: "#16a34a" },
    { name: "KANGPOKPI", value: 55.63, color: "#16a34a" },
    { name: "NONEY", value: 45.63, color: "#16a34a" },
    { name: "PHERZAWL", value: 39.13, color: "#2563eb" },
    { name: "SENAPATI", value: 53.73, color: "#16a34a" },
    { name: "TAMENGLONG", value: 42.53, color: "#2563eb" },
    { name: "TENGNOUPAL", value: 22.63, color: "#2563eb" },
    { name: "THOUBAL", value: 54.33, color: "#2563eb" },
    { name: "UKHRUL", value: 47.71, color: "#16a34a" },
].sort((a, b) => a.name.localeCompare(b.name));

const GrievanceItem = ({ name, value, color }: { name: string, value: number, color: string }) => (
    <div className="flex items-center gap-4">
        <div className="w-32 shrink-0 text-sm font-medium text-gray-400">{name}</div>
        <div className="flex-1">
            <Progress value={value} className="h-2 bg-gray-700" indicatorClassName={color === '#16a34a' ? 'bg-green-500' : 'bg-blue-500'} />
        </div>
        <div className="w-16 text-right text-sm font-semibold">{value.toFixed(2)}%</div>
    </div>
);


export function GrievanceChart() {
    const half = Math.ceil(data.length / 2);
    const firstHalf = data.slice(0, half);
    const secondHalf = data.slice(half);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
            <div className="flex flex-col gap-4">
                {firstHalf.map(item => (
                    <GrievanceItem key={item.name} {...item} />
                ))}
            </div>
            <div className="flex flex-col gap-4">
                {secondHalf.map(item => (
                    <GrievanceItem key={item.name} {...item} />
                ))}
            </div>
        </div>
    )
}