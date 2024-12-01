import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const themes = [
  { name: "默认主题", description: "应用的默认主题", color: "bg-blue-500" },
  { name: "暗夜模式", description: "深色主题", color: "bg-gray-800" },
  { name: "森林绿", description: "自然风格主题", color: "bg-green-600" },
  { name: "海洋蓝", description: "清新蓝色主题", color: "bg-cyan-500" },
]

export function ThemeMarket() {
  return (
    <Card className="w-full bg-white shadow-md">
      <CardHeader className="bg-blue-50">
        <CardTitle className="text-lg font-semibold text-blue-800">主题市场</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4 p-6">
        {themes.map((theme) => (
          <Card key={theme.name} className="overflow-hidden">
            <div className={`h-20 ${theme.color}`} />
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-800">{theme.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{theme.description}</p>
              <Button variant="outline" size="sm">应用主题</Button>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  )
}

