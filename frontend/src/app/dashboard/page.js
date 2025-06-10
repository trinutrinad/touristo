'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [destination, setDestination] = useState('Paris');
  const [budget, setBudget] = useState(50); // Slider value (0 to 100)
  const router = useRouter();

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  const handleFeatureClick = (feature) => {
    console.log(`Navigating to ${feature} page`);
    // Add navigation logic here (e.g., router.push(`/dashboard/${feature.toLowerCase()}`))
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <button className="text-gray-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <h1 className="text-2xl font-bold">Travel App</h1>
          <button className="text-gray-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-4">
          <label className="flex items-center border rounded-lg p-3">
            <svg
              className="w-5 h-5 mr-3 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className="w-full outline-none"
            />
          </label>
        </div>

        {/* Destination and Budget */}
        <div className="flex justify-between mb-6">
          <div className="w-1/2 mr-2">
            <label className="block text-sm font-medium text-gray-700">Destination</label>
            <select
              value={destination}
              onChange={handleDestinationChange}
              className="mt-1 block w-full border rounded-lg p-2"
            >
              <option value="Paris">Paris</option>
              <option value="New York">New York</option>
              <option value="Tokyo">Tokyo</option>
              <option value="London">London</option>
            </select>
          </div>
          <div className="w-1/2 ml-2">
            <label className="block text-sm font-medium text-gray-700">Budget</label>
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-2">Low</span>
              <input
                type="range"
                min="0"
                max="100"
                value={budget}
                onChange={handleBudgetChange}
                className="w-full"
              />
              <span className="text-sm text-gray-500 ml-2">High</span>
            </div>
          </div>
        </div>

        {/* Feature Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => handleFeatureClick('Attractions')}
            className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-100 transition"
          >
            <svg
              className="w-8 h-8 text-blue-600 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4 0h-4"
              />
            </svg>
            <span>Attractions</span>
          </button>
          <button
            onClick={() => handleFeatureClick('Nearby ATMs')}
            className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-100 transition"
          >
            <svg
              className="w-8 h-8 text-blue-600 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h18M3 6h18M3 14h18M3 18h18M7 6v12m4-12v12m4-12v12"
              />
            </svg>
            <span>Nearby ATMs</span>
          </button>
          <button
            onClick={() => handleFeatureClick('Food')}
            className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-100 transition"
          >
            <svg
              className="w-8 h-8 text-blue-600 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 12h16M4 16h16"
              />
            </svg>
            <span>Food</span>
          </button>
          <button
            onClick={() => handleFeatureClick('Currency Converter')}
            className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-100 transition"
          >
            <svg
              className="w-8 h-8 text-blue-600 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.657 0-3 1.343-3 3v2c0 1.657 1.343 3 3 3s3-1.343 3-3v-2c0-1.657-1.343-3-3-3zm0 0v-4m0 10v4"
              />
            </svg>
            <span>Currency Converter</span>
          </button>
          <button
            onClick={() => handleFeatureClick('Transport')}
            className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-100 transition"
          >
            <svg
              className="w-8 h-8 text-blue-600 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Transport</span>
          </button>
          <button
            onClick={() => handleFeatureClick('Hotels')}
            className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-100 transition"
          >
            <svg
              className="w-8 h-8 text-blue-600 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4 0h-4"
              />
            </svg>
            <span>Hotels</span>
          </button>
        </div>
      </div>
    </div>
  );
}