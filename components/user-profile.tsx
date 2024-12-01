import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function UserProfile() {
  return (
    <Card className="w-full bg-white shadow-md">
      <CardHeader className="flex flex-row items-center gap-4 pb-2 bg-blue-50">
        <Avatar className="w-20 h-20 border-2 border-blue-300">
          <AvatarFallback className="text-2xl font-bold bg-blue-200 text-blue-800">陈</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-2xl font-bold text-blue-800">陈娜</h2>
          <p className="text-sm text-gray-600">@chenNa123</p>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="text-lg italic text-center text-gray-700">"每一天都是新的开始，珍惜当下，活出精彩。"</p>
      </CardContent>
    </Card>
  )
}

