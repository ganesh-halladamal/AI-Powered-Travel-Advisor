import { NextRequest, NextResponse } from 'next/server'
import { getFallbackResponse } from '@/lib/fallback-responses'

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    if (!process.env.OPENROUTER_API_KEY) {
      console.error('OpenRouter API key not found in environment variables')
      return NextResponse.json({ error: 'OpenRouter API key not configured' }, { status: 500 })
    }

    console.log('Making request to OpenRouter API...')
    console.log('API Key present:', !!process.env.OPENROUTER_API_KEY)
    console.log('API Key length:', process.env.OPENROUTER_API_KEY.length)
    
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'http://localhost:3000',
        'X-Title': 'TravelAI Assistant'
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-3.2-3b-instruct:free',
        messages: [
          {
            role: 'system',
            content: `You are a helpful AI travel advisor for TravelAI, a travel planning platform. You specialize in:

- Creating detailed travel itineraries
- Recommending destinations, hotels, restaurants, and attractions
- Providing budget breakdowns and cost estimates
- Suggesting best times to visit places
- Offering travel tips and local insights
- Helping with trip planning based on preferences, budget, and duration

Always provide helpful, accurate, and detailed travel advice. Format your responses with clear sections, bullet points, and practical information. Include specific recommendations with prices in Indian Rupees (₹) when relevant. Be friendly and enthusiastic about travel while being practical and informative.

Focus on destinations in India and popular international destinations for Indian travelers.`
          },
          {
            role: 'user',
            content: message
          }
        ],
        temperature: 0.7,
        max_tokens: 1000
      })
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`OpenRouter API error: ${response.status} - ${errorText}`)
      throw new Error(`OpenRouter API error: ${response.status} - ${errorText}`)
    }

    const data = await response.json()
    console.log('OpenRouter response:', data)
    
    const aiMessage = data.choices[0]?.message?.content || 'Sorry, I could not generate a response. Please try again.'

    return NextResponse.json({ message: aiMessage })
  } catch (error) {
    console.error('Chat API error:', error)
    
    // Use intelligent fallback response based on user input
    const { message: userMessage } = await request.json().catch(() => ({ message: '' }))
    const fallbackResponse = getFallbackResponse(userMessage || '')

    // Check if it's a rate limit error
    const isRateLimit = error instanceof Error && error.message.includes('429')
    const noteMessage = isRateLimit 
      ? "\n\n*Note: AI service is temporarily busy. Using my knowledge base to help you!*"
      : "\n\n*Note: Using offline knowledge base. Some features may be limited.*"

    return NextResponse.json({ 
      message: fallbackResponse + noteMessage,
      fallback: true,
      rateLimited: isRateLimit
    })
  }
}