"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowRight, MapPin, Sparkles, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SearchBar } from "@/components/search-bar"
import { DestinationCard } from "@/components/destination-card"

const featuredDestinations = [
  {
    id: "goa",
    name: "Goa",
    location: "India",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500&h=300&fit=crop",
    rating: 4.6,
    reviewCount: 2847,
    description: "Beautiful beaches, vibrant nightlife, and Portuguese heritage make Goa a perfect tropical getaway.",
    price: "₹3,500/day",
    tags: ["Beach", "Nightlife", "Culture"]
  },
  {
    id: "manali",
    name: "Manali",
    location: "Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
    rating: 4.4,
    reviewCount: 1923,
    description: "Snow-capped mountains, adventure sports, and cozy hill station vibes perfect for couples and families.",
    price: "₹4,200/day",
    tags: ["Mountains", "Adventure", "Honeymoon"]
  },
  {
    id: "kerala",
    name: "Kerala Backwaters",
    location: "Kerala",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500&h=300&fit=crop",
    rating: 4.7,
    reviewCount: 1654,
    description: "Serene backwaters, lush greenery, and traditional houseboats offer a unique peaceful experience.",
    price: "₹5,000/day",
    tags: ["Nature", "Peaceful", "Unique"]
  }
]

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Planning",
    description: "Get personalized itineraries based on your preferences, budget, and travel style."
  },
  {
    icon: MapPin,
    title: "Curated Destinations",
    description: "Discover hidden gems and popular spots with detailed guides and local insights."
  },
  {
    icon: Users,
    title: "Travel Community",
    description: "Connect with fellow travelers and get real reviews from verified visitors."
  },
  {
    icon: Clock,
    title: "Real-time Updates",
    description: "Stay informed with current weather, events, and travel conditions."
  }
]

export default function Home() {
  const router = useRouter()

  const handleSearch = (query: string) => {
    // Navigate to explore page with search query
    router.push(`/explore?search=${encodeURIComponent(query)}`)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-indigo-50 py-20 px-4">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Your AI Travel
            <span className="text-indigo-600"> Companion</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Discover amazing destinations, plan perfect trips, and get personalized recommendations 
            with our intelligent travel advisor.
          </p>
          
          <div className="mb-8 flex justify-center px-4 sm:px-0">
            <SearchBar 
              placeholder="Where would you like to go? (e.g., Goa beaches, Manali honeymoon...)"
              onSearch={handleSearch}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ai-planner">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                Start Planning with AI
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/explore">
              <Button variant="outline" size="lg">
                Explore Destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Featured Destinations
            </h2>
            <p className="text-slate-600">
              Discover our most popular travel destinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.id} {...destination} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/explore">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why Choose TravelAI?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Experience the future of travel planning with our intelligent features designed to make your journey unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mx-auto w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-indigo-600">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Let our AI travel advisor help you plan the perfect trip tailored to your preferences and budget.
          </p>
          <Link href="/ai-planner">
            <Button size="lg" variant="secondary">
              Chat with AI Advisor
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}