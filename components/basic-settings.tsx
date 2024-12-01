import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function BasicSettings() {
  return (
    <Card className="w-full bg-white shadow-md">
      <CardHeader className="bg-blue-50">
        <CardTitle className="text-lg font-semibold text-blue-800">基础设置</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        <div className="flex items-center justify-between">
          <Label htmlFor="notifications" className="text-gray-700">推送通知</Label>
          <Switch id="notifications" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="darkMode" className="text-gray-700">深色模式</Label>
          <Switch id="darkMode" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="language" className="text-gray-700">语言</Label>
          <Select>
            <SelectTrigger id="language">
              <SelectValue placeholder="选择语言" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="zh">中文</SelectItem>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="ja">日本語</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  )
}

