"use client"

import { useState } from "react"
import { BottomNav } from "@/components/bottom-nav"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, LayoutGrid, List, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from "@/lib/utils"
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay } from 'date-fns'
import { AIChatWindow } from "@/components/ai-chat-window"

type ViewType = "default" | "month" | "week"
type TaskStatus = "todo" | "in-progress" | "completed"
type WeekDay = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun"

interface Task {
  id: number
  title: string
  priority: "low" | "medium" | "high"
  status: TaskStatus
  day: WeekDay
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

const weekDays: WeekDay[] = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
const weekDayNames: Record<WeekDay, string> = {
  mon: "周一",
  tue: "周二",
  wed: "周三",
  thu: "周四",
  fri: "周五",
  sat: "周六",
  sun: "周日"
}

const TaskList = ({ tasks }: { tasks: Task[] }) => (
  <div className="space-y-1">
    {tasks.map((task, index) => (
      <div key={task.id} className={cn(
        "flex items-center gap-3 py-3",
        index !== tasks.length - 1 && "border-b border-border"
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
      </div>
    ))}
  </div>
)

const WeekView = ({ tasks }: { tasks: Task[] }) => {
  const [selectedDay, setSelectedDay] = useState<WeekDay>("mon")
  const today = new Date()
  const monday = new Date(today.setDate(today.getDate() - today.getDay() + 1))

  return (
    <div className="space-y-4">
      <div className="flex">
        {weekDays.map((day, index) => {
          const date = new Date(monday)
          date.setDate(monday.getDate() + index)
          return (
            <Button
              key={day}
              variant="ghost"
              onClick={() => setSelectedDay(day)}
              className={cn(
                "flex-1 flex-col items-start p-2 h-auto relative",
                selectedDay === day && "bg-muted",
                index !== weekDays.length - 1 && "after:content-[''] after:absolute after:right-0 after:top-1/4 after:h-1/2 after:w-px after:bg-border"
              )}
            >
              <span className="text-sm font-normal">{weekDayNames[day]}</span>
              <span className="text-xs text-muted-foreground">{date.getDate()}</span>
            </Button>
          )
        })}
      </div>
      <div className="px-4">
        <TaskList tasks={tasks.filter(task => task.day === selectedDay)} />
      </div>
    </div>
  )
}

const MonthView = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const today = new Date()

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth)
  })

  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1))
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1))

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-4">
        <Button variant="ghost" onClick={prevMonth}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-lg font-semibold">
          {format(currentMonth, 'yyyy年 M月')}
        </h2>
        <Button variant="ghost" onClick={nextMonth}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-7 gap-1 px-4">
        {['日', '一', '二', '三', '四', '五', '六'].map((day) => (
          <div key={day} className="text-center text-sm font-medium text-muted-foreground">
            {day}
          </div>
        ))}
        {daysInMonth.map((date, index) => (
          <Button
            key={date.toISOString()}
            variant="ghost"
            className={cn(
              "h-10 w-full rounded-full",
              !isSameMonth(date, currentMonth) && "invisible",
              isSameDay(date, today) && "bg-primary text-primary-foreground"
            )}
          >
            {date.getDate()}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default function Tasks() {
  const [currentView, setCurrentView] = useState<ViewType>("default")

  const viewIcons = {
    default: <List className="mr-2 h-4 w-4" />,
    month: <Calendar className="mr-2 h-4 w-4" />,
    week: <LayoutGrid className="mr-2 h-4 w-4" />,
  }

  const mainTasks: Task[] = [
    { id: 1, title: "完成项目报告", priority: "high", status: "in-progress", day: "mon" },
    { id: 2, title: "准备客户演示", priority: "medium", status: "todo", day: "tue" },
    { id: 3, title: "更新团队文档", priority: "low", status: "completed", day: "wed" },
  ]

  const dailyTasks: Task[] = [
    { id: 4, title: "检查邮件", priority: "medium", status: "completed", day: "mon" },
    { id: 5, title: "团队每日站会", priority: "high", status: "todo", day: "tue" },
    { id: 6, title: "更新任务状态", priority: "low", status: "in-progress", day: "wed" },
  ]

  const sideTasks: Task[] = [
    { id: 7, title: "学习新技能", priority: "medium", status: "in-progress", day: "thu" },
    { id: 8, title: "整理工作空间", priority: "low", status: "todo", day: "fri" },
    { id: 9, title: "回顾本周目标", priority: "high", status: "completed", day: "sat" },
  ]

  const weekTasks: Task[] = [
    { id: 10, title: "周一会议", priority: "high", status: "todo", day: "mon" },
    { id: 11, title: "准备周报", priority: "medium", status: "in-progress", day: "mon" },
    { id: 12, title: "回复重要邮件", priority: "high", status: "todo", day: "mon" },
    { id: 13, title: "周二报告", priority: "medium", status: "in-progress", day: "tue" },
    { id: 14, title: "客户电话会议", priority: "high", status: "todo", day: "tue" },
    { id: 15, title: "更新项目时间线", priority: "low", status: "todo", day: "tue" },
    { id: 16, title: "周三培训", priority: "low", status: "completed", day: "wed" },
    { id: 17, title: "代码审查", priority: "medium", status: "in-progress", day: "wed" },
    { id: 18, title: "团队建设活动", priority: "low", status: "todo", day: "wed" },
    { id: 19, title: "周四演示", priority: "high", status: "todo", day: "thu" },
    { id: 20, title: "撰写技术文档", priority: "medium", status: "in-progress", day: "thu" },
    { id: 21, title: "优化数据库查询", priority: "high", status: "todo", day: "thu" },
    { id: 22, title: "周五总结", priority: "medium", status: "in-progress", day: "fri" },
    { id: 23, title: "代码部署", priority: "high", status: "todo", day: "fri" },
    { id: 24, title: "周末待办事项规划", priority: "low", status: "todo", day: "fri" },
    { id: 25, title: "周六复习", priority: "low", status: "todo", day: "sat" },
    { id: 26, title: "个人项目开发", priority: "medium", status: "in-progress", day: "sat" },
    { id: 27, title: "健身", priority: "low", status: "todo", day: "sat" },
    { id: 28, title: "周日计划", priority: "medium", status: "todo", day: "sun" },
    { id: 29, title: "阅读技术文章", priority: "low", status: "in-progress", day: "sun" },
    { id: 30, title: "准备下周工作", priority: "high", status: "todo", day: "sun" },
  ]

  const renderDefaultView = () => (
    <Tabs defaultValue="main" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="main">主线任务</TabsTrigger>
        <TabsTrigger value="daily">日常任务</TabsTrigger>
        <TabsTrigger value="side">支线任务</TabsTrigger>
      </TabsList>
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

  const renderView = () => {
    switch (currentView) {
      case "default":
        return renderDefaultView()
      case "month":
        return <MonthView />
      case "week":
        return <WeekView tasks={weekTasks} />
    }
  }

  return (
    <main className="min-h-screen pb-16 flex flex-col">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">
          {currentView === "default" && "任务管理"}
          {currentView === "month" && "月视图"}
          {currentView === "week" && "周视图"}
        </h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              {viewIcons[currentView]}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setCurrentView("default")}>
              <List className="mr-2 h-4 w-4" />
              <span>默认视图</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setCurrentView("month")}>
              <Calendar className="mr-2 h-4 w-4" />
              <span>月视图</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setCurrentView("week")}>
              <LayoutGrid className="mr-2 h-4 w-4" />
              <span>周视图</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex-grow overflow-auto">
        {renderView()}
      </div>
      <div className="mt-auto">
        <AIChatWindow />
      </div>
      <BottomNav />
    </main>
  )
}

