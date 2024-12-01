import { StatusBar } from "@/components/status-bar"
import { TaskCard } from "@/components/task-card"
import { Timeline } from "@/components/timeline"
import { AIChatWindow } from "@/components/ai-chat-window"
import { BottomNav } from "@/components/bottom-nav"

export default function Home() {
  return (
    <main className="min-h-screen pb-16">
      <StatusBar />
      <TaskCard />
      <Timeline />
      <AIChatWindow />
      <BottomNav />
    </main>
  )
}

