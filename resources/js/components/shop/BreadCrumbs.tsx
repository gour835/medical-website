import { Link } from '@inertiajs/react'
import React from 'react'

function BreadCrumbs() {
  return (
    <div className="bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex text-sm font-medium text-slate-500">
          <Link className="hover:text-slate-900" href="/">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">Shop</span>
        </nav>
      </div>
    </div>
  )
}

export default BreadCrumbs