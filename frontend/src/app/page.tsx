"use client";

import { useEffect, useState } from "react";

interface Item {
  id: number;
  name: string;
}

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/items');
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        
        const data = await response.json();
        setItems(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching items:', err);
        setError('Failed to fetch items. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl drop-shadow-lg">
            <span className="text-white">Items <span className="text-gray-400">Explorer</span></span>
          </h1>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4 max-w-2xl mx-auto">
            A sleek application showcasing data from our backend API
          </p>
        </div>

        <div className="mt-10 bg-zinc-900 p-8 rounded-lg border border-zinc-800 shadow-2xl">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-500"></div>
            </div>
          ) : error ? (
            <div className="bg-zinc-800 p-6 rounded-lg border border-red-900">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-base font-medium text-red-400">{error}</h3>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Available Items</h2>
                <span className="bg-zinc-800 text-gray-400 text-sm px-3 py-1 rounded-full border border-zinc-700">
                  {items.length} items found
                </span>
              </div>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li 
                    key={item.id} 
                    className="bg-zinc-800 border border-zinc-700 overflow-hidden rounded-lg px-6 py-5 hover:bg-zinc-700 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-zinc-900 rounded-lg p-3 border border-zinc-700">
                          <span className="text-sm font-bold text-gray-400">{item.id}</span>
                        </div>
                        <div className="ml-5">
                          <div className="text-xl font-semibold text-white">{item.name}</div>
                          <div className="text-sm text-gray-500 mt-1">Item #{item.id}</div>
                        </div>
                      </div>
                      <button className="text-gray-500 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <footer className="mt-16 text-center text-sm text-gray-700">
          <p>© {new Date().getFullYear()} Spark Studios. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
