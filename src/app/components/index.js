import { FiSearch } from "react-icons/fi";
import Navbar from "@/app/components/navebar";
export default function Index() {
    return(
        <section className="h-screen w-full bg-[url('/frontbg.png')] bg-cover bg-center flex flex-col">
        {/* Full-Width Main Content */}
        <Navbar/>
        <main className="flex flex-col items-center justify-center flex-grow text-center px-6 w-full">
          <div className="text-white w-full max-w-5xl mb-20">
            {/* Title & Subtitle */}
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Find Your Perfect Room, Anytime, Anywhere.
            </h1>
            <p className="mt-2 text-lg text-gray-300">
              "Explore verified listings, secure payments, and flexible lease
              terms at your fingertips."
            </p>
          </div>

          {/* Search Section */}
          <div className="mt-7 w-full flex flex-col items-center">
            <p className="text-sm text-gray-300">
              Search, filter, and rent verified rooms with flexible terms.
            </p>

            {/* Search Bar */}
            <div className="w-full max-w-5xl bg-white rounded-xl shadow-md flex items-center overflow-hidden mt-6">
              {/* Search Fields */}
              <div className="grid grid-cols-4 flex-grow divide-x divide-gray-300">
                <div className="px-4 py-3">
                  <label className="block text-sm text-gray-700 font-medium">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="Search Destination"
                    className="w-full text-gray-500 focus:outline-none"
                  />
                </div>

                <div className="px-4 py-3">
                  <label className="block text-sm text-gray-700 font-medium">
                    Room Type
                  </label>
                  <input
                    type="text"
                    placeholder="Search ideal room"
                    className="w-full text-gray-500 focus:outline-none"
                  />
                </div>

                <div className="px-4 py-3">
                  <label className="block text-sm text-gray-700 font-medium">
                    Price Range
                  </label>
                  <input
                    type="number"
                    placeholder="Add price"
                    className="w-full text-gray-500 focus:outline-none"
                  />
                </div>

                <div className="px-4 py-3">
                  <label className="block text-sm text-gray-700 font-medium">
                    Amenities
                  </label>
                  <input
                    type="text"
                    placeholder="Add room Conditions"
                    className="w-full text-gray-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Search Button */}
              <button className="ml-3 mr-2 p-4 bg-[#FF385C] text-white rounded-xl flex items-center justify-center">
                <FiSearch size={20} />
              </button>
            </div>
          </div>
        </main>
      </section>
    )
}