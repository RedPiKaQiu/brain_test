import Link from 'next/link'
import { Settings, User, ChevronLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { usePathname } from 'next/navigation'

export function Banner() {
  const pathname = usePathname()
  const isSettingsPage = pathname === '/settings'

  return (
    <div className="w-full bg-gradient-to-r from-blue-800 to-blue-600 p-4 flex justify-between items-center">
      {isSettingsPage ? (
        <Button variant="ghost" size="icon" asChild className="text-gray-100 hover:text-white hover:bg-blue-700">
          <Link href="/data" aria-label="返回">
            <ChevronLeft className="h-5 w-5" />
          </Link>
        </Button>
      ) : (
        <h1 className="text-2xl font-bold text-gray-100 font-serif tracking-wider">
          Second Brain
        </h1>
      )}
      <div className="flex space-x-2">
        <Button variant="ghost" size="icon" asChild className="text-gray-100 hover:text-white hover:bg-blue-700">
          <Link href="/settings" aria-label="设置">
            <Settings className="h-5 w-5" />
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild className="text-gray-100 hover:text-white hover:bg-blue-700">
          <Link href="/profile" aria-label="个人页面">
            <User className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

