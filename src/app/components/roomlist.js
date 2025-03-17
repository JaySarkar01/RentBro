import Image from "next/image";

// Room Data
const roomListings = [
  {
    image: "/room1.png",
    location: "Bandra West, Mumbai",
    rating: "4.9(39)",
    description: "Fully furnished, Wi-Fi, AC, close to public transport",
    price: "Rs.10,000",
  },
  {
    image: "/room2.png",
    location: "Andheri East, Mumbai",
    rating: "4.8(25)",
    description: "Spacious room with attached washroom & balcony",
    price: "Rs.12,500",
  },
  {
    image: "/room3.png",
    location: "Kharghar, Navi Mumbai",
    rating: "4.7(32)",
    description: "Well-maintained PG with 24/7 security and power backup",
    price: "Rs.8,000",
  },
  {
    image: "/room4.png",
    location: "Powai, Mumbai",
    rating: "4.9(45)",
    description: "Luxury stay with all modern amenities included",
    price: "Rs.15,000",
  },
  {
    image: "/room5.png",
    location: "Thane West, Mumbai",
    rating: "4.6(20)",
    description: "Cozy single room with attached bathroom & kitchen",
    price: "Rs.9,500",
  },
  {
    image: "/room6.png",
    location: "Vashi, Navi Mumbai",
    rating: "4.5(18)",
    description: "Affordable shared accommodation for working professionals",
    price: "Rs.7,500",
  },
];

export default function RoomList() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-6xl font-bold text-[#1F2937] text-center mb-8">
          Featured Room Listings
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomListings.map((room, index) => (
            <div key={index} className="bg-white p-4 rounded-lg hover:shadow-lg">
              <Image
                src={room.image}
                alt={room.location}
                width={411}
                height={274}
                className="rounded-lg"
              />
              <div className="mt-3 flex justify-between items-center">
                <span className="text-lg font-semibold">{room.location}</span>
                <span className="text-gray-500">⭐ {room.rating}</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">{room.description}</p>
              <p className="text-lg font-bold text-[#000000] mt-2">{room.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
