"use client"

import { Check, Circle } from "lucide-react"

interface ShipmentRouteProps {
  route: string[]
  currentLocation: string
}

export default function ShipmentRoute({ route, currentLocation }: ShipmentRouteProps) {
  const currentLocationIndex = route.findIndex((location) => location === currentLocation)

  return (
    <div className="w-full">
      <div className="flex items-center gap-3">
        {route.map((location, index) => {
          const isCurrentLocation = location === currentLocation
          const isCompleted = index < currentLocationIndex
          const isUpcoming = index > currentLocationIndex

          return (
            <div key={location} className="flex items-center flex-1">
              {/* Location Dot */}
              <div
                className={`flex items-center justify-center transition-all duration-500 ${
                  isCurrentLocation ? "scale-110" : ""
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                    isCurrentLocation
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white ring-2 ring-purple-500/50 shadow-lg"
                      : isCompleted
                        ? "bg-green-500 text-white"
                        : "bg-gray-700 text-gray-400"
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5" />
                  ) : isCurrentLocation ? (
                    <Circle className="w-5 h-5" fill="currentColor" />
                  ) : (
                    <Circle className="w-5 h-5" />
                  )}
                </div>
              </div>

              {/* Location Label */}
              <div className="ml-2 flex-1">
                <p
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isCurrentLocation ? "text-white font-semibold" : isCompleted ? "text-green-400" : "text-gray-500"
                  }`}
                >
                  {location}
                </p>
              </div>

              {/* Connector Arrow */}
              {index < route.length - 1 && (
                <div className="flex-1 flex justify-center px-2">
                  <div
                    className={`w-8 h-0.5 transition-all duration-300 ${
                      isCompleted || isCurrentLocation ? "bg-gradient-to-r from-purple-500 to-blue-500" : "bg-gray-700"
                    }`}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
