import OpenAI from 'openai'
import { NextResponse } from 'next/server'


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
})

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()
    
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages,
      temperature: 1,
      max_tokens: 1024,
      top_p: 1,
      stream: false,
      stop: null
    })

    console.log('messages', messages);
    console.log('assistant response:', completion.choices[0].message);

    return NextResponse.json(completion.choices[0].message)
  } catch (error) {
    console.error('OpenAI API Error:', error)
    return NextResponse.json(
      { error: 'AI Service Unavailable' },
      { status: 503 }
    )
  }
}
