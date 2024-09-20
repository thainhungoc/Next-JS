"use client";
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function page() {
    const searchParams = useSearchParams();
    const search = searchParams.get("search");
  return (
    <div>
      <h3 className=""> Search value: {search}</h3>
      
    </div>
  )
}
