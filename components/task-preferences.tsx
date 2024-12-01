import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export function TaskPreferences() {
  return (
    <Card className="w-full bg-white shadow-md">
      <CardHeader className="bg-blue-50">
        <CardTitle className="text-lg font-semibold text-blue-800">任务安排偏好</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        <div className="flex items-center justify-between">
          <Label htmlFor="timelineView" className="text-gray-700">以时间线为主要视图</Label>
          <Switch id="timelineView" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="morningActivity" className="text-gray-700">早晨首选活动</Label>
          <Select>
            <SelectTrigger id="morningActivity">
              <SelectValue placeholder="选择活动" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="exercise">锻炼</SelectItem>
              <SelectItem value="meditation">冥想</SelectItem>
              <SelectItem value="reading">阅读</SelectItem>
              <SelectItem value="work">工作</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="workBlockDuration" className="text-gray-700">理想工作时间块（分钟）</Label>
          <Slider
            id="workBlockDuration"
            min={15}
            max={120}
            step={15}
            defaultValue={[45]}
            className="w-full"
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="breakReminders" className="text-gray-700">休息提醒</Label>
          <Switch id="breakReminders" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="taskPrioritization" className="text-gray-700">任务优先级策略</Label>
          <Select>
            <SelectTrigger id="taskPrioritization">
              <SelectValue placeholder="选择策略" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="urgency">紧急程度</SelectItem>
              <SelectItem value="importance">重要性</SelectItem>
              <SelectItem value="difficulty">难度</SelectItem>
              <SelectItem value="duration">持续时间</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  )
}

