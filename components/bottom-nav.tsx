"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Brain, BarChart2, CheckSquare, Lightbulb } from 'lucide-react'
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", icon: Home, label: "主页" },
  { href: "/ai-chat", icon: Brain, label: "AI对话" },
  { href: "/data", icon: BarChart2, label: "数据中心" },
  { href: "/tasks", icon: CheckSquare, label: "任务管理" },
  { href: "/ideas", icon: Lightbulb, label: "想法仓库" },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t bg-white shadow-lg">
      <div className="flex h-16">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-1 flex-col items-center justify-center gap-1",
                pathname === item.href
                  ? "text-purple-600"
                  : "text-gray-500 hover:text-purple-600"
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

