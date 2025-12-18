"use client"

import { Lightbulb, Plane, Shield, CreditCard, MapPin, Clock, Users, Camera } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const travelTips = [
  {
    category: "Planning & Booking",
    icon: Plane,
    color: "bg-blue-100 text-blue-600",
    tips: [
      {
        title: "Book flights 2-3 months in advance",
        description: "For domestic flights, book 4-6 weeks ahead. For international, 2-3 months gives best prices."
      },
      {
        title: "Use incognito mode for bookings",
        description: "Airlines track your searches and may increase prices. Use private browsing to avoid this."
      },
      {
        title: "Compare prices across platforms",
        description: "Check multiple booking sites, airline websites, and travel aggregators for best deals."
      },
      {
        title: "Consider nearby airports",
        description: "Flying to/from nearby cities can sometimes save significant money on airfare."
      }
    ]
  },
  {
    category: "Safety & Security",
    icon: Shield,
    color: "bg-green-100 text-green-600",
    tips: [
      {
        title: "Keep digital copies of documents",
        description: "Store passport, visa, and ID copies in cloud storage and email them to yourself."
      },
      {
        title: "Register with your embassy",
        description: "For international travel, register with your country's embassy in the destination."
      },
      {
        title: "Get travel insurance",
        description: "Protect yourself against medical emergencies, trip cancellations, and lost luggage."
      },
      {
        title: "Share your itinerary",
        description: "Leave detailed travel plans with family or friends, including accommodation details."
      }
    ]
  },
  {
    category: "Money & Budgeting",
    icon: CreditCard,
    color: "bg-yellow-100 text-yellow-600",
    tips: [
      {
        title: "Notify your bank before traveling",
        description: "Inform your bank about travel dates to avoid card blocks in foreign countries."
      },
      {
        title: "Carry multiple payment methods",
        description: "Bring cash, debit card, credit card, and consider digital wallets as backup."
      },
      {
        title: "Use local ATMs wisely",
        description: "Withdraw larger amounts less frequently to minimize ATM fees."
      },
      {
        title: "Track your spending",
        description: "Use apps or keep receipts to monitor expenses and stay within budget."
      }
    ]
  },
  {
    category: "Packing & Preparation",
    icon: MapPin,
    color: "bg-purple-100 text-purple-600",
    tips: [
      {
        title: "Pack light and smart",
        description: "Bring versatile clothing that can be mixed and matched. Stick to carry-on if possible."
      },
      {
        title: "Check weather forecasts",
        description: "Pack appropriate clothing for the destination's weather during your visit."
      },
      {
        title: "Bring essential medications",
        description: "Pack prescription medicines in original containers with extra supplies."
      },
      {
        title: "Download offline maps",
        description: "Save maps and important information offline in case of poor internet connectivity."
      }
    ]
  },
  {
    category: "During Travel",
    icon: Clock,
    color: "bg-red-100 text-red-600",
    tips: [
      {
        title: "Arrive early at airports",
        description: "Domestic: 2 hours early. International: 3 hours early. Account for traffic and delays."
      },
      {
        title: "Stay hydrated",
        description: "Drink plenty of water, especially during flights and in hot climates."
      },
      {
        title: "Respect local customs",
        description: "Research local etiquette, dress codes, and cultural norms before visiting."
      },
      {
        title: "Keep emergency contacts handy",
        description: "Save local emergency numbers, embassy contacts, and your accommodation details."
      }
    ]
  },
  {
    category: "Cultural & Social",
    icon: Users,
    color: "bg-indigo-100 text-indigo-600",
    tips: [
      {
        title: "Learn basic local phrases",
        description: "Hello, thank you, please, and excuse me in the local language go a long way."
      },
      {
        title: "Be open to new experiences",
        description: "Try local food, participate in cultural activities, and interact with locals."
      },
      {
        title: "Dress appropriately",
        description: "Research dress codes for religious sites, restaurants, and cultural attractions."
      },
      {
        title: "Tip according to local customs",
        description: "Research tipping practices in your destination to avoid over or under-tipping."
      }
    ]
  }
]

const quickTips = [
  "Always carry a portable charger for your devices",
  "Take photos of your luggage before checking in",
  "Keep snacks handy for long journeys",
  "Download translation apps for language barriers",
  "Pack a first-aid kit with basic medicines",
  "Carry wet wipes and hand sanitizer",
  "Keep important phone numbers written down",
  "Pack an extra set of clothes in carry-on"
]

export default function TravelTipsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Travel Tips & Advice
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Essential travel tips to make your journey smooth, safe, and memorable
          </p>
        </div>

        {/* Quick Tips */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              Quick Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {quickTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-2 p-3 bg-yellow-50 rounded-lg">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-slate-700">{tip}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Detailed Tips by Category */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {travelTips.map((category) => (
            <Card key={category.category} className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    <category.icon className="h-5 w-5" />
                  </div>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.tips.map((tip, index) => (
                    <div key={index} className="border-l-4 border-slate-200 pl-4">
                      <h4 className="font-semibold text-slate-900 mb-1">{tip.title}</h4>
                      <p className="text-sm text-slate-600">{tip.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Contacts */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-red-500" />
              Important Emergency Numbers (India)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-slate-900">Police</h4>
                <p className="text-2xl font-bold text-red-600">100</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-slate-900">Medical Emergency</h4>
                <p className="text-2xl font-bold text-blue-600">108</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold text-slate-900">Fire Department</h4>
                <p className="text-2xl font-bold text-orange-600">101</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}