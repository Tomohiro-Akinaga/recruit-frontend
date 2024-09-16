import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const response = await fetch('http://localhost:8080/content', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',
    body: JSON.stringify({
      title: 'タイトル',
      body: 'コンテンツ',
    }),
  })
  const data = await response.json()
  return NextResponse.json({ data: data })
}
