"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, MonitorIcon as Running, Utensils } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Task {
  id: number
  icon: React.ElementType
  text: string
  completed: boolean
  priority: 'low' | 'medium' | 'high'
}

const initialTasks: Task[] = [
  { id: 1, icon: BookOpen, text: "学习英语", completed: false, priority: 'medium' },
  { id: 2, icon: Running, text: "慢跑", completed: false, priority: 'high' },
  { id: 3, icon: Utensils, text: "购买猫粮", completed: false, priority: 'low' },
]

const priorityColors = {
  low: "bg-green-500",
  medium: "bg-yellow-500",
  high: "bg-red-500"
}

const priorityOrder = ['low', 'medium', 'high'] as const

export function TaskCard() {
  const [tasks, setTasks] = useState(initialTasks)

  const toggleTaskCompletion = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const cyclePriority = (id: number) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        const currentIndex = priorityOrder.indexOf(task.priority)
        const nextIndex = (currentIndex + 1) % priorityOrder.length
        return { ...task, priority: priorityOrder[nextIndex] }
      }
      return task
    }))
  }

  const sortedTasks = [...tasks].sort((a, b) => {
    return priorityOrder.indexOf(b.priority) - priorityOrder.indexOf(a.priority)
  })

  return (
    <Card className="mx-4">
      <CardHeader>
        <CardTitle className="text-lg">我的任务</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {sortedTasks.map(task => {
          const Icon = task.icon
          return (
            <div key={task.id} className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "p-0 h-6 w-6 rounded-full",
                  task.completed ? 'bg-primary text-primary-foreground' : 'border-2 border-primary'
                )}
                onClick={() => toggleTaskCompletion(task.id)}
                aria-label={`${task.completed ? '标记为未完成' : '标记为已完成'}`}
              >
                {task.completed && '✓'}
              </Button>
              <Icon className={cn(
                "h-5 w-5",
                task.completed ? 'text-muted-foreground' : 'text-primary'
              )} />
              <span className={cn(
                "flex-grow",
                task.completed && 'line-through text-muted-foreground'
              )}>
                {task.text}
              </span>
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "p-0 h-6 w-6 rounded-full",
                  priorityColors[task.priority]
                )}
                onClick={() => cyclePriority(task.id)}
                aria-label={`当前优先级: ${task.priority}。点击切换优先级`}
              />
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}

