import React from 'react'
import styles from './bai1.module.css';


export default function page() {
  return (
    <div>
      <form>
  <label className="block">
    <span className="block text-sm font-medium text-orange-500">Email</span>
    <input type="email" className="peer ..."/>
    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid email address.
    </p>
  </label>
</form>
    </div>
  )
}
