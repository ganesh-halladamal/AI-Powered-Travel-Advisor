import Image from "next/image"
import { notFound } from "next/navigation"
import { MapPin, Star, Bookmark, Share2, Calendar, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RatingBadge } from "@/components/rating-badge"

// Mock data - in real app, this would come from a database
const destinations = {
  goa: {
    id: "goa",
    name: "Goa",
    location: "India",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200&h=600&fit=crop",
    rating: 4.6,
    reviewCount: 2847,
    description: "Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area's tropical spice plantations.",
    highlights: [
      "Beautiful beaches with golden sand",
      "Vibrant nightlife and beach parties", 
      "Portuguese colonial architecture",
      "Delicious seafood and local cuisine",
      "Water sports and adventure activities"
    ],
    bestTime: "November to March",
    budget: "₹3,000 - ₹8,000 per day",
    duration: "3-7 days",
    hotels: [
      {
        name: "The Leela Goa",
        rating: 4.8,
        price: "₹12,000/night",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop"
      },
      {
        name: "Taj Exotica Resort",
        rating: 4.7,
        price: "₹15,000/night", 
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=300&h=200&fit=crop"
      }
    ],
    restaurants: [
      {
        name: "Fisherman's Wharf",
        cuisine: "Seafood, Goan",
        rating: 4.5,
        price: "₹1,200 for two"
      },
      {
        name: "Thalassa",
        cuisine: "Greek, Continental",
        rating: 4.6,
        price: "₹2,000 for two"
      }
    ],
    attractions: [
      {
        name: "Baga Beach",
        type: "Beach",
        rating: 4.3,
        description: "Popular beach known for water sports and nightlife"
      },
      {
        name: "Basilica of Bom Jesus",
        type: "Heritage",
        rating: 4.5,
        description: "UNESCO World Heritage Site with Portuguese architecture"
      }
    ]
  }
}

interface PageProps {
  params: { slug: string }
}

export default function DestinationPage({ params }: PageProps) {
  const destination = destinations[params.slug as keyof typeof destinations]
  
  if (!destination) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="h-5 w-5" />
              <span>{destination.location}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{destination.name}</h1>
            <div className="flex items-center gap-4">
              <RatingBadge 
                rating={destination.rating} 
                reviewCount={destination.reviewCount}
                size="md"
              />
              <div className="flex gap-2">
                <Button variant="secondary" size="sm">
                  <Bookmark className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button variant="secondary" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <Calendar className="h-8 w-8 text-indigo-600" />
              <div>
                <p className="font-medium">Best Time</p>
                <p className="text-sm text-slate-600">{destination.bestTime}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <DollarSign className="h-8 w-8 text-indigo-600" />
              <div>
                <p className="font-medium">Budget</p>
                <p className="text-sm text-slate-600">{destination.budget}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <MapPin className="h-8 w-8 text-indigo-600" />
              <div>
                <p className="font-medium">Duration</p>
                <p className="text-sm text-slate-600">{destination.duration}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="hotels">Hotels</TabsTrigger>
            <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
            <TabsTrigger value="attractions">Attractions</TabsTrigger>
            <TabsTrigger value="ai-suggestions">AI Suggestions</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-4">About {destination.name}</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {destination.description}
                </p>
                
                <h3 className="text-xl font-semibold mb-3">Highlights</h3>
                <ul className="space-y-2">
                  {destination.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Star className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Plan Your Visit</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full">
                      Get AI Itinerary
                    </Button>
                    <Button variant="outline" className="w-full">
                      Find Hotels
                    </Button>
                    <Button variant="outline" className="w-full">
                      Book Activities
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="hotels" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {destination.hotels.map((hotel, index) => (
                <Card key={index}>
                  <div className="aspect-video relative overflow-hidden rounded-t-2xl">
                    <Image
                      src={hotel.image}
                      alt={hotel.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold">{hotel.name}</h3>
                      <RatingBadge rating={hotel.rating} showReviews={false} />
                    </div>
                    <p className="text-slate-600 font-medium">{hotel.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="restaurants" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {destination.restaurants.map((restaurant, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold">{restaurant.name}</h3>
                      <RatingBadge rating={restaurant.rating} showReviews={false} />
                    </div>
                    <p className="text-slate-600 mb-1">{restaurant.cuisine}</p>
                    <p className="text-slate-800 font-medium">{restaurant.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="attractions" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {destination.attractions.map((attraction, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold">{attraction.name}</h3>
                        <span className="text-sm text-indigo-600 font-medium">{attraction.type}</span>
                      </div>
                      <RatingBadge rating={attraction.rating} showReviews={false} />
                    </div>
                    <p className="text-slate-600">{attraction.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ai-suggestions" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-indigo-50 rounded-xl">
                    <h4 className="font-medium text-indigo-900 mb-2">Perfect 4-Day Itinerary</h4>
                    <p className="text-indigo-700 text-sm">
                      Based on your interests, I recommend starting with North Goa beaches, 
                      exploring Old Goa heritage sites, enjoying South Goa's peaceful beaches, 
                      and ending with a spice plantation tour.
                    </p>
                  </div>
                  <div className="p-4 bg-emerald-50 rounded-xl">
                    <h4 className="font-medium text-emerald-900 mb-2">Budget Optimization</h4>
                    <p className="text-emerald-700 text-sm">
                      Stay in North Goa for better nightlife access, eat at beach shacks for 
                      authentic experience, and book water sports packages for better deals.
                    </p>
                  </div>
                  <Button className="w-full">
                    Get Detailed AI Plan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(destinations).map((slug) => ({
    slug,
  }))
}