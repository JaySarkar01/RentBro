import Image from "next/image";

export default function SecuritySection() {
  return (
    <section className="bg-white py-16">
      <div className="w-8xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#1F2937] mb-8">
          Your Security, Our Priority
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Left Side - Payment Providers */}
          <div className="w-[580px] h-[400px] flex flex-col justify-center items-center p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Secure Payment Providers
            </h3>
            <div className="grid grid-cols-3 gap-4">
            <Image src="/images/rozerpay.png" alt="Razorpay" width={120} height={40} />
              <Image src="/images/visa.png" alt="Visa" width={100} height={40} />
              <Image src="/images/upi.png" alt="UPI" width={100} height={40} />
              <Image src="/images/payu.png" alt="PayU" width={100} height={40} />
              <Image src="/images/paypal.png" alt="PayPal" width={100} height={40} />
              <Image src="/images/netbank.png" alt="Bank Transfer" width={100} height={40} />
            </div>
          </div>

          {/* Right Side - Security Info */}
          <div className="w-[580px] h-[400px] flex flex-col justify-center text-left p-6">
            <span className="text-black text-3xl mb-3">eKYC verifird listings</span>
            <p className="text-gray-700 mb-3">
              All room listings on RentBro are <strong>eKYC verified</strong>, ensuring that both tenants and landlords are real and legitimate.
            </p>
            <span className="text-black text-3xl mb-3">Data privacy</span>
            <p className="text-gray-700">
              We prioritize your data security, with <strong>advanced encryption measures</strong> to protect your personal information. Rest assured, your data is stored and handled in compliance with strict privacy policies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
