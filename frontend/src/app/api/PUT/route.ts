import { NextRequest, NextResponse } from 'next/server'

export async function PUT(request: NextRequest) {
  const { id, title, body } = await request.json()

  try {
    const response = await fetch(`http://localhost:8080/content/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-cache',
      body: JSON.stringify({ title, body }),
    })
    const data = await response.json()

    return NextResponse.json({ data: data })
  } catch (error) {
    return NextResponse.json({ error: error })
  }
}
