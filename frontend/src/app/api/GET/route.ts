import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const response = await fetch('http://localhost:8080/content', {
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',
  })

  const data = await response.json()

  return NextResponse.json({ data: data })
}
