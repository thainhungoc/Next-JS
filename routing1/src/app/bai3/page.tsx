"use client";

import { useRouter } from 'next/navigation'
import React from 'react'

export default function page() {
    const router = useRouter();
    const handleSearch = () =>{
        const newSearchValue = 'new ';
        router.push(`/?search=${encodeURIComponent(newSearchValue)}`);
    };

  return (
    <div>
        <h1>Bai3</h1>
        <button onClick={handleSearch}>Search</button>
    </div>
  )
}
