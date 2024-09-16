import { NextRequest, NextResponse } from 'next/server'

export async function DELETE(request: NextRequest) {
  const { id } = await request.json()

  await fetch(`http://localhost:8080/content/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-cache',
  })

  return NextResponse.json({ id })
}
