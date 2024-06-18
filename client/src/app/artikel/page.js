"use client";

import React, { useState, useEffect } from "react";
import NewsItem from "@/components/NewsItem";
import NewsModal from "@/components/NewsModal";
import LoadingSkeleton from "@/components/LoadingSkeleton";

async function getNews() {
  const res = await fetch(
    "https://newsapi.org/v2/everything?q=keyword&apiKey=ae2eb16f81244e9ba53b6e9075a19dfb"
  );
  const data = await res.json();
  return data.articles || [];
}

function ArtikelPage() {
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const fetchedNews = await getNews();
      setNews(fetchedNews);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const handleNewsClick = (news) => {
    setSelectedNews(news);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedNews(null);
  };

  return (
    <main className="flex flex-col justify-center px-10 py-12 bg-pink-200 max-md:px-5 min-h-screen">
      <section className="px-20 pt-8 pb-20 bg-pink-200 rounded-[38px] max-md:px-5 max-md:max-w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            news.map((article, index) => (
              <NewsItem
                key={index}
                article={article}
                onClick={() => handleNewsClick(article)}
              />
            ))
          )}
        </div>
      </section>

      <NewsModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        article={selectedNews}
      />
    </main>
  );
};

export default ArtikelPage;
