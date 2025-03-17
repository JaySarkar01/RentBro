import Image from "next/image";

export default function RentersWords() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-6xl font-bold text-[#1F2937] mb-6">
          What Renters Are Saying
        </h1>

        {/* Testimonial Card */}
        <div className="bg-white p-6 rounded-xl max-w-8xl mx-auto flex flex-col items-center">
          <Image
            src="/images/words.png"
            alt="Renters Feedback"
            width={1140}
            height={365}
            className="rounded-full mb-4"
          />
          <p className="text-gray-700 text-lg italic">
          &quot;RentBro made finding my perfect rental so easy! The platform's search filters helped me quickly narrow down my options based on location, budget, and amenities. I loved that all the listings were verified, giving me peace of mind. The secure payment system was simple to use, and their customer support team was super responsive when I had questions.&quot;
          </p>
        </div>

        {/* View All Button */}
        <button className="mt-6 bg-[#FF385C] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#e0324e] transition">
          View All
        </button>
      </div>
    </section>
  );
}
