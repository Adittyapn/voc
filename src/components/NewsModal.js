import React from "react";
import Modal from "react-modal";

function NewsModal({ isOpen, onRequestClose, article }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Article Details"
      className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto my-10"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      {article && (
        <div>
          {article.urlToImage && (
            <img
              src={article.urlToImage}
              alt={article.title}
              className="w-full h-48 object-cover rounded-t-[15px]"
            />
          )}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {article.title}
            </h2>
            <p className="text-gray-800 mb-4">{article.description}</p>
            <a
              href={article.url}
              className="text-blue-500 mt-4 block text-center"
            >
              Read more
            </a>
          </div>
          <button
            onClick={onRequestClose}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          >
            Close
          </button>
        </div>
      )}
    </Modal>
  );
}

export default NewsModal;
