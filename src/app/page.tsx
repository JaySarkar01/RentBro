import WhyRentBro from "@/app/components/whyrentbro";
import HowWorks from "@/app/components/howworks";
import RoomList from "@/app/components/roomlist";
import Index from "@/app/components/index";
import SecuritySection from "@/app/components/security";
import RentersWords from "@/app/components/renterswords"
export default function Home() {
  return (
    <div className="w-full">
      <section>
        <Index />
      </section>

      <section>
        <WhyRentBro />
      </section>

      <section id="howworks">
        <HowWorks />
      </section>

      <section id="listings">
        <RoomList />
      </section>

      <section>
        <RentersWords/>
      </section>

      <section>
        <SecuritySection/>
      </section>

      {/* Footer */}
      <footer className="py-6 w-full flex items-center justify-center text-white bg-black">
        © 2025 RentBro. All Rights Reserved.
      </footer>

    </div>
  );
}
