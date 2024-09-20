import React from 'react'

export default function page() {
  return (
    <div>
      <div className="relative">
  <select className="block w-full px-4 py-2 pr-8 leading-tight bg-white border border-red-950 rounded appearance-none focus:outline-none focus:bg-white focus:border-blue-500">
    <option value="">Sex</option>
    <option value="one">male</option>
    <option value="two">Famale</option>
    <option value="three">other</option>
  </select>
  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l5 5a1 1 0 01-1.414 1.414L10 5.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5A1 1 0 0110 3z" clip-rule="evenodd" />
    </svg>
  </div>
</div>

    </div>
  )
}
