"use client"

import { useState } from "react"
import { CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from 'lucide-react'
import { cn } from "@/lib/utils"

interface TimelineEvent {
  id: number
  time: string
  title: string
  description: string
  completed: boolean
}

const initialEvents: TimelineEvent[] = [
  {
    id: 1,
    time: "08:00",
    title: "服用早药",
    description: "按时完成服药",
    completed: false,
  },
  {
    id: 2,
    time: "12:30",
    title: "吃饭",
    description: "日常安排",
    completed: false,
  },
  {
    id: 3,
    time: "15:00",
    title: "参加同学聚餐",
    description: "",
    completed: false,
  },
]

export function Timeline() {
  const [events, setEvents] = useState<TimelineEvent[]>(initialEvents)

  const toggleEventCompletion = (id: number) => {
    setEvents(events.map(event =>
      event.id === id ? { ...event, completed: !event.completed } : event
    ))
  }

  return (
    <div className="mx-4 mt-4">
      <CardHeader className="px-0">
        <CardTitle className="text-lg">今日安排</CardTitle>
      </CardHeader>
      <div className="mt-4 space-y-4 relative before:absolute before:left-[7.5rem] before:top-2 before:bottom-2 before:w-px before:bg-border">
        {events.map((event) => (
          <div key={event.id} className="flex items-start">
            <div className="w-32 pr-6 flex items-center justify-end">
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "p-0 h-6 w-6 rounded-full mr-4",
                  event.completed ? 'bg-primary text-primary-foreground' : 'border-2 border-primary'
                )}
                onClick={() => toggleEventCompletion(event.id)}
                aria-label={event.completed ? '标记为未完成' : '标记为已完成'}
              >
                {event.completed && <CheckCircle2 className="h-4 w-4" />}
              </Button>
              <div className="text-sm font-medium text-primary">{event.time}</div>
            </div>
            <div className="w-2 h-2 rounded-full bg-primary relative z-10 mt-1.5 mx-4"></div>
            <div className={cn("flex-1 pb-4", event.completed && "text-muted-foreground")}>
              <div className={cn("font-medium", event.completed && "line-through")}>{event.title}</div>
              {event.description && (
                <div className={cn("text-sm text-muted-foreground", event.completed && "line-through")}>{event.description}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

