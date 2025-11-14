"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import ShipmentProgressBar from "@/components/shipment-progress-bar"
import ShipmentRoute from "@/components/shipment-route"
import { Mail, X, AlertCircle, ArrowLeft, Phone } from "lucide-react"
import CancelModal from "@/components/cancel-modal"

export default function TrackingPage() {
  const params = useParams()
  const router = useRouter()
  const trackingId = params.trackingId as string
  const [showCancelModal, setShowCancelModal] = useState(false)

  if (trackingId !== "TRK-72839925-IN") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 py-12 px-4 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-white mb-2">Tracking Not Found</h1>
          <p className="text-gray-400 mb-6">The tracking number you entered could not be found.</p>
          <button
            onClick={() => router.push("/track")}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all flex items-center justify-center gap-2 mx-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Search
          </button>
        </div>
      </div>
    )
  }

  const trackingData = {
    trackingNumber: trackingId,
    weight: "5 KG",
    from: "Mohali, Punjab",
    to: "Ganganagar, Rajasthan",
    currentLocation: "Ganganagar",
    status: "Dispatched from origin facility",
    estimatedDelivery: "14th November 2025",
    primaryAddress: "55 Pineer *****, Ganganagar, Rajasthan – 335001, India",
    alternateAddress: "6 GMD *****, Ganganagar, Rajasthan",
    currentStage: "out-for-delivery",
    shipmentRoute: ["Mohali", "Bathinda", "Hanumangarh", "Ganganagar"],
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold gradient-text mb-2">Track Your Shipment</h1>
            <p className="text-gray-400">
              Tracking Number: <span className="text-white font-mono font-semibold">{trackingData.trackingNumber}</span>
            </p>
          </div>
          <button
            onClick={() => router.push("/track")}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            title="Back to search"
          >
            <ArrowLeft className="w-6 h-6 text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* Status */}
        <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 p-4 mb-6">
         <p className="text-gray-100">
            Your order is on the way. The scan has been completed successfully and it is ready for the next movement. 
            We will attempt delivery up to 2 times. If both attempts fail, your order may be cancelled or redirected to an alternate address. 
            Please be available to receive the shipment.
          </p>

        </Card>

        {/* Progress */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">Shipment Progress</h2>
          <ShipmentProgressBar currentStage={trackingData.currentStage} />
        </div>

        {/* Route */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">Shipment Route</h2>
          <ShipmentRoute route={trackingData.shipmentRoute} currentLocation={trackingData.currentLocation} />
        </div>

        {/* Shipment Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Card className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Shipment Details</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-500 text-sm">Weight</p>
                <p className="text-white font-medium">{trackingData.weight}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Current Location</p>
                <p className="text-white font-medium">{trackingData.currentLocation}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Status</p>
                <p className="text-white font-medium">{trackingData.status}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Estimated Delivery</p>
                <p className="text-white font-medium">{trackingData.estimatedDelivery}</p>
              </div>
            </div>
          </Card>

          <Card className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Route</h3>
            <div className="space-y-6">
              <div>
                <p className="text-gray-500 text-sm mb-1">From</p>
                <p className="text-white font-medium">{trackingData.from}</p>
              </div>
              <div className="flex justify-center py-2">
                <div className="w-0.5 h-8 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">To</p>
                <p className="text-white font-medium">{trackingData.to}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Addresses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Card className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Primary Delivery Address</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{trackingData.primaryAddress}</p>
          </Card>

          <Card className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Alternate Delivery Address</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{trackingData.alternateAddress}</p>
          </Card>
        </div>

        {/* Contact Details */}
        <Card className="glass-card p-6 border-l-4 border-l-blue-500 mb-6">
          <div className="space-y-3">
            <h3 className="text-white font-semibold mb-1 flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-500" />
              Contact Details
            </h3>

            <p className="text-gray-300 text-sm">
              Receiver Phone: <span className="text-white font-medium">99***4**70</span>
            </p>

            <p className="text-gray-300 text-sm">
              Sender Phone: <span className="text-white font-medium">97***70*41</span>
            </p>

            <p className="text-gray-300 text-sm">
              Receiver Email: <span className="text-white font-medium">shik*****@gmail.com</span>
            </p>
          </div>
        </Card>

        {/* Need Help / Unavailability Notice */}
        <Card className="glass-card p-6 border-l-4 border-l-purple-500 mb-6">
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
            <div className="space-y-2">
              <div className="bg-yellow-500/10 border border-yellow-500/30 p-3 rounded-lg mt-2">
                <p className="text-yellow-400 text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  If you will be unavailable to receive this order, please notify us at:
                </p>

                {/* ✅ Clickable mailto link */}
                <a
                  href={`mailto:info@rayonweb.com?subject=Unavailability Notice&body=I will be unavailable to receive order ${trackingId}.`}
                  className="text-white text-sm font-medium underline hover:text-purple-300 mt-1 inline-block"
                >
                  info@rayonweb.com
                </a>
              </div>
            </div>
          </div>
        </Card>

        {/* Cancel Button */}
        <button
          onClick={() => setShowCancelModal(true)}
          className="w-full py-3 px-4 bg-red-500/10 border border-red-500/30 hover:bg-red-500/20 text-red-400 hover:text-red-300 font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
        >
          <X className="w-4 h-4" />
          Cancel Order
        </button>
      </div>

      {/* ✅ Pass trackingId into modal */}
      <CancelModal
        isOpen={showCancelModal}
        onClose={() => setShowCancelModal(false)}
        orderId={trackingId}
      />
    </div>
  )
}
