
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [currentTime, setCurrentTime] = useState("")

  // Update time every second
  useState(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")
      const seconds = now.getSeconds().toString().padStart(2, "0")
      setCurrentTime(`${hours} : ${minutes} : ${seconds}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    // Handle email submission here
  }

  return (
    <div className="min-h-[30vw] bg-white flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex md:flex-row flex-col items-center justify-between px-8 lg:px-16">
        {/* Left Side - AINOS Logo with Shadow Effect */}
        <div className="relative">
          {/* Main AINOS text */}
          <h1 className="text-8xl lg:text-9xl xl:text-[12rem] font-black leading-none tracking-tight text-black relative z-10">
            AINOS
          </h1>

          {/* Shadow/Echo effect */}
          <div className="absolute top-4 left-0 -z-10">
            <div className="text-8xl lg:text-9xl xl:text-[12rem] font-black leading-none tracking-tight text-gray-300 opacity-60">
              AINOS
            </div>
          </div>
          <div className="absolute top-8 left-0 -z-20">
            <div className="text-8xl lg:text-9xl xl:text-[12rem] font-black leading-none tracking-tight text-gray-200 opacity-40">
              AINOS
            </div>
          </div>
        </div>

        {/* Right Side - Email Form */}
        <div className="max-w-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter you email here"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-amber-700 hover:bg-amber-800 text-white rounded-full text-sm font-medium transition-colors"
              >
                Send
              </button>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              Send us your email, we will tell you what surprises there will be in the future. Greetings{" "}
              <span className="font-semibold">MONE</span>
            </p>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex items-center justify-between px-8 lg:px-16 py-6 border-t border-gray-100">
        <div className="text-sm font-medium">MONE</div>
        <div className="text-sm text-gray-600">Surakarta, Indonesia</div>
        <div className="flex items-center gap-4">
          <div className="text-sm font-mono">{currentTime}</div>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-600">
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  )
}
