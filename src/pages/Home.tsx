'use client'

import { BookList } from "../components/BooksList";
import { Hero } from "../components/Hero";

const books = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    description: 'A story of decadence and excess in Jazz Age America.',
    buyUrl: 'https://example.com/buy/great-gatsby',
    imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    description: 'A novel about racial injustice and the loss of innocence in the American South.',
    buyUrl: 'https://example.com/buy/to-kill-a-mockingbird',
    imageUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: '3',
    title: '1984',
    author: 'George Orwell',
    description: 'A dystopian novel set in a totalitarian society, exploring themes of mass surveillance and control.',
    buyUrl: 'https://example.com/buy/1984',
    imageUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    description: 'A romantic novel of manners set in Georgian England, focusing on the Bennet family and their five daughters.',
    buyUrl: 'https://example.com/buy/pride-and-prejudice',
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: '5',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    description: 'A story of teenage angst and alienation, following Holden Caulfield\'s experiences in New York City.',
    buyUrl: 'https://example.com/buy/catcher-in-the-rye',
    imageUrl: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?q=80&w=500&auto=format&fit=crop'
  },
  {
    id: '6',
    title: 'Moby-Dick',
    author: 'Herman Melville',
    description: 'An epic tale of obsession and adventure, centered around Captain Ahab\'s quest for revenge against a giant white whale.',
    buyUrl: 'https://example.com/buy/moby-dick',
    imageUrl: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?q=80&w=500&auto=format&fit=crop'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Featured Books
        </h1>
        <BookList books={books} />
      </div>

      <section className="bg-purple-600 dark:bg-purple-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-purple-100 mb-8">
              Subscribe to our newsletter for the latest book recommendations
              and updates.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}