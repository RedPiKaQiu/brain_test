"use client"

import { useState } from "react"
import { BottomNav } from "@/components/bottom-nav"
import { Banner } from "@/components/banner"
import { TaskProgress } from "@/components/data/task-progress"
import { EnergyTracking } from "@/components/data/energy-tracking"
import { EnergyComparison } from "@/components/data/energy-comparison"
import { Button } from "@/components/ui/button"
import { Toast } from "@/components/ui/toast"
import { Sparkles } from 'lucide-react'
import { ToastViewport } from "@/components/ui/toast"

export default function Data() {
  const [showToast, setShowToast] = useState(true)

  return (
    <main className="min-h-screen pb-20 p-4 bg-gradient-to-b from-blue-50 to-gray-50">
      <Banner />
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">数据中心</h1>
      <div className="space-y-8 max-w-4xl mx-auto">
        <TaskProgress />
        <EnergyTracking />
        <EnergyComparison />
      </div>
      {showToast && (
        <Toast className="fixed bottom-20 right-4 bg-white shadow-lg rounded-lg p-4 max-w-sm">
          <div className="flex items-center">
            <Sparkles className="text-yellow-400 mr-2" />
            <p className="text-gray-800 font-medium">需要建议吗？</p>
          </div>
          <Button 
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white"
            onClick={() => setShowToast(false)}
          >
            和agent聊聊
          </Button>
        </Toast>
      )}
      <BottomNav />
      <ToastViewport />
    </main>
  )
}

