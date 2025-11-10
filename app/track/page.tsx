"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function TrackPage() {
  const [trackingId, setTrackingId] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!trackingId.trim()) {
      setError("Please enter a tracking number")
      return
    }

    // Valid tracking number
    if (trackingId === "TRK-72839925-IN") {
      router.push(`/track/${trackingId}`)
    } else {
      setError("Tracking number not found. Please check and try again.")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 py-12 px-4 flex items-center justify-center">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-2">Track Shipment</h1>
          <p className="text-gray-400">Enter your tracking number to view delivery status</p>
        </div>

        {/* Search Card */}
        <Card className="glass-card p-8">
          <form onSubmit={handleSearch} className="space-y-4">
            <div>
              <label htmlFor="tracking" className="block text-sm font-medium text-gray-300 mb-2">
                Tracking Number
              </label>
              <input
                id="tracking"
                type="text"
                placeholder="e.g., TRK-87655554-IN"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value.toUpperCase())}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              />
            </div>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">{error}</div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2 group"
            >
              Track Order
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Helper Text */}
          <div className="mt-6 pt-6 border-t border-gray-700 space-y-2">
            <p className="text-xs text-gray-500">
              Need help? Contact us at{" "}
              <a href="mailto:info@rayonweb.com" className="text-purple-400 hover:text-purple-300">
                info@rayonweb.com
              </a>
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
