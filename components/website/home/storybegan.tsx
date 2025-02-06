"use client"

import Image from "next/image"

export function DreamBookSection() {
  return (
    <section id="our-mission" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Where Our Mission Began</h2>
            <p className="text-gray-300 text-lg">
              Twelve years ago, a simple dream book sparked a vision that would change lives across Indonesia's rural
              counties. This scanned page captures the moment our mission to bring 3,000 jobs to these areas was born.
              It's a testament to the power of dreams and the impact of perseverance.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Scanned dream book page"
                width={800}
                height={600}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
