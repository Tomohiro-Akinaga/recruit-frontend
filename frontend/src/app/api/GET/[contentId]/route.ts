import { NextRequest, NextResponse } from 'next/server'

interface Params {
  contentId: number
}

export async function GET(request: NextRequest, { params }: { params: Params }) {
  const { contentId } = params
  const response = await fetch(`http://localhost:8080/content/${contentId}`, {
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',
  })

  const data = await response.json()

  return NextResponse.json({ data: data })
}
