import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

const data = [
  { day: "Day 1", current: 80, previous: 70 },
  { day: "Day 2", current: 75, previous: 68 },
  { day: "Day 3", current: 70, previous: 65 },
  { day: "Day 4", current: 65, previous: 60 },
  { day: "Day 5", current: 60, previous: 55 },
  { day: "Day 6", current: 55, previous: 50 },
]

export function EnergyComparison() {
  return (
    <Card className="w-full bg-white shadow-md">
      <CardHeader className="bg-blue-50">
        <CardTitle className="text-lg font-semibold text-center text-blue-800">经期能量对比</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="day" stroke="#4B5563" />
              <YAxis stroke="#4B5563" />
              <Tooltip />
              <Legend />
              <Bar dataKey="current" name="最近6天" fill="#3B82F6" />
              <Bar dataKey="previous" name="过去6天" fill="#93C5FD" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

