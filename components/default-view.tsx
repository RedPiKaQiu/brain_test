import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, ChevronDown, ChevronRightIcon } from 'lucide-react'
import { cn } from "@/lib/utils"

type TaskStatus = "todo" | "in-progress" | "completed"
type WeekDay = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun"

interface Task {
  id: number
  title: string
  priority: "low" | "medium" | "high"
  status: TaskStatus
  day: WeekDay
  subtasks?: Task[]
}

const priorityColors = {
  low: "bg-green-500",
  medium: "bg-yellow-500",
  high: "bg-red-500"
}

const statusColors: Record<TaskStatus, string> = {
  "todo": "bg-gray-200",
  "in-progress": "bg-blue-200",
  "completed": "bg-green-200"
}

const TaskList = ({ tasks }: { tasks: Task[] }) => {
  const [expandedTasks, setExpandedTasks] = useState<number[]>([]);

  const toggleTask = (taskId: number) => {
    setExpandedTasks(prev =>
      prev.includes(taskId)
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  };

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div key={task.id} className="space-y-2">
          <div className={cn(
            "flex items-center gap-3 py-3",
            task.status === "completed" && "opacity-50"
          )}>
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "p-0 h-6 w-6 rounded-full",
                task.status === "completed" ? 'bg-primary text-primary-foreground' : 'border-2 border-primary'
              )}
              aria-label={task.status === "completed" ? '标记为未完成' : '标记为已完成'}
            >
              {task.status === "completed" && <CheckCircle2 className="h-4 w-4" />}
            </Button>
            <span className={cn(
              "flex-grow",
              task.status === "completed" && 'line-through text-muted-foreground'
            )}>
              {task.title}
            </span>
            <div className={cn(
              "w-16 h-6 rounded-full text-xs flex items-center justify-center",
              statusColors[task.status]
            )}>
              {task.status === "todo" && "待办"}
              {task.status === "in-progress" && "进行中"}
              {task.status === "completed" && "已完成"}
            </div>
            <div
              className={cn(
                "w-6 h-6 rounded-full",
                priorityColors[task.priority]
              )}
              aria-label={`优先级: ${task.priority}`}
            />
            {task.subtasks && task.subtasks.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleTask(task.id)}
                className="p-0 h-6 w-6"
              >
                {expandedTasks.includes(task.id) ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRightIcon className="h-4 w-4" />
                )}
              </Button>
            )}
          </div>
          {task.subtasks && task.subtasks.length > 0 && expandedTasks.includes(task.id) && (
            <div className="ml-8 space-y-2 border-l-2 border-gray-200 pl-4">
              {task.subtasks.map(subtask => (
                <div key={subtask.id} className="flex items-center gap-2 py-1 text-sm">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "p-0 h-4 w-4 rounded-full",
                      subtask.status === "completed" ? 'bg-primary text-primary-foreground' : 'border-2 border-primary'
                    )}
                    aria-label={subtask.status === "completed" ? '标记为未完成' : '标记为已完成'}
                  >
                    {subtask.status === "completed" && <CheckCircle2 className="h-3 w-3" />}
                  </Button>
                  <span className={cn(
                    "flex-grow",
                    subtask.status === "completed" && 'line-through text-muted-foreground'
                  )}>
                    {subtask.title}
                  </span>
                  <div className={cn(
                    "w-12 h-4 rounded-full text-xs flex items-center justify-center",
                    statusColors[subtask.status]
                  )}>
                    {subtask.status === "todo" && "待办"}
                    {subtask.status === "in-progress" && "进行中"}
                    {subtask.status === "completed" && "已完成"}
                  </div>
                  <div
                    className={cn(
                      "w-4 h-4 rounded-full",
                      priorityColors[subtask.priority]
                    )}
                    aria-label={`优先级: ${subtask.priority}`}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export function DefaultView({ mainTasks, dailyTasks, sideTasks }: { mainTasks: Task[], dailyTasks: Task[], sideTasks: Task[] }) {
  return (
    <Tabs defaultValue="main" className="w-full">
      <div className="mb-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="main">主线任务</TabsTrigger>
          <TabsTrigger value="daily">日常任务</TabsTrigger>
          <TabsTrigger value="side">支线任务</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="main">
        <div className="pt-4 px-4">
          <TaskList tasks={mainTasks} />
        </div>
      </TabsContent>
      <TabsContent value="daily">
        <div className="pt-4 px-4">
          <TaskList tasks={dailyTasks} />
        </div>
      </TabsContent>
      <TabsContent value="side">
        <div className="pt-4 px-4">
          <TaskList tasks={sideTasks} />
        </div>
      </TabsContent>
    </Tabs>
  )
}

