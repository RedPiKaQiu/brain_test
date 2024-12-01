"use client"

import React, { useState } from 'react';
import { List, Calendar, LayoutGrid } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DefaultView } from "@/components/default-view"
import { AIChatWindow } from "@/components/ai-chat-window"
import { BottomNav } from "@/components/bottom-nav"

type Task = {
  id: number;
  title: string;
  priority: "high" | "medium" | "low";
  status: "todo" | "in-progress" | "completed";
  day?: string;
  subtasks?: Task[];
};

type ViewType = "default" | "month" | "week";

const Tasks = () => {
  const [currentView, setCurrentView] = useState<ViewType>("default")

  const viewIcons = {
    default: <List className="mr-2 h-4 w-4" />,
    month: <Calendar className="mr-2 h-4 w-4" />,
    week: <LayoutGrid className="mr-2 h-4 w-4" />,
  }

  const mainTasks: Task[] = [
    {
      id: 1,
      title: "完成项目报告",
      priority: "high",
      status: "in-progress",
      day: "mon",
      subtasks: [
        { id: 101, title: "收集数据", priority: "medium", status: "completed", day: "mon" },
        { id: 102, title: "分析结果", priority: "high", status: "in-progress", day: "mon" },
        { id: 103, title: "撰写报告", priority: "medium", status: "todo", day: "mon" },
      ]
    },
    {
      id: 2,
      title: "准备客户演示",
      priority: "medium",
      status: "todo",
      day: "tue",
      subtasks: [
        { id: 201, title: "准备演示文稿", priority: "high", status: "todo", day: "tue" },
        { id: 202, title: "准备数据", priority: "high", status: "todo", day: "tue" },
        { id: 203, title: "排练演讲", priority: "medium", status: "todo", day: "tue" },
      ]
    },
    {
      id: 3,
      title: "更新团队文档",
      priority: "low",
      status: "completed",
      day: "wed",
      subtasks: [
        { id: 301, title: "审核现有文档", priority: "low", status: "completed", day: "wed" },
        { id: 302, title: "添加新信息", priority: "low", status: "completed", day: "wed" },
        { id: 303, title: "格式化文档", priority: "low", status: "completed", day: "wed" },
      ]
    },
    {
      id: 4,
      title: "学习西班牙语",
      priority: "medium",
      status: "in-progress",
      day: "thu",
      subtasks: [
        { id: 401, title: "复习词汇", priority: "medium", status: "in-progress", day: "thu" },
        { id: 402, title: "练习口语", priority: "high", status: "todo", day: "thu" },
        { id: 403, title: "完成语法练习", priority: "low", status: "todo", day: "thu" },
      ]
    },
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

  const renderView = () => {
    switch (currentView) {
      case "default":
        return <DefaultView mainTasks={mainTasks} dailyTasks={dailyTasks} sideTasks={sideTasks} />;
      case "month":
        return <div>Month View (Not implemented)</div>;
      case "week":
        return <div>Week View (Not implemented)</div>;
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
  );
};

export default Tasks;

