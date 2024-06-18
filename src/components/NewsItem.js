import React from "react";

function NewsItem({ article, onClick }) {
  return (
    <div
      tabIndex="0"
      role="news"
      className="cursor-pointer shrink-0 bg-white h-auto rounded-[15px] overflow-hidden shadow-md"
      onClick={onClick}
    >
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-md font-semibold text-gray-800">{article.title}</h3>
      </div>
    </div>
  );
}

export default NewsItem;
