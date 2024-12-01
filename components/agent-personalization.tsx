import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function AgentPersonalization() {
  return (
    <Card className="w-full bg-white shadow-md">
      <CardHeader className="bg-blue-50">
        <CardTitle className="text-lg font-semibold text-blue-800">Agent个性化</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        <div className="space-y-2">
          <Label htmlFor="agentName" className="text-gray-700">Agent名称</Label>
          <Input id="agentName" placeholder="给你的AI助手起个名字" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="agentPersonality" className="text-gray-700">Agent性格</Label>
          <Textarea
            id="agentPersonality"
            placeholder="描述你希望AI助手具有的性格特征"
            className="min-h-[100px]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="agentExpertise" className="text-gray-700">专业领域</Label>
          <Input id="agentExpertise" placeholder="设置AI助手的专业领域" />
        </div>
        <Button className="w-full">保存Agent设置</Button>
      </CardContent>
    </Card>
  )
}

