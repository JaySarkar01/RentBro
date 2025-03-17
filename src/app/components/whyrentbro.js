import { FaShieldAlt, FaMoneyBillWave, FaCheckCircle, FaStar, FaHeadset, FaClock } from "react-icons/fa";

export default function WhyRentro() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="pl-12 pr-12 w-6xl px-6 text-center">
        {/* Why Rent with RentBro? */}
        <h2 className="text-6xl font-bold mb-8 text-[#1F2937]">
          Why Rent with RentBro?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {/* Feature Cards */}
          <div className="bg-white py-14 p-6 rounded-lg shadow-md hover:shadow-lg flex flex-col items-center text-center">
            <FaShieldAlt className="text-4xl text-[#FF385C] mb-4" />
            <p>
              Search rooms based on location, price, amenities, and more for a
              hassle-free experience.
            </p>
          </div>

          <div className="bg-white py-14 p-6 rounded-lg shadow-md hover:shadow-lg flex flex-col items-center text-center">
            <FaMoneyBillWave className="text-4xl text-[#FF385C] mb-4" />
            <p>
              Make safe and easy rental payments via trusted platforms like
              PayU and Razorpay.
            </p>
          </div>

          <div className="bg-white py-14 p-6 rounded-lg shadow-md hover:shadow-lg flex flex-col items-center text-center">
            <FaCheckCircle className="text-4xl text-[#FF385C] mb-4" />
            <p>
              All room listings are verified with eKYC to ensure authenticity
              and safety.
            </p>
          </div>

          <div className="bg-white py-14 p-6 rounded-lg shadow-md hover:shadow-lg flex flex-col items-center text-center">
            <FaStar className="text-4xl text-[#FF385C] mb-4" />
            <p>
              Read reviews and ratings from previous renters to make informed
              decisions.
            </p>
          </div>

          <div className="bg-white py-14 p-6 rounded-lg shadow-md hover:shadow-lg flex flex-col items-center text-center">
            <FaHeadset className="text-4xl text-[#FF385C] mb-4" />
            <p>
              Our support team is available 24/7 to help with any inquiries or
              issues.
            </p>
          </div>

          <div className="bg-white py-14 p-6 rounded-lg shadow-md hover:shadow-lg flex flex-col items-center text-center">
            <FaClock className="text-4xl text-[#FF385C] mb-4" />
            <p>
              Choose from short-term or long-term rentals that suit your
              needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
