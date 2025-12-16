import { User, MapPin, Calendar, Heart, Settings } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex items-center gap-6">
              <div className="h-20 w-20 bg-indigo-500 rounded-full flex items-center justify-center">
                <User className="h-10 w-10 text-white" />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-slate-900 mb-1">John Traveler</h1>
                <p className="text-slate-600 mb-2">Adventure enthusiast • 15 trips completed</p>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    Mumbai, India
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Member since Jan 2024
                  </div>
                </div>
              </div>
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Profile Tabs */}
        <Tabs defaultValue="trips" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="trips">My Trips</TabsTrigger>
            <TabsTrigger value="bookmarks">Bookmarks</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>

          <TabsContent value="trips" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Upcoming Trips</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border border-slate-200 rounded-xl">
                      <h4 className="font-medium text-slate-900">Goa Beach Holiday</h4>
                      <p className="text-sm text-slate-600">Dec 25-30, 2024</p>
                      <p className="text-xs text-indigo-600 mt-1">5 days • ₹45,000 budget</p>
                    </div>
                    <div className="p-4 border border-slate-200 rounded-xl">
                      <h4 className="font-medium text-slate-900">Manali Honeymoon</h4>
                      <p className="text-sm text-slate-600">Feb 14-20, 2025</p>
                      <p className="text-xs text-indigo-600 mt-1">6 days • ₹65,000 budget</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recent Trips</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border border-slate-200 rounded-xl">
                      <h4 className="font-medium text-slate-900">Kerala Backwaters</h4>
                      <p className="text-sm text-slate-600">Nov 10-15, 2024</p>
                      <p className="text-xs text-emerald-600 mt-1">Completed • Rated 5★</p>
                    </div>
                    <div className="p-4 border border-slate-200 rounded-xl">
                      <h4 className="font-medium text-slate-900">Rajasthan Heritage Tour</h4>
                      <p className="text-sm text-slate-600">Sep 5-12, 2024</p>
                      <p className="text-xs text-emerald-600 mt-1">Completed • Rated 4★</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="bookmarks" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["Ladakh Adventure", "Andaman Islands", "Spiti Valley", "Coorg Coffee Estates"].map((place) => (
                <Card key={place}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-slate-900">{place}</h4>
                      <Heart className="h-4 w-4 text-red-500 fill-current" />
                    </div>
                    <p className="text-sm text-slate-600">Saved for future planning</p>
                    <Button variant="outline" size="sm" className="mt-3 w-full">
                      Plan Trip
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              {[
                { place: "Kerala Backwaters", rating: 5, review: "Absolutely magical experience! The houseboat was comfortable and the scenery was breathtaking." },
                { place: "Rajasthan Heritage Tour", rating: 4, review: "Great cultural experience with amazing palaces and forts. Food was excellent throughout the trip." }
              ].map((review, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-slate-900">{review.place}</h4>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className={`text-sm ${i < review.rating ? 'text-yellow-500' : 'text-slate-300'}`}>★</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-slate-600">{review.review}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="preferences" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Travel Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700">Preferred Budget Range</label>
                    <p className="text-slate-600">₹30,000 - ₹80,000 per trip</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700">Travel Style</label>
                    <p className="text-slate-600">Adventure, Culture, Nature</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700">Group Size</label>
                    <p className="text-slate-600">2-4 people</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Notification Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-700">Trip Reminders</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-700">Deal Alerts</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-700">AI Suggestions</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}