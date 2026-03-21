"use client"
import React from 'react'

interface providerprops{
    children: React.ReactNode
}

export default function Provider({children}:providerprops) {
  return (
    <div>Provider</div>
  )
}
