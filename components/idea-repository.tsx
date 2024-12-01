import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Idea {
  id: number
  title: string
  description: string
}

export function IdeaRepository() {
  const [ideas, setIdeas] = useState<Idea[]>([
    { id: 1, title: "健康追踪App", description: "开发一个全面的健康追踪应用，包括饮食、运动和睡眠记录功能。" },
    { id: 2, title: "智能家居集成", description: "设计一个系统，将所有智能家居设备整合到一个统一的控制平台。" },
  ])
  const [newIdea, setNewIdea] = useState({ title: "", description: "" })

  const addIdea = () => {
    if (newIdea.title && newIdea.description) {
      setIdeas([...ideas, { id: Date.now(), ...newIdea }])
      setNewIdea({ title: "", description: "" })
    }
  }

  return (
    <Card className="w-full bg-white shadow-md">
      <CardHeader className="bg-blue-50">
        <CardTitle className="text-lg font-semibold text-blue-800">想法仓库</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        <div className="space-y-2">
          <Input
            placeholder="新想法标题"
            value={newIdea.title}
            onChange={(e) => setNewIdea({ ...newIdea, title: e.target.value })}
          />
          <Textarea
            placeholder="描述你的想法..."
            value={newIdea.description}
            onChange={(e) => setNewIdea({ ...newIdea, description: e.target.value })}
          />
          <Button onClick={addIdea} className="w-full">添加想法</Button>
        </div>
        <ScrollArea className="h-[300px] w-full rounded-md border p-4">
          {ideas.map((idea) => (
            <div key={idea.id} className="mb-4 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-blue-700">{idea.title}</h3>
              <p className="text-sm text-gray-600">{idea.description}</p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

