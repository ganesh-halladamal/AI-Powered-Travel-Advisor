"use client"

import { useState } from "react"
import { Calculator, MapPin, Users, Calendar, Plane, Hotel, UtensilsCrossed, Car, Camera } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface BudgetItem {
  category: string
  icon: any
  amount: number
  description: string
}

export default function BudgetCalculatorPage() {
  const [destination, setDestination] = useState("")
  const [duration, setDuration] = useState(7)
  const [travelers, setTravelers] = useState(2)
  const [budgetType, setBudgetType] = useState<"budget" | "mid-range" | "luxury">("mid-range")
  
  const [budgetItems, setBudgetItems] = useState<BudgetItem[]>([
    { category: "Flights", icon: Plane, amount: 0, description: "Round-trip airfare" },
    { category: "Accommodation", icon: Hotel, amount: 0, description: "Hotels/stays per night" },
    { category: "Food", icon: UtensilsCrossed, amount: 0, description: "Meals and dining" },
    { category: "Transportation", icon: Car, amount: 0, description: "Local transport" },
    { category: "Activities", icon: Camera, amount: 0, description: "Tours and experiences" },
  ])

  const calculateBudget = () => {
    const budgetRanges = {
      budget: {
        flights: { domestic: 8000, international: 40000 },
        accommodation: { domestic: 1500, international: 3000 },
        food: { domestic: 800, international: 1500 },
        transport: { domestic: 500, international: 1000 },
        activities: { domestic: 1000, international: 2000 }
      },
      "mid-range": {
        flights: { domestic: 15000, international: 80000 },
        accommodation: { domestic: 3000, international: 6000 },
        food: { domestic: 1500, international: 3000 },
        transport: { domestic: 1000, international: 2000 },
        activities: { domestic: 2000, international: 4000 }
      },
      luxury: {
        flights: { domestic: 25000, international: 150000 },
        accommodation: { domestic: 8000, international: 15000 },
        food: { domestic: 3000, international: 6000 },
        transport: { domestic: 2000, international: 4000 },
        activities: { domestic: 5000, international: 8000 }
      }
    }

    const isInternational = destination.toLowerCase().includes("international") || 
                           destination.toLowerCase().includes("europe") ||
                           destination.toLowerCase().includes("usa") ||
                           destination.toLowerCase().includes("japan")

    const type = isInternational ? "international" : "domestic"
    const ranges = budgetRanges[budgetType]

    const newBudgetItems = [
      { 
        category: "Flights", 
        icon: Plane, 
        amount: ranges.flights[type] * travelers, 
        description: "Round-trip airfare" 
      },
      { 
        category: "Accommodation", 
        icon: Hotel, 
        amount: ranges.accommodation[type] * duration, 
        description: `${duration} nights accommodation` 
      },
      { 
        category: "Food", 
        icon: UtensilsCrossed, 
        amount: ranges.food[type] * duration * travelers, 
        description: "Meals and dining" 
      },
      { 
        category: "Transportation", 
        icon: Car, 
        amount: ranges.transport[type] * duration, 
        description: "Local transport" 
      },
      { 
        category: "Activities", 
        icon: Camera, 
        amount: ranges.activities[type] * duration, 
        description: "Tours and experiences" 
      },
    ]

    setBudgetItems(newBudgetItems)
  }

  const totalBudget = budgetItems.reduce((sum, item) => sum + item.amount, 0)

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Travel Budget Calculator
          </h1>
          <p className="text-lg text-slate-600">
            Plan your trip budget with our intelligent calculator
          </p>
        </div>

        {/* Input Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Trip Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Destination
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="e.g., Goa, Europe, Japan"
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Duration (days)
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    min="1"
                    max="30"
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Number of Travelers
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    type="number"
                    value={travelers}
                    onChange={(e) => setTravelers(Number(e.target.value))}
                    min="1"
                    max="10"
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Budget Type
                </label>
                <select
                  value={budgetType}
                  onChange={(e) => setBudgetType(e.target.value as any)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="budget">Budget Travel</option>
                  <option value="mid-range">Mid-Range</option>
                  <option value="luxury">Luxury</option>
                </select>
              </div>
            </div>

            <Button onClick={calculateBudget} className="w-full">
              Calculate Budget
            </Button>
          </CardContent>
        </Card>

        {/* Budget Breakdown */}
        {totalBudget > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Budget Breakdown</CardTitle>
              <p className="text-sm text-slate-600">
                Estimated costs for {travelers} travelers, {duration} days in {destination || "your destination"}
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {budgetItems.map((item) => (
                  <div key={item.category} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-indigo-100 rounded-lg">
                        <item.icon className="h-4 w-4 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900">{item.category}</h4>
                        <p className="text-sm text-slate-600">{item.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-slate-900">₹{item.amount.toLocaleString()}</p>
                    </div>
                  </div>
                ))}

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between text-lg font-bold">
                    <span>Total Estimated Budget</span>
                    <span className="text-indigo-600">₹{totalBudget.toLocaleString()}</span>
                  </div>
                  <p className="text-sm text-slate-600 mt-1">
                    Per person: ₹{Math.round(totalBudget / travelers).toLocaleString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}