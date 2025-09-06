import React from 'react'

function Card({ details }) {
  return (
    <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100 hover:scale-105 transition-transform duration-300">
      <img
        src={details.image || "https://source.unsplash.com/301x301/?random"}
        alt={details.name}
        className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-wide">{details.name}</h2>
          <p className="text-gray-400">{details.details}</p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-600 hover:bg-blue-700 active:scale-95 text-white transition"
        >
          Read more
        </button>
      </div>
    </div>
  )
}

export default Card
