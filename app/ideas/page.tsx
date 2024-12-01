"use client"

import { useState } from "react"
import { BottomNav } from "@/components/bottom-nav"
import { Banner } from "@/components/banner"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Plus, X, ListTodo, MessageSquare } from 'lucide-react'

interface Idea {
  id: number
  title: string
  description: string
  color: string
}

const colors = [
  "bg-red-400", "bg-blue-400", "bg-green-400", 
  "bg-yellow-400", "bg-purple-400", "bg-pink-400", 
  "bg-indigo-400", "bg-teal-400", "bg-orange-400"
]

const initialIdeas: Idea[] = [
  { id: 1, title: "和家人多增加联系", description: "每周至少打一次电话给父母，定期组织家庭聚会", color: "bg-red-400" },
  { id: 2, title: "试一下滑雪", description: "下个冬季报名参加滑雪课程，购置必要的装备", color: "bg-blue-400" },
  { id: 3, title: "每天锻炼30分钟", description: "制定每日锻炼计划，包括跑步、瑜伽和力量训练", color: "bg-green-400" },
  { id: 4, title: "学习一门新语言", description: "使用语言学习App，每天学习西班牙语15分钟", color: "bg-yellow-400" },
  { id: 5, title: "尝试冥想", description: "下载冥想App，从每天5分钟开始，逐步增加到20分钟", color: "bg-purple-400" },
  { id: 6, title: "参加志愿者活动", description: "联系当地社区中心，每月参与一次志愿服务", color: "bg-pink-400" },
  { id: 7, title: "开始写日记", description: "购买一本漂亮的笔记本，每晚睡前记录当天的感想", color: "bg-indigo-400" },
  { id: 8, title: "学习烹饪新菜式", description: "每周尝试一道新菜谱，逐步掌握不同国家的料理", color: "bg-teal-400" },
  { id: 9, title: "去看日出", description: "研究附近最佳观赏日出的地点，周末早起观赏", color: "bg-orange-400" },
]

export default function Ideas() {
  const [ideas, setIdeas] = useState<Idea[]>(initialIdeas)
  const [newIdea, setNewIdea] = useState({ title: "", description: "" })
  const [showToast, setShowToast] = useState(false)
  const [selectedIdea, setSelectedIdea] = useState<Idea | null>(null)
  const [showTaskSplitModal, setShowTaskSplitModal] = useState(false)
  const [showAgentChatModal, setShowAgentChatModal] = useState(false)

  const addIdea = () => {
    if (newIdea.title && newIdea.description) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)]
      setIdeas([{ id: Date.now(), ...newIdea, color: randomColor }, ...ideas])
      setNewIdea({ title: "", description: "" })
      setShowToast(false)
    }
  }

  const handleTaskSplit = () => {
    setShowTaskSplitModal(true)
    setSelectedIdea(null)
  }

  const handleAgentChat = () => {
    setShowAgentChatModal(true)
    setSelectedIdea(null)
  }

  return (
    <main className="min-h-screen pb-16 flex flex-col bg-gray-50">
      <Banner />
      <div className="flex-grow p-4">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">想法仓库</h1>
        
        <div className="grid grid-cols-3 gap-4 mb-8">
          {ideas.slice(0, 9).map((idea) => (
            <Card 
              key={idea.id} 
              className={`${idea.color} shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer`}
              onClick={() => setSelectedIdea(idea)}
            >
              <CardContent className="p-4 h-32 flex flex-col items-center justify-center">
                <h3 className="text-sm text-white text-center font-bold mb-2">{idea.title}</h3>
                <p className="text-xs text-white text-center">{idea.description.slice(0, 30)}...</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button 
          onClick={() => setShowToast(true)} 
          className="fixed bottom-20 right-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg"
        >
          <Plus className="w-6 h-6" />
        </Button>

        {showToast && (
          <Card className="fixed bottom-24 right-4 w-80 bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Plus className="w-5 h-5 mr-2" />
              添加新想法
            </h3>
            <Input
              placeholder="想法标题"
              value={newIdea.title}
              onChange={(e) => setNewIdea({ ...newIdea, title: e.target.value })}
              className="mb-2"
            />
            <Textarea
              placeholder="描述你的新想法..."
              value={newIdea.description}
              onChange={(e) => setNewIdea({ ...newIdea, description: e.target.value })}
              className="mb-2"
            />
            <Button onClick={addIdea} className="w-full bg-blue-500 hover:bg-blue-600 text-white">
              添加想法
            </Button>
          </Card>
        )}

        {selectedIdea && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <Card className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{selectedIdea.title}</h3>
                <Button variant="ghost" onClick={() => setSelectedIdea(null)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-gray-600 mb-6">{selectedIdea.description}</p>
              <div className="flex justify-between">
                <Button onClick={handleTaskSplit} className="flex items-center bg-green-500 hover:bg-green-600 text-white">
                  <ListTodo className="w-4 h-4 mr-2" />
                  现在开始拆分任务
                </Button>
                <Button onClick={handleAgentChat} className="flex items-center bg-purple-500 hover:bg-purple-600 text-white">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  和agent聊聊
                </Button>
              </div>
            </Card>
          </div>
        )}

        {showTaskSplitModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <Card className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">拆分任务</h3>
              <p className="text-gray-600 mb-4">这里可以添加任务拆分的具体实现</p>
              <Button onClick={() => setShowTaskSplitModal(false)} className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                关闭
              </Button>
            </Card>
          </div>
        )}

        {showAgentChatModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <Card className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">与Agent聊天</h3>
              <p className="text-gray-600 mb-4">这里可以添加与Agent聊天的具体实现</p>
              <Button onClick={() => setShowAgentChatModal(false)} className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                关闭
              </Button>
            </Card>
          </div>
        )}
      </div>
      <BottomNav />
    </main>
  )
}

