"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mic, Bot, Send } from 'lucide-react'

interface Message {
  id: number
  content: string
  sender: 'user' | 'ai'
}

export function AIChatWindow() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, content: "你好！我是你的AI助手。有什么我可以帮助你的吗？", sender: 'ai' }
  ])
  const [input, setInput] = useState("")
  const [isListening, setIsListening] = useState(false)

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage: Message = { id: messages.length + 1, content: input, sender: 'user' }
      setMessages([...messages, newMessage])
      setInput("")
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse: Message = { id: messages.length + 2, content: "我理解了。还有什么我可以为你做的吗？", sender: 'ai' }
        setMessages(prevMessages => [...prevMessages, aiResponse])
      }, 1000)
    }
  }

  const handleVoiceInput = () => {
    setIsListening(true)
    // Placeholder for voice input functionality
    alert("语音输入功能正在开发中...")
    setIsListening(false)
  }

  return (
    <div className="mt-6 mx-4">
      <div className="border-t border-border pt-4 pb-2 flex items-center">
        <Bot className="h-4 w-4 text-muted-foreground" />
      </div>
      <div>
        <ScrollArea className="h-[200px] w-full pr-4 my-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
              {message.sender === 'ai' && (
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src="/ai-avatar.png" alt="AI" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
              )}
              <div className={`rounded-lg p-2 max-w-[70%] ${message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
                {message.content}
              </div>
              {message.sender === 'user' && (
                <Avatar className="h-8 w-8 ml-2">
                  <AvatarImage src="/user-avatar.png" alt="User" />
                  <AvatarFallback>Me</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
        </ScrollArea>
      </div>
      <div>
        <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex w-full gap-2 mt-4">
          <Input
            placeholder="输入消息..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow"
          />
          <Button type="button" variant="outline" size="icon" onClick={handleVoiceInput} className={isListening ? 'bg-red-500' : ''}>
            <Mic className="h-4 w-4" />
          </Button>
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  )
}

