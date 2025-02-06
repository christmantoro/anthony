"use client"

import Image from "next/image"
import Link from "next/link"

export function InspiringBooksSection() {
  const books = [
    {
      title: "The Purpose Driven Life",
      author: "Rick Warren",
      image: "/placeholder.svg?height=300&width=200",
      description:
        "This book inspired me to find deeper meaning and purpose in both my personal life and entrepreneurial journey.",
    },
    {
      title: "Faith Driven Entrepreneur",
      author: "Chip Ingram, Henry Kaestner, and J. D. Greear",
      image: "/placeholder.svg?height=300&width=200",
      description:
        "This book helped me align my entrepreneurial endeavors with my faith, showing how business can be a force for good.",
    },
  ]

  return (
    <section id="inspiring-books" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Books That Inspired Our Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {books.map((book, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="md:w-1/3">
                <Image
                  src={book.image || "/placeholder.svg"}
                  alt={book.title}
                  width={200}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{book.title}</h3>
                <p className="text-gray-400 mb-4">by {book.author}</p>
                <p className="text-gray-300">{book.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
