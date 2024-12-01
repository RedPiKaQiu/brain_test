import { Battery, Pill, Droplet, Smile } from 'lucide-react'

export function StatusBar() {
  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-sm p-4 mx-4 mt-4">
      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col items-center justify-center">
          <Battery className="h-5 w-5 text-primary mb-1" />
          <span className="text-sm font-medium">80%</span>
          <span className="text-xs text-muted-foreground">能量值</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Pill className="h-5 w-5 text-primary mb-1" />
          <span className="text-sm font-medium">已服用</span>
          <span className="text-xs text-muted-foreground">服药</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Droplet className="h-5 w-5 text-primary mb-1" />
          <span className="text-sm font-medium">第3天</span>
          <span className="text-xs text-muted-foreground">生理期</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Smile className="h-5 w-5 text-primary mb-1" />
          <span className="text-sm font-medium">愉快</span>
          <span className="text-xs text-muted-foreground">心情</span>
        </div>
      </div>
    </div>
  )
}

