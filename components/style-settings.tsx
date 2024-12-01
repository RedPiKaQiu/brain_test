import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function StyleSettings() {
  return (
    <Card className="w-full bg-white shadow-md">
      <CardHeader className="bg-blue-50">
        <CardTitle className="text-lg font-semibold text-blue-800">样式设置</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        <div className="space-y-2">
          <Label htmlFor="fontSize" className="text-gray-700">字体大小</Label>
          <Slider
            id="fontSize"
            min={12}
            max={24}
            step={1}
            defaultValue={[16]}
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-gray-700">字体样式</Label>
          <RadioGroup defaultValue="sans">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sans" id="sans" />
              <Label htmlFor="sans">Sans-serif</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="serif" id="serif" />
              <Label htmlFor="serif">Serif</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="mono" id="mono" />
              <Label htmlFor="mono">Monospace</Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  )
}

