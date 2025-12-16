import { Bot, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user"

  const formatContent = (content: string) => {
    // Simple markdown-like formatting
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/•/g, '•')
      .split('\n')
      .map((line, index) => (
        <div key={index} className={line.trim() === '' ? 'h-2' : ''}>
          <span dangerouslySetInnerHTML={{ __html: line }} />
        </div>
      ))
  }

  return (
    <div className={cn("flex gap-3", isUser ? "flex-row-reverse" : "flex-row")}>
      <div className={cn(
        "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full",
        isUser ? "bg-indigo-500 text-white" : "bg-slate-100 text-slate-600"
      )}>
        {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
      </div>
      
      <div className={cn(
        "flex flex-col gap-1 max-w-[80%]",
        isUser ? "items-end" : "items-start"
      )}>
        <div className={cn(
          "rounded-2xl px-3 py-2 text-sm",
          isUser 
            ? "bg-indigo-500 text-white" 
            : "bg-slate-100 text-slate-900"
        )}>
          {isUser ? (
            <p>{message.content}</p>
          ) : (
            <div className="space-y-1">
              {formatContent(message.content)}
            </div>
          )}
        </div>
        
        <span className="text-xs text-slate-500 px-1">
          {message.timestamp.getHours().toString().padStart(2, '0')}:
          {message.timestamp.getMinutes().toString().padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}