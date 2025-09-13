import React, { useEffect, useState } from "react"

function WeatherApp() {
  const [cityWeather, setCityWeather] = useState(null)
  const [city, setCity] = useState("Nagpur")
  const apiKey = "5518ae79f04b03e885ce5b57c11f286a" 
  const getData = async () => {
    if (!city) return
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
      const result = await response.json()
      if (result.main) {
        setCityWeather(result)
      } else {
        setCityWeather(null)
      }
      console.log(result)
      setCity("") 
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          🌤️ Weather App
        </h2>

        {/* Input + Button */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={getData}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg shadow-md transition"
          >
            Get Weather
          </button>
        </div>

        {/* Weather Info */}
        {cityWeather ? (
          <div className="text-center space-y-3">
            <h3 className="text-xl font-semibold text-gray-700">
              {cityWeather.name}, {cityWeather.sys.country}
            </h3>

            {/* Weather Icon */}
            {cityWeather.weather && cityWeather.weather[0] && (
              <img
                src={`http://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`}
                alt={cityWeather.weather[0].description}
                className="mx-auto w-20 h-20"
              />
            )}

            <p className="text-4xl font-bold text-blue-600">
              {cityWeather.main.temp}°C
            </p>
            <p className="capitalize text-gray-600">
              {cityWeather.weather[0].description}
            </p>
            <p className="text-gray-600">
              Max: {cityWeather.main.temp_max}°C | Min: {cityWeather.main.temp_min}°C
            </p>
            <p className="text-gray-600">
              Humidity: {cityWeather.main.humidity}%
            </p>
          </div>
        ) : (
          <p className="text-center text-gray-500">No data available</p>
        )}
      </div>
    </div>
  )
}

export default WeatherApp
