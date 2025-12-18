"use client"

import { useState } from "react"
import { Send, Sparkles, MapPin, Calendar, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChatMessage } from "@/components/chat/chat-message"
import { PromptSuggestions } from "@/components/chat/prompt-suggestions"

interface Message {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

const quickPrompts = [
  {
    icon: MapPin,
    title: "Plan a Trip",
    description: "Get a complete itinerary",
    prompt: "Plan a 5-day trip to Kerala for a couple with a budget of ₹50,000"
  },
  {
    icon: Calendar,
    title: "Best Time to Visit",
    description: "Find optimal travel dates",
    prompt: "When is the best time to visit Manali for honeymoon?"
  },
  {
    icon: DollarSign,
    title: "Budget Planning",
    description: "Calculate trip costs",
    prompt: "Create a budget breakdown for a 4-day Goa trip for 2 people"
  },
  {
    icon: Sparkles,
    title: "Hidden Gems",
    description: "Discover unique places",
    prompt: "Suggest some offbeat destinations in Himachal Pradesh"
  }
]

export default function AIPlannerPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI travel advisor. I can help you plan amazing trips, find the best destinations, and create personalized itineraries. What kind of adventure are you planning?",
      role: "assistant",
      timestamp: new Date('2024-01-01T12:00:00')
    }
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: "user",
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: content }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }))
        throw new Error(errorData.error || `HTTP ${response.status}`)
      }

      const data = await response.json()
      
      if (data.error) {
        const errorMessage = typeof data.error === 'string' ? data.error : 
                           data.errorDetails || data.message || 'AI service error occurred'
        throw new Error(errorMessage)
      }
      
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: data.message || "Sorry, I couldn't generate a response.",
        role: "assistant",
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, aiResponse])
    } catch (error) {
      console.error('Error getting AI response:', error)
      
      // Import and use the fallback response function directly
      const { getFallbackResponse } = await import('@/lib/fallback-responses')
      const fallbackContent = getFallbackResponse(content)
      
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: fallbackContent + "\n\n*Note: AI service is temporarily busy. Using my knowledge base to help you!*",
        role: "assistant",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorResponse])
    } finally {
      setIsTyping(false)
    }
  }

  const handleQuickPrompt = (prompt: string) => {
    handleSendMessage(prompt)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-4 sm:py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            AI Travel Planner
          </h1>
          <p className="text-slate-600">
            Get personalized travel recommendations and itineraries powered by AI
          </p>
        </div>

        {/* Quick Prompts */}
        {messages.length === 1 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">
              Quick Start Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickPrompts.map((prompt) => (
                <Card 
                  key={prompt.title}
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => handleQuickPrompt(prompt.prompt)}
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <prompt.icon className="h-5 w-5 text-indigo-600" />
                      {prompt.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">{prompt.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Chat Interface */}
        <Card className="h-[calc(100vh-10rem)] sm:h-[calc(100vh-12rem)] min-h-[350px] max-h-[600px] flex flex-col">
          <CardHeader className="bg-indigo-500 text-white rounded-t-2xl">
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              AI Travel Advisor
            </CardTitle>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0 min-h-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 min-h-0">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {isTyping && (
                <div className="flex items-center space-x-2 text-slate-500">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                  </div>
                  <span className="text-sm">AI is thinking...</span>
                </div>
              )}
            </div>

            {/* Suggestions for first message */}
            {messages.length === 1 && (
              <div className="px-6 pb-4">
                <PromptSuggestions onSuggestionClick={handleSendMessage} />
              </div>
            )}

            {/* Input */}
            <div className="p-6 border-t border-slate-200">
              <div className="flex space-x-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSendMessage(input)}
                  placeholder="Ask me anything about travel planning..."
                  className="flex-1"
                />
                <Button
                  onClick={() => handleSendMessage(input)}
                  disabled={!input.trim() || isTyping}
                  size="icon"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}