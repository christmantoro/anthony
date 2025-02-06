"use client"

import { Building2, Phone, Users } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: <Building2 className="w-12 h-12 text-indigo-400" />,
      title: "Company in Big City",
      description: "Companies in urban areas partner with us to expand their workforce and tap into rural talent.",
    },
    {
      icon: <Phone className="w-12 h-12 text-indigo-400" />,
      title: "Softphone Technology",
      description:
        "Our advanced softphone technology enables seamless communication between companies and remote workers.",
    },
    {
      icon: <Users className="w-12 h-12 text-indigo-400" />,
      title: "Telemarketers in Rural Areas",
      description:
        "Skilled telemarketers from rural areas connect with companies, working remotely using our platform.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-[#030303]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-md border border-gray-800">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-2 text-white">{step.title}</h3>
              <p className="text-gray-400 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
