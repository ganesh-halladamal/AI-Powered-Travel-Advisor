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

**How to get started:**
• Tell me where you want to go
• Share your budget range
• Mention trip duration
• Let me know your interests

What destination are you curious about? I'd love to help plan your next adventure! 🌟`
}