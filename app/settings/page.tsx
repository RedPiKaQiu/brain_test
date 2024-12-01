import { BottomNav } from "@/components/bottom-nav"
import { Banner } from "@/components/banner"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BasicSettings } from "@/components/settings/basic-settings"
import { ThemeMarket } from "@/components/settings/theme-market"
import { StyleSettings } from "@/components/settings/style-settings"
import { AgentPersonalization } from "@/components/settings/agent-personalization"
import { UserProfile } from "@/components/user-profile"

export default function Settings() {
  return (
    <main className="min-h-screen pb-16 flex flex-col bg-gray-50">
      <Banner />
      <div className="flex-grow p-4">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-800">设置</h1>
        <Tabs defaultValue="basic" className="w-full max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="basic">基础设置</TabsTrigger>
            <TabsTrigger value="theme">主题市场</TabsTrigger>
            <TabsTrigger value="style">样式设置</TabsTrigger>
            <TabsTrigger value="agent">Agent个性化</TabsTrigger>
            <TabsTrigger value="profile">个人资料</TabsTrigger>
          </TabsList>
          <TabsContent value="basic">
            <BasicSettings />
          </TabsContent>
          <TabsContent value="theme">
            <ThemeMarket />
          </TabsContent>
          <TabsContent value="style">
            <StyleSettings />
          </TabsContent>
          <TabsContent value="agent">
            <AgentPersonalization />
          </TabsContent>
          <TabsContent value="profile">
            <UserProfile />
          </TabsContent>
        </Tabs>
      </div>
      <BottomNav />
    </main>
  )
}

