"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  // This function creates a mailto link with the form data
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    // Create the email body with the form data
    const emailBody = `
Name: ${name}

Email: ${email}

Message:
${message}
    `

    // Create the mailto link
    const mailtoLink = `gabrielambongan11@gmail.com?subject=Contact Form: ${name}&body=${encodeURIComponent(emailBody)}`

    // Open the email client
    window.location.href = mailtoLink
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 bg-[#1a2639] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f05454]"
          placeholder="Your Name"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 bg-[#1a2639] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f05454]"
          placeholder="your.email@example.com"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 bg-[#1a2639] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f05454]"
          placeholder="Your message here..."
          required
        ></textarea>
      </div>
      <Button
        type="submit"
        className="w-full bg-[#f05454] hover:bg-[#e04444] text-white font-bold py-3 px-8 rounded-md transition-colors"
      >
        Send Message
      </Button>
      <div>
      {/* Your existing content */}
      
      {/* Contact section at the bottom */}
      <div className="text-gray-800 p-6 border-t border-gray-300 mt-10">
        <p className="text-xl font-semibold">Gabriel Rhys D. Ambongan</p>
        <p className="mt-2 text-lg">Phone: 09053494213</p>
        <p className="mt-1 text-lg">email: gabrielambongan11@gmail.com</p>
        <p className="mt-1 text-lg">Facebook: Gabriel Ambongan</p>
      </div>
    </div>
    </form>
  )
}
