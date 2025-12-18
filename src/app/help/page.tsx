"use client"

import { useState } from "react"
import { Search, HelpCircle, MessageCircle, Mail, Phone, ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "How do I use the AI Travel Planner?",
        answer: "Simply go to the AI Planner page, describe your travel preferences, budget, and duration. Our AI will create a personalized itinerary for you with recommendations for destinations, activities, and accommodations."
      },
      {
        question: "Is TravelAI free to use?",
        answer: "Yes! TravelAI is completely free to use. You can access all features including the AI planner, destination guides, and travel tips without any cost."
      },
      {
        question: "How accurate are the budget estimates?",
        answer: "Our budget estimates are based on current market rates and user data. They provide a good baseline, but actual costs may vary depending on your specific choices, travel dates, and booking timing."
      }
    ]
  },
  {
    category: "AI Travel Planner",
    questions: [
      {
        question: "What information does the AI need to create my itinerary?",
        answer: "The AI works best when you provide: destination preferences, travel dates or duration, budget range, number of travelers, interests (adventure, culture, relaxation), and any specific requirements or constraints."
      },
      {
        question: "Can I modify the AI-generated itinerary?",
        answer: "While the AI provides suggestions, you can use them as a starting point and modify according to your preferences. The AI can also provide alternative suggestions if you ask for specific changes."
      },
      {
        question: "Does the AI work for international destinations?",
        answer: "Yes! Our AI can help plan trips to destinations worldwide, including visa requirements, best times to visit, cultural tips, and budget estimates for international travel."
      }
    ]
  },
  {
    category: "Bookings & Reservations",
    questions: [
      {
        question: "Can I book hotels and flights through TravelAI?",
        answer: "Currently, TravelAI provides recommendations and guidance. For actual bookings, we direct you to trusted booking platforms and official websites where you can complete your reservations."
      },
      {
        question: "Do you provide real-time availability?",
        answer: "Our recommendations are based on general availability patterns. For real-time availability and current prices, we recommend checking directly with booking platforms or contacting accommodations."
      }
    ]
  },
  {
    category: "Technical Support",
    questions: [
      {
        question: "The AI chatbot is not responding. What should I do?",
        answer: "Try refreshing the page first. If the issue persists, the AI service might be temporarily busy. You can still access our comprehensive travel guides and fallback recommendations."
      },
      {
        question: "Can I use TravelAI on mobile devices?",
        answer: "Yes! TravelAI is fully responsive and works great on mobile devices. You can access all features including the AI planner and chat functionality on your smartphone or tablet."
      },
      {
        question: "How do I report a bug or technical issue?",
        answer: "You can report technical issues through our contact form or email us directly. Please include details about the issue, your device/browser, and steps to reproduce the problem."
      }
    ]
  }
]

const contactOptions = [
  {
    title: "Email Support",
    description: "Get help via email within 24 hours",
    icon: Mail,
    contact: "support@travelai.com",
    action: "Send Email"
  },
  {
    title: "Live Chat",
    description: "Chat with our AI assistant anytime",
    icon: MessageCircle,
    contact: "Available 24/7",
    action: "Start Chat"
  },
  {
    title: "Phone Support",
    description: "Speak with our team (Mon-Fri, 9AM-6PM IST)",
    icon: Phone,
    contact: "+91-XXX-XXX-XXXX",
    action: "Call Now"
  }
]

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null)

  const filteredFAQs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  const toggleFAQ = (questionId: string) => {
    setExpandedFAQ(expandedFAQ === questionId ? null : questionId)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Help Center
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Find answers to common questions or get in touch with our support team
          </p>
        </div>

        {/* Search */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Search for help topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactOptions.map((option) => (
            <Card key={option.title} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mx-auto w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center mb-4">
                  <option.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{option.title}</h3>
                <p className="text-sm text-slate-600 mb-3">{option.description}</p>
                <p className="text-sm font-medium text-slate-900 mb-4">{option.contact}</p>
                <Button variant="outline" size="sm">
                  {option.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQs */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center">
            Frequently Asked Questions
          </h2>

          {filteredFAQs.length === 0 ? (
            <Card>
              <CardContent className="pt-6 text-center">
                <HelpCircle className="mx-auto h-12 w-12 text-slate-400 mb-4" />
                <p className="text-slate-600">No results found for "{searchQuery}"</p>
                <p className="text-sm text-slate-500 mt-2">
                  Try different keywords or browse our categories below
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredFAQs.map((category) => (
              <Card key={category.category}>
                <CardHeader>
                  <CardTitle>{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.questions.map((faq, index) => {
                      const faqId = `${category.category}-${index}`
                      const isExpanded = expandedFAQ === faqId
                      
                      return (
                        <div key={index} className="border border-slate-200 rounded-lg">
                          <button
                            onClick={() => toggleFAQ(faqId)}
                            className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                          >
                            <span className="font-medium text-slate-900">{faq.question}</span>
                            {isExpanded ? (
                              <ChevronUp className="h-4 w-4 text-slate-500" />
                            ) : (
                              <ChevronDown className="h-4 w-4 text-slate-500" />
                            )}
                          </button>
                          {isExpanded && (
                            <div className="px-4 pb-3 border-t border-slate-200">
                              <p className="text-slate-600 pt-3">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Still Need Help */}
        <Card className="mt-12">
          <CardContent className="pt-6 text-center">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Still need help?
            </h3>
            <p className="text-slate-600 mb-4">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <Button>
              Contact Support
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}