import { BottomNav } from "@/components/bottom-nav"
import { Banner } from "@/components/banner"
import { UserProfile } from "@/components/user-profile"
import { UserPreferences } from "@/components/user-preferences"
import { TaskPrinciples } from "@/components/task-principles"

export default function Profile() {
  return (
    <main className="min-h-screen pb-16 flex flex-col bg-gray-50">
      <Banner />
      <div className="flex-grow p-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">个人页面</h1>
        <div className="max-w-2xl mx-auto space-y-6">
          <UserProfile />
          <TaskPrinciples />
          <UserPreferences />
        </div>
      </div>
      <BottomNav />
    </main>
  )
}

