import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  try {
    console.log('Testing OpenRouter API...')
    console.log('API Key present:', !!process.env.OPENROUTER_API_KEY)
    console.log('API Key length:', process.env.OPENROUTER_API_KEY?.length)
    
    if (!process.env.OPENROUTER_API_KEY) {
      return NextResponse.json({ error: 'API key not found' }, { status: 500 })
    }

    const response = await fetch('https://openrouter.ai/api/v1/models', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
      }
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`OpenRouter API error: ${response.status} - ${errorText}`)
      return NextResponse.json({ 
        error: `API test failed: ${response.status}`,
        details: errorText 
      }, { status: response.status })
    }

    const data = await response.json()
    return NextResponse.json({ 
      success: true, 
      message: 'API key is working',
      modelCount: data.data?.length || 0
    })
  } catch (error) {
    console.error('Test API error:', error)
    return NextResponse.json({ 
      error: 'Test failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}