"use client"

import { useState, useRef, useEffect } from "react"
import { X, Send, Bot, Sparkles, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ChatMessage } from "@/components/chat/chat-message"
import { PromptSuggestions } from "@/components/chat/prompt-suggestions"
import { motion, AnimatePresence } from "framer-motion"

interface Message {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi! I'm your AI travel advisor. I can help you plan trips, find destinations, and answer travel questions. What would you like to explore today?",
      role: "assistant",
      timestamp: new Date('2024-01-01T12:00:00')
    }
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showScrollIndicator, setShowScrollIndicator] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleScroll = () => {
    if (messagesContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current
      const isScrolledToBottom = scrollHeight - scrollTop <= clientHeight + 10
      setShowScrollIndicator(!isScrolledToBottom && messages.length > 2)
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    const container = messagesContainerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      handleScroll() // Check initial state
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [messages.length])

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



  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion)
  }

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ 
              scale: 1,
              y: [0, -5, 0]
            }}
            exit={{ scale: 0 }}
            transition={{
              scale: { duration: 0.3 },
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-30"
            data-chat-element="true"
          >
            <div className="relative group">
              {/* AI Badge */}
              <div className="absolute -top-1 -left-1 bg-yellow-400 text-yellow-900 text-xs font-bold px-1.5 py-0.5 rounded-full shadow-sm z-10">
                AI
              </div>
              
              <Button
                onClick={() => setIsOpen(true)}
                size="lg"
                className="h-12 w-12 sm:h-14 sm:w-14 rounded-full shadow-xl bg-gradient-to-br from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 border-2 border-white animate-pulse hover:animate-none transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/25"
                aria-label="Open AI Travel Advisor Chat"
              >
                <div className="relative flex items-center justify-center">
                  {/* Custom AI Travel Icon */}
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="text-white sm:w-6 sm:h-6"
                  >
                    {/* Robot head */}
                    <rect x="6" y="4" width="12" height="10" rx="2" fill="currentColor" />
                    {/* Eyes */}
                    <circle cx="9" cy="8" r="1" fill="rgb(99 102 241)" />
                    <circle cx="15" cy="8" r="1" fill="rgb(99 102 241)" />
                    {/* Mouth */}
                    <rect x="10" y="11" width="4" height="1" rx="0.5" fill="rgb(99 102 241)" />
                    {/* Antenna */}
                    <line x1="12" y1="4" x2="12" y2="2" stroke="currentColor" strokeWidth="1" />
                    <circle cx="12" cy="2" r="1" fill="rgb(251 191 36)" />
                    {/* Body */}
                    <rect x="8" y="14" width="8" height="6" rx="1" fill="currentColor" />
                    {/* Arms */}
                    <rect x="4" y="15" width="4" height="2" rx="1" fill="currentColor" />
                    <rect x="16" y="15" width="4" height="2" rx="1" fill="currentColor" />
                  </svg>
                  
                  {/* Travel elements */}
                  <Plane className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-blue-200 absolute -bottom-0.5 -right-0.5 rotate-45 animate-bounce" style={{ animationDelay: "0.5s" }} />
                  <Sparkles className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-yellow-300 absolute -top-0.5 -left-0.5 animate-pulse" />
                </div>
              </Button>
              
              {/* Tooltip */}
              <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                Chat with AI Travel Advisor
                <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-slate-900"></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? "auto" : "auto"
            }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className={`fixed z-30 ${
              // Responsive positioning and sizing
              'bottom-20 right-4 sm:bottom-6 sm:right-6 ' +
              'w-[calc(100vw-2rem)] max-w-sm sm:max-w-md lg:max-w-lg ' +
              (isMinimized 
                ? 'h-auto' 
                : 'h-[calc(100vh-8rem)] max-h-[500px]'
              )
            }`}
            data-chat-element="true"
          >
            <Card className="h-full flex flex-col shadow-2xl overflow-hidden border border-slate-200 bg-white">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-2xl">
                <div className="flex items-center space-x-2 min-w-0 flex-1">
                  <div className="relative flex-shrink-0">
                    <Bot className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    <Sparkles className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-yellow-300 absolute -top-0.5 -right-0.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <CardTitle className="text-sm sm:text-lg truncate">AI Travel Advisor</CardTitle>
                    <div className="text-xs text-indigo-100 opacity-75 hidden sm:block">
                      Powered by Bytez AI & Travel Knowledge
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-1 flex-shrink-0">
                  {/* Minimize/Maximize Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="text-white hover:bg-white/20 h-8 w-8"
                    aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
                  >
                    <motion.div
                      animate={{ rotate: isMinimized ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                        <path d="M6 4L2 8h8L6 4z" />
                      </svg>
                    </motion.div>
                  </Button>
                  {/* Close Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20 h-8 w-8"
                  >
                    <X className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>
              </CardHeader>

              <AnimatePresence>
                {!isMinimized && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 flex flex-col overflow-hidden"
                  >
                    <CardContent className="flex-1 flex flex-col p-0 min-h-0 relative">
                      {/* Messages */}
                      <div 
                        ref={messagesContainerRef}
                        className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 min-h-0 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100"
                      >
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
                            <span className="text-xs sm:text-sm">AI is typing...</span>
                          </div>
                        )}
                        <div ref={messagesEndRef} />
                      </div>

                      {/* Gradient overlay to indicate more content */}
                      {showScrollIndicator && (
                        <div className="absolute bottom-16 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                      )}

                      {/* Scroll to bottom button */}
                      {showScrollIndicator && (
                        <div className="absolute bottom-20 right-4 z-10">
                          <Button
                            size="sm"
                            onClick={scrollToBottom}
                            className="rounded-full h-8 w-8 p-0 bg-indigo-500 hover:bg-indigo-600 shadow-lg"
                          >
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                          </Button>
                        </div>
                      )}

                      {/* Suggestions */}
                      {messages.length === 1 && (
                        <div className="px-3 sm:px-4 pb-2">
                          <PromptSuggestions onSuggestionClick={handleSuggestionClick} />
                        </div>
                      )}

                      {/* Input */}
                      <div className="p-3 sm:p-4 border-t border-slate-200 flex-shrink-0">
                        <div className="flex space-x-2">
                          <Input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSendMessage(input)}
                            placeholder="Ask about destinations, planning..."
                            className="flex-1 text-sm"
                          />
                          <Button
                            onClick={() => handleSendMessage(input)}
                            disabled={!input.trim() || isTyping}
                            size="icon"
                            className="flex-shrink-0"
                          >
                            <Send className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}