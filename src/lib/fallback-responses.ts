export function getFallbackResponse(userInput: string): string {
  const input = userInput.toLowerCase()
  
  if (input.includes("goa") || input.includes("beach")) {
    return `🏖️ **Goa Travel Guide**

**Best Time to Visit:** November to March
**Budget:** ₹3,000-₹8,000 per day

**Top Beaches:**
• Baga Beach - Nightlife & water sports
• Anjuna Beach - Hippie culture & flea markets  
• Palolem Beach - Peaceful & scenic

**Must-Try Food:**
• Fish curry rice
• Bebinca (traditional dessert)
• Feni (local spirit)

**4-Day Itinerary:**
• Day 1: Arrive, explore Panaji
• Day 2: North Goa beaches (Baga, Calangute)
• Day 3: South Goa (Palolem, Agonda)
• Day 4: Spice plantation tour

Would you like specific hotel recommendations or more details about any aspect?`
  }
  
  if (input.includes("manali") || input.includes("honeymoon")) {
    return `💕 **Manali Honeymoon Guide**

**Best Time:** April-June, October-November
**Budget:** ₹5,000-₹12,000 per day

**Romantic Spots:**
• Solang Valley - Adventure activities
• Rohtang Pass - Snow activities (seasonal)
• Old Manali - Cozy cafes & walks
• Hadimba Temple - Peaceful surroundings

**Honeymoon Activities:**
• River rafting in Beas
• Paragliding in Solang
• Shopping in Mall Road
• Spa treatments at resorts

**5-Day Romantic Itinerary:**
• Day 1: Arrival, Mall Road evening
• Day 2: Hadimba Temple, Old Manali
• Day 3: Solang Valley adventure
• Day 4: Rohtang Pass (if accessible)
• Day 5: Local sightseeing, departure

Need help finding romantic hotels or specific activity bookings?`
  }

  if (input.includes("kerala") || input.includes("backwater")) {
    return `🌴 **Kerala Travel Plan**

**Best Time:** October to March
**Budget:** ₹4,000-₹10,000 per day

**Must-Visit Places:**
• Alleppey - Houseboat experience
• Munnar - Tea plantations
• Kochi - Colonial heritage
• Thekkady - Wildlife sanctuary

**5-Day Kerala Itinerary:**
• Day 1: Arrive Kochi, explore Fort Kochi
• Day 2: Drive to Munnar, tea plantation tours
• Day 3: Munnar to Thekkady, spice gardens
• Day 4: Thekkady to Alleppey, houseboat
• Day 5: Alleppey backwaters, departure

**Budget Breakdown:**
• Accommodation: ₹15,000
• Transportation: ₹8,000
• Food: ₹6,000
• Activities: ₹5,000
**Total: ₹34,000 for 2 people**

Would you like specific recommendations for houseboats or hotels?`
  }

  if (input.includes("budget") || input.includes("cheap")) {
    return `💰 **Budget Travel Tips**

**Daily Budget Ranges:**
• Backpacker: ₹1,500-₹3,000
• Mid-range: ₹3,000-₹6,000  
• Comfortable: ₹6,000-₹10,000

**Money-Saving Tips:**
• Book trains in advance
• Stay in hostels or homestays
• Eat at local dhabas
• Use public transport
• Travel during off-season

**Budget-Friendly Destinations:**
• Rishikesh - ₹2,000/day
• Pushkar - ₹2,500/day
• Hampi - ₹2,000/day
• Mcleodganj - ₹2,500/day

Which destination interests you? I can create a detailed budget breakdown!`
  }

  if (input.includes("rajasthan") || input.includes("desert")) {
    return `🏰 **Rajasthan Travel Guide**

**Best Time:** October to March
**Budget:** ₹4,000-₹12,000 per day

**Golden Triangle:**
• Jaipur - Pink City, palaces
• Udaipur - City of Lakes
• Jodhpur - Blue City
• Jaisalmer - Desert experience

**7-Day Rajasthan Itinerary:**
• Day 1-2: Jaipur (Amber Fort, City Palace)
• Day 3-4: Udaipur (Lake Palace, boat rides)
• Day 5-6: Jodhpur (Mehrangarh Fort)
• Day 7: Jaisalmer (Desert safari)

**Cultural Experiences:**
• Camel safari in Thar Desert
• Folk dance performances
• Traditional Rajasthani thali
• Heritage hotel stays

Need help with specific city recommendations or desert safari bookings?`
  }

  if (input.includes("mumbai") || input.includes("bollywood")) {
    return `🎬 **Mumbai Travel Guide**

**Best Time:** November to February
**Budget:** ₹4,000-₹10,000 per day

**Must-Visit Places:**
• Gateway of India - Iconic landmark
• Marine Drive - Queen's Necklace
• Bollywood Studios - Film city tours
• Elephanta Caves - Ancient rock art

**Food Paradise:**
• Vada Pav - Street food king
• Pav Bhaji - Mumbai special
• Bhel Puri at Chowpatty
• Fine dining in Bandra

**3-Day Mumbai Itinerary:**
• Day 1: South Mumbai (Gateway, Colaba)
• Day 2: Bollywood tour, Bandra
• Day 3: Elephanta Caves, shopping

**Budget Breakdown (2 people, 3 days):**
• Hotels: ₹12,000
• Food: ₹6,000
• Transport: ₹3,000
• Activities: ₹4,000
**Total: ₹25,000**`
  }

  if (input.includes("ladakh") || input.includes("mountain") || input.includes("adventure")) {
    return `🏔️ **Ladakh Adventure Guide**

**Best Time:** June to September
**Budget:** ₹6,000-₹15,000 per day

**Must-Visit Places:**
• Leh - Main town, acclimatization
• Nubra Valley - Sand dunes, camels
• Pangong Lake - Stunning blue waters
• Khardung La - World's highest motorable pass

**Adventure Activities:**
• River rafting in Zanskar
• Trekking to Markha Valley
• Motorcycle expeditions
• Camping under stars

**6-Day Ladakh Itinerary:**
• Day 1: Arrive Leh, rest (acclimatization)
• Day 2: Leh local sightseeing
• Day 3-4: Nubra Valley via Khardung La
• Day 5: Pangong Lake
• Day 6: Departure

**Important Tips:**
• Carry altitude sickness medication
• Book permits in advance
• Pack warm clothes even in summer

Ready for the ultimate mountain adventure?`
  }

  // Check for specific travel-related keywords
  if (input.includes("plan") || input.includes("itinerary") || input.includes("trip")) {
    return `📋 **Travel Planning Made Easy**

**Tell me about your trip:**
• Where do you want to go?
• How many days do you have?
• What's your budget range?
• What are your interests? (adventure, culture, relaxation, food)

**I can help create:**
• Day-by-day itineraries
• Budget breakdowns
• Hotel recommendations
• Transportation options
• Local experiences

**Popular Planning Options:**
• Weekend getaways (2-3 days)
• Week-long adventures (7 days)
• Extended holidays (10+ days)

**Sample 5-Day Kerala Plan:**
• Day 1: Arrive Kochi, Fort Kochi exploration
• Day 2: Kochi to Munnar, tea plantation tours
• Day 3: Munnar sightseeing, nature walks
• Day 4: Munnar to Alleppey, houseboat experience
• Day 5: Backwater cruise, departure

Share your preferences and I'll create a perfect plan for you! ✈️`
  }

  if (input.includes("hotel") || input.includes("accommodation") || input.includes("stay") || input.includes("resort")) {
    return `🏨 **Accommodation Guide**

**Budget Categories:**
• Budget: ₹1,000-₹3,000/night (hostels, guesthouses)
• Mid-range: ₹3,000-₹8,000/night (3-star hotels)
• Luxury: ₹8,000+/night (4-5 star resorts)

**Types of Stay:**
• Hotels - Full service, amenities
• Homestays - Local experience
• Hostels - Budget-friendly, social
• Resorts - All-inclusive luxury
• Heritage properties - Unique experience

**Top Recommendations by Destination:**
• **Goa:** Beach resorts in Calangute, boutique hotels in Panjim
• **Manali:** Hill station resorts, cozy mountain lodges
• **Kerala:** Backwater resorts, tea plantation stays
• **Rajasthan:** Heritage hotels, palace conversions

**Booking Tips:**
• Book 2-3 weeks in advance
• Check cancellation policies
• Read recent reviews
• Compare prices across platforms

Which destination are you looking for accommodation in? I can suggest specific properties!`
  }

  if (input.includes("food") || input.includes("restaurant") || input.includes("eat") || input.includes("cuisine")) {
    return `🍽️ **Food & Dining Guide**

**Must-Try Indian Cuisines:**
• **North Indian:** Butter chicken, naan, dal makhani
• **South Indian:** Dosa, sambar, coconut curry
• **Coastal:** Fresh seafood, fish curry, prawns
• **Street Food:** Chaat, vada pav, pani puri

**Regional Specialties:**
• **Goa:** Fish curry rice, bebinca, feni
• **Kerala:** Appam, fish molee, banana chips
• **Rajasthan:** Dal baati churma, laal maas
• **Mumbai:** Vada pav, pav bhaji, bhel puri

**Dining Budget (per person):**
• Street food: ₹50-₹150
• Local restaurants: ₹200-₹500
• Mid-range dining: ₹500-₹1,200
• Fine dining: ₹1,200+

**Food Safety Tips:**
• Eat at busy, popular places
• Avoid raw salads at street stalls
• Drink bottled water
• Try local specialties at recommended spots

What cuisine or destination are you curious about?`
  }

  if (input.includes("transport") || input.includes("travel") || input.includes("flight") || input.includes("train") || input.includes("bus")) {
    return `🚗 **Transportation Guide**

**Domestic Travel Options:**
• **Flights:** Fastest, ₹3,000-₹15,000 depending on route
• **Trains:** Comfortable, scenic, ₹500-₹3,000
• **Buses:** Budget-friendly, ₹300-₹1,500
• **Car Rental:** Flexible, ₹2,000-₹4,000/day

**Popular Routes & Options:**
• **Delhi to Goa:** Flight (2.5h) or Train (24h)
• **Mumbai to Kerala:** Flight (1.5h) or Train (14h)
• **Delhi to Manali:** Flight to Chandigarh + Taxi (4h total)

**Booking Tips:**
• Book flights 3-4 weeks in advance
• Train tickets: Book 2 months ahead for popular routes
• Use apps like MakeMyTrip, Goibibo for comparisons
• Consider travel time vs cost

**Local Transportation:**
• **Goa:** Rent a scooter (₹300/day)
• **Kerala:** Auto-rickshaws, taxis
• **Rajasthan:** Hire a driver for multi-city tours
• **Hill stations:** Local taxis, shared cabs

Need specific route recommendations or booking help?`
  }

  // Check for specific activities or interests
  if (input.includes("adventure") || input.includes("trekking") || input.includes("rafting") || input.includes("sports")) {
    return `🏔️ **Adventure Travel Guide**

**Top Adventure Destinations:**
• **Rishikesh:** River rafting, bungee jumping, camping
• **Manali:** Paragliding, skiing, mountain biking
• **Ladakh:** High-altitude trekking, motorcycle tours
• **Goa:** Water sports, scuba diving, parasailing

**Popular Adventure Activities:**
• **Trekking:** Himalayas, Western Ghats (₹2,000-₹8,000)
• **River Rafting:** Rishikesh, Dandeli (₹1,500-₹3,000)
• **Paragliding:** Bir Billing, Solang Valley (₹2,500-₹4,000)
• **Scuba Diving:** Andaman, Goa (₹3,500-₹6,000)

**Best Seasons:**
• Mountain adventures: April-June, Sept-Nov
• Water sports: Oct-March
• Trekking: March-May, Sept-Nov

Ready for an adrenaline rush? Tell me what kind of adventure excites you!`
  }

  if (input.includes("couple") || input.includes("romantic") || input.includes("honeymoon") || input.includes("valentine")) {
    return `💕 **Romantic Getaways**

**Top Honeymoon Destinations:**
• **Manali:** Cozy mountain retreats, snow activities
• **Kerala:** Romantic houseboats, serene backwaters  
• **Goa:** Beach sunsets, luxury resorts
• **Udaipur:** Palace hotels, lake views
• **Shimla:** Colonial charm, toy train rides

**Romantic Experiences:**
• **Houseboat stay** in Kerala backwaters
• **Desert camping** under stars in Rajasthan
• **Sunset cruise** in Goa
• **Spa treatments** for couples
• **Private dining** with mountain/ocean views

**Budget for Couples (5 days):**
• Budget romantic: ₹25,000-₹40,000
• Mid-range luxury: ₹50,000-₹80,000
• Premium experience: ₹1,00,000+

**Romantic Activities:**
• Candlelight dinners on the beach
• Couples spa sessions
• Private photography sessions
• Sunset/sunrise viewing
• Local cultural experiences together

Planning something special? Tell me your preferences!`
  }

  if (input.includes("family") || input.includes("kids") || input.includes("children") || input.includes("parents")) {
    return `👨‍👩‍👧‍👦 **Family Travel Guide**

**Family-Friendly Destinations:**
• **Goa:** Beach fun, water sports, easy travel
• **Kerala:** Houseboat experience, wildlife sanctuaries
• **Rajasthan:** Palaces, camel rides, cultural shows
• **Shimla/Manali:** Pleasant weather, toy trains
• **Mumbai:** Bollywood tours, theme parks

**Kid-Friendly Activities:**
• **Beach activities:** Sand castles, water sports
• **Wildlife safaris:** Spotting animals, nature walks
• **Cultural experiences:** Folk dances, puppet shows
• **Adventure parks:** Zip-lining, rope courses
• **Educational tours:** Museums, historical sites

**Family Travel Tips:**
• Book connecting rooms or family suites
• Pack entertainment for travel time
• Choose destinations with medical facilities
• Plan rest days between activities
• Carry snacks and comfort items

**Budget Planning (Family of 4, 5 days):**
• Budget trip: ₹40,000-₹60,000
• Comfortable travel: ₹80,000-₹1,20,000
• Luxury family vacation: ₹1,50,000+

What ages are the kids? I can suggest age-appropriate activities!`
  }

  return `I'm your AI travel advisor! I can help you with:

🌍 **Travel Planning:**
• Destination recommendations
• Detailed itineraries  
• Budget breakdowns
• Best time to visit advice

💡 **Popular Destinations:**
• Goa - Beach paradise
• Manali - Mountain retreat
• Kerala - Backwater bliss
• Rajasthan - Royal heritage
• Ladakh - High altitude adventure
• Mumbai - Bollywood & business

**Quick Examples:**
• "Plan a 5-day Kerala trip for ₹50,000"
• "Best time to visit Manali for honeymoon?"
• "Budget breakdown for Goa family vacation"
• "Adventure activities in Rishikesh"

**How to get started:**
• Tell me where you want to go
• Share your budget range
• Mention trip duration  
• Let me know your interests

What destination are you curious about? I'd love to help plan your next adventure! 🌟`
}