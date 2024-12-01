import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TaskPrinciples() {
  const principles = [
    "优先处理重要且紧急的任务",
    "将大任务分解成小步骤",
    "设定明确的截止日期",
    "保持工作与生活的平衡",
    "定期回顾和调整任务计划"
  ]

  return (
    <Card className="w-full bg-white shadow-md">
      <CardHeader className="bg-blue-50">
        <CardTitle className="text-lg font-semibold text-blue-800">任务规划原则</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <ul className="list-disc list-inside space-y-2">
          {principles.map((principle, index) => (
            <li key={index} className="text-sm text-gray-700">{principle}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

