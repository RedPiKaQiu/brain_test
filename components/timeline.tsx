"use client"

import { useState } from "react"
import { CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Mic, Clock, PlusIcon } from 'lucide-react'

interface TimelineEvent {
  id: number
  time: string
  title: string
  description: string
}

const initialEvents: TimelineEvent[] = [
  {
    id: 1,
    time: "08:00",
    title: "服用早药",
    description: "按时完成服药",
  },
  {
    id: 2,
    time: "12:30",
    title: "吃饭",
    description: "日常安排",
  },
  {
    id: 3,
    time: "15:00",
    title: "参加同学聚餐",
    description: "",
  },
]

export function Timeline() {
  const [events, setEvents] = useState<TimelineEvent[]>(initialEvents)

  return (
    <div className="mx-4 mt-4">
      <CardHeader className="px-0">
        <CardTitle className="text-lg">今日安排</CardTitle>
      </CardHeader>
      <div className="mt-4 space-y-4 relative before:absolute before:left-[5rem] before:top-2 before:bottom-2 before:w-px before:bg-border">
        {events.map((event, index) => (
          <div key={event.id} className="flex items-start">
            <div className="w-20 pr-4 flex justify-end">
              <div className="text-sm font-medium text-primary">{event.time}</div>
            </div>
            <div className="w-2 h-2 rounded-full bg-primary relative z-10 mt-1.5 mx-2"></div>
            <div className="flex-1 pb-4">
              <div className="font-medium">{event.title}</div>
              {event.description && (
                <div className="text-sm text-muted-foreground">{event.description}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

