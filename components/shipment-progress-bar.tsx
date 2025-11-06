import React from "react"

interface ShipmentProgressBarProps {
  currentStage: "at-origin" | "in-transit" | "out-for-delivery" | "delivered"
}

const stages = [
  { id: "at-origin", label: "At Origin" },
  { id: "in-transit", label: "In Transit" },
  { id: "out-for-delivery", label: "Out for Delivery" },
  { id: "delivered", label: "Delivered" },
]

export default function ShipmentProgressBar({ currentStage }: ShipmentProgressBarProps) {
  const currentIndex = stages.findIndex((stage) => stage.id === currentStage)

  return (
    <div className="w-full">
      {/* Progress Line */}
      <div className="flex items-center gap-2 mb-6">
        {stages.map((stage, index) => {
          const isCompleted = index <= currentIndex
          const isCurrent = index === currentIndex

          return (
            <React.Fragment key={stage.id}>
              {/* Stage Dot */}
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                    isCurrent
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white scale-110 ring-2 ring-purple-500/50"
                      : isCompleted
                        ? "bg-purple-500 text-white"
                        : "bg-gray-800 text-gray-500"
                  }`}
                >
                  {isCompleted ? "✓" : index + 1}
                </div>
              </div>

              {/* Connector Line */}
              {index < stages.length - 1 && (
                <div
                  className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                    isCompleted && index < currentIndex ? "bg-gradient-to-r from-purple-500 to-blue-500" : "bg-gray-800"
                  }`}
                />
              )}
            </React.Fragment>
          )
        })}
      </div>

      {/* Stage Labels */}
      <div className="flex gap-2">
        {stages.map((stage, index) => (
          <div key={stage.id} className="flex-1 text-center">
            <p
              className={`text-xs md:text-sm font-medium transition-colors duration-300 ${
                index <= currentIndex ? "text-white" : "text-gray-600"
              }`}
            >
              {stage.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
