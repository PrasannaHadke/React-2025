import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className="flex gap-4 p-4 bg-gray-100">
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          isActive 
            ? "bg-amber-300 px-4 py-2 rounded" 
            : "bg-amber-500 px-4 py-2 rounded text-white"
        }
      >
        Counter
      </NavLink>

      <NavLink 
        to="/bgchanger" 
        className={({ isActive }) => 
          isActive 
            ? "bg-amber-300 px-4 py-2 rounded" 
            : "bg-amber-500 px-4 py-2 rounded text-white"
        }
      >
        BgChanger
      </NavLink>

      <NavLink 
        to="/passwordgenerator" 
        className={({ isActive }) => 
          isActive 
            ? "bg-amber-300 px-4 py-2 rounded" 
            : "bg-amber-500 px-4 py-2 rounded text-white"
        }
      >
        PassGenerator
      </NavLink>
    </div>
  )
}

export default Header
