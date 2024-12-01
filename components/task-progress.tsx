import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function TaskProgress() {
  const tasks = [
    { name: "学习英语", progress: 75, color: "from-blue-400 to-blue-600" },
    { name: "健身锻炼", progress: 50, color: "from-blue-300 to-blue-500" },
    { name: "阅读书籍", progress: 90, color: "from-blue-500 to-blue-700" },
    { name: "冥想放松", progress: 60, color: "from-blue-200 to-blue-400" },
  ]

  return (
    <Card className="w-full bg-white shadow-md">
      <CardHeader className="bg-blue-50">
        <CardTitle className="text-lg font-semibold text-center text-blue-800">任务完成情况</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        {tasks.map((task, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-gray-700">{task.name}</span>
              <span className="text-gray-500 font-semibold">{task.progress}%</span>
            </div>
            <Progress
              value={task.progress}
              className="h-3 bg-gray-100 rounded-full"
              indicatorClassName={`bg-gradient-to-r ${task.color}`}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

