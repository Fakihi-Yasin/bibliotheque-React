'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
// import bgImage from '../assets/bg.png'

export function Hero() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
  }

  return (
    <section className="relative bg-gradient-to-r from-purple-700 to-indigo-800 dark:from-purple-900 dark:to-indigo-900 text-white">
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-black opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src={'/hero.webp'}
          alt="Library with rows of books on wooden shelves"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
      <div className="relative container mx-auto px-4 py-24 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">
            Discover Your Next Great Read
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-center max-w-3xl mx-auto">
            Explore thousands of books from bestselling authors and emerging talents. Your literary journey starts here.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for books, authors, or genres..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-full text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg placeholder-gray-500 dark:placeholder-gray-400"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 dark:bg-purple-700 text-white p-3 rounded-full hover:bg-purple-700 dark:hover:bg-purple-800 transition-colors duration-200"
              >
                <Search className="w-6 h-6" />
                <span className="sr-only">Search</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}