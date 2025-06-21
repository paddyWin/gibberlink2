"use client"
import React from 'react'
import dynamic from 'next/dynamic'

const ConvAI = dynamic(() => import('./ConvAI').then(mod => ({ default: mod.ConvAI })), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="text-white">Loading...</div>
    </div>
  )
})

export default function ConvAIWrapper() {
  return <ConvAI />
}
