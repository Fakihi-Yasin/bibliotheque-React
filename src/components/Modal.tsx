import React from 'react';

interface ModalProps {
  book: {
    title: string;
    author: string;
    description: string;
    available?: boolean;
  };
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ book, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-lg transition-transform transform hover:scale-105">
        <h2 className="text-3xl font-semibold mb-3 text-gray-800">{book.title}</h2>
        <p className="text-gray-600 mb-2">Author: <span className="font-medium">{book.author}</span></p>
        <p className="text-gray-700 mb-4">{book.description}</p>
        {book.available ? (
          <button className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition duration-200">
            Borrow Book
          </button>
        ) : (
          <p className="text-red-600 font-semibold">This book is not available for borrowing.</p>
        )}
        <button
          onClick={onClose}
          className="mt-4 bg-gray-300 text-gray-800 px-5 py-2 rounded hover:bg-gray-400 transition duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;   