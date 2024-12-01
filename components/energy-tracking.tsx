import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

const focusData = [
  { name: "高度专注", value: 4, color: "#2B4C7E" },
  { name: "中度专注", value: 3, color: "#567EAE" },
  { name: "低度专注", value: 2, color: "#8EB1DE" },
]

const sleepData = [
  { name: "深度睡眠", value: 3, color: "#1D3461" },
  { name: "浅度睡眠", value: 4, color: "#1F487E" },
  { name: "快速眼动", value: 1, color: "#376996" },
]

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill="#fff" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

export function EnergyTracking() {
  return (
    <Card className="w-full bg-white shadow-md">
      <CardHeader className="bg-blue-50">
        <CardTitle className="text-lg font-semibold text-center text-blue-800">能量追踪</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 p-6">
        <div className="w-full md:w-1/2 h-64">
          <h3 className="text-lg font-semibold text-center mb-2 text-gray-700">专注力分布</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={focusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {focusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="w-full md:w-1/2 h-64">
          <h3 className="text-lg font-semibold text-center mb-2 text-gray-700">睡眠质量分布</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={sleepData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {sleepData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

