// frontend/pages/dashboard.tsx

import { FaLandmark, FaUtensils, FaMoneyBill, FaBus, FaHotel, FaMapMarkerAlt, FaSearch } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Travel App</h1>
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
          <FaMapMarkerAlt />
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-6">
        <div className="relative mb-4">
          <FaSearch className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full border rounded-md pl-10 p-2"
          />
        </div>
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Destination"
            className="w-1/2 border rounded-md p-2"
          />
          <select className="w-1/2 border rounded-md p-2">
            <option>Budget</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          className="w-full accent-blue-500"
        />
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 gap-4 text-center">
        <Category icon={<FaLandmark />} label="Attractions" />
        <Category icon={<FaMoneyBill />} label="Nearby ATMs" />
        <Category icon={<FaUtensils />} label="Food" />
        <Category icon={<FaMoneyBill />} label="Currency Converter" />
        <Category icon={<FaBus />} label="Transport" />
        <Category icon={<FaHotel />} label="Hotels" />
      </div>
    </div>
  );
}

function Category({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="border rounded-xl p-6 hover:shadow-md transition text-blue-600 flex flex-col items-center">
      <div className="text-3xl mb-2">{icon}</div>
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
}
