import Image from "next/image";

export default function HowWorks() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-full mx-auto px-6">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-[#1F2937] mb-8">
            How RentBro Works
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-row-3 gap-8">
          {/* Step 1 */}
          <div className="p-6 flex flex-row items-center gap-10">
            <Image
              src="/images/search.png" // ✅ Fixed path
              alt="Search Rooms"
              width={340}
              height={340}
              unoptimized
            />
            <div>
              <span className="font-semibold mt-4 text-black text-4xl">
                Search through thousands of verified rooms
              </span>
              <p className="text-2xl text-gray-600 mt-2">
                Our powerful search tool allows you to filter listings by
                location, price range, and amenities, ensuring you find a space
                that fits your needs perfectly. Whether you're looking for a
                budget-friendly room or a place with premium features, our
                platform offers a seamless and personalized experience.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-6 flex flex-row items-center gap-10">
            <div>
              <span className="font-semibold mt-4 text-black text-4xl">
                Choose your preferred room and complete the booking
              </span>
              <p className=" text-2xl text-gray-600 mt-2">
                Choose your ideal room from a variety of verified listings,
                tailored to your preferences. With just a few clicks, securely
                complete the booking process using trusted payment methods,
                ensuring your rental is confirmed with ease. Enjoy peace of mind
                as you finalize everything from home.
              </p>
            </div>

            <Image
              src="/images/booking.png" // ✅ Fixed path
              alt="Secure Booking"
              width={340}
              height={340}
            />
          </div>

          {/* Step 3 */}
          <div className="p-6 flex flex-row items-center gap-10">
            <Image
              src="/images/move-in.png" // ✅ Fixed path
              alt="Move In"
              width={340}
              height={340}
            />
            <div>
              <span className="font-semibold mt-4 text-black text-4xl">
                Move in on your selected date
              </span>
              <p className="text-2xl text-gray-600 mt-2">
                Move in on your chosen date and experience the convenience of
                flexible rental terms tailored to your needs. Whether you're
                looking for a short-term stay or a long-term lease, RentBro
                offers adaptable options that fit your lifestyle. Enjoy a
                hassle-free move-in process with verified listings and seamless
                support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
