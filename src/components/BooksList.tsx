import { motion } from 'framer-motion';
import { useState } from 'react';
import Modal from './Modal';

interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  buyUrl?: string;
  imageUrl: string;
  available?: boolean;

}

interface BookListProps {
  books: Book[];
}


export function BookList({ books }: BookListProps) {    
  const [selectedBook, setSelectedBook] = useState<Book | null>(null); // State for selected book
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const handleReadMore = (book: Book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {books?.map((book, index) => (
        <motion.div
          key={book.id}
          className="bg-white rounded-lg dark:bg-gray-800 shadow-md h-fit overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <div className="p-6">
            <img
              src={book.imageUrl}
              alt={book.title}
              className="w-full h-80 rounded-xl dark:text-white object-cover transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-xl font-semibold mt-6 mb-2">{book.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">{book.author}</p>
            <p className="text-gray-700 mb-4 dark:text-gray-400 line-clamp-2">{book.description}</p>
            {book.buyUrl && (
              <button
                onClick={() => handleReadMore(book)}
                className="inline-block bg-violet-600 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
              >
                Read More
              </button>
            )}
          </div>
        </motion.div>
      ))}
      {isModalOpen && selectedBook && ( 
        <Modal book={selectedBook} onClose={closeModal} />
      )}
    </div>
  );
}