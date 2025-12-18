import { NextRequest, NextResponse } from 'next/server'
import Bytez from 'bytez.js'

export async function POST(request: NextRequest) {
  let userMessage = ''
  
  try {
    const { message } = await request.json()
    userMessage = message

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }



    if (!process.env.BYTEZ_API_KEY) {
      console.error('Bytez API key not found in environment variables')
      return NextResponse.json({ error: 'Bytez API key not configured' }, { status: 500 })
    }

    console.log('Making request to Bytez API...')
    console.log('API Key present:', !!process.env.BYTEZ_API_KEY)
    
    // Initialize Bytez SDK
    const sdk = new Bytez(process.env.BYTEZ_API_KEY)
    
    // Use the exact model from your original example
    const model = sdk.model("Qwen/Qwen2-0.5B-Instruct")
    
    console.log('Model initialized successfully')

    // Create system prompt for travel advisor
    const systemPrompt = `You are an expert AI travel advisor for TravelAI. You can help with ANY travel destination worldwide and ANY type of travel query.

CORE CAPABILITIES:
- Plan detailed itineraries for ANY destination (domestic or international)
- Provide realistic budget estimates in Indian Rupees (₹)
- Suggest best times to visit any place
- Offer visa requirements and travel documentation advice
- Recommend accommodations, restaurants, and activities
- Help with transportation options and booking tips
- Provide cultural insights and local customs information
- Assist with travel insurance and safety advice

RESPONSE FORMAT:
Always structure your responses with:
1. **Destination Overview** - Brief intro about the place
2. **Suggested Itinerary** - Day-by-day breakdown
3. **Budget Breakdown** - Realistic costs in ₹ for Indian travelers
4. **Best Time to Visit** - Weather and seasonal considerations
5. **Travel Tips** - Visa, documentation, local customs
6. **Recommendations** - Specific places, food, activities

EXAMPLES OF QUERIES YOU CAN HANDLE:
- "Plan 5 days in Japan" → Detailed Tokyo/Kyoto itinerary with budget
- "Best honeymoon destinations in December" → Multiple options with pros/cons
- "Budget backpacking through Europe" → Multi-country route with hostels
- "Family trip to Australia with kids" → Kid-friendly activities and planning
- "Solo female travel to Thailand" → Safety tips and solo-friendly places
- "Adventure activities in New Zealand" → Adrenaline sports and locations

BUDGET GUIDELINES (for 2 people):
- Budget trips: ₹50,000-₹1,50,000
- Mid-range: ₹1,50,000-₹4,00,000  
- Luxury: ₹4,00,000+

Always be enthusiastic, helpful, and provide actionable advice. Ask follow-up questions if you need more details about preferences, budget, or travel style.`

    console.log('Sending request to Bytez model...')
    
    // Send request to Bytez model
    const { error, output } = await model.run([
      {
        role: "system",
        content: systemPrompt
      },
      {
        role: "user",
        content: message
      }
    ])

    console.log('Bytez API Response:')
    console.log('Error:', error)
    console.log('Output:', output)
    console.log('Output type:', typeof output)

    if (error) {
      console.error('Bytez API error details:', error)
      throw new Error(`Bytez API error: ${JSON.stringify(error)}`)
    }
    
    // Extract text content from Bytez response
    let aiMessage = 'Sorry, I could not generate a response. Please try again.'
    
    if (output) {
      if (typeof output === 'string') {
        aiMessage = output
      } else if (output && typeof output === 'object') {
        // Bytez returns object with role and content
        if (output.content) {
          aiMessage = output.content
        } else if (output.text) {
          aiMessage = output.text
        } else if (output.message) {
          aiMessage = output.message
        } else {
          console.log('Unknown output format:', output)
          aiMessage = 'Received response in unknown format.'
        }
      }
    }

    return NextResponse.json({ message: aiMessage })
  } catch (error) {
    console.error('Chat API error details:', error)
    
    // Return the actual error for debugging
    const errorMessage = error instanceof Error ? error.message : String(error)
    
    return NextResponse.json({ 
      message: `AI Model Error: ${errorMessage}\n\nPlease check the console for details. The Bytez API might be having issues or the model name might be incorrect.`,
      error: errorMessage,
      errorDetails: errorMessage,
      success: false
    })
  }
}