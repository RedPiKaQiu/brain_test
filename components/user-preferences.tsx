import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function UserPreferences() {
  return (
    <Card className="w-full bg-white shadow-md">
      <CardHeader className="bg-blue-50">
        <CardTitle className="text-lg font-semibold text-blue-800">偏好设置</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-6">
        <div className="flex items-center justify-between">
          <Label htmlFor="darkMode" className="text-gray-700">深色模式</Label>
          <Switch id="darkMode" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="notifications" className="text-gray-700">推送通知</Label>
          <Switch id="notifications" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="dataSharing" className="text-gray-700">数据共享</Label>
          <Switch id="dataSharing" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="weeklyReport" className="text-gray-700">周报告</Label>
          <Switch id="weeklyReport" />
        </div>
      </CardContent>
    </Card>
  )
}

