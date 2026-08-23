import Hero from "@/section/components/Hero";
import Service from "@/section/components/Service"
import Featured from "@/section/components/Featured";
import Event from "@/section/components/Event"
import Network from "@/section/components/Network"
import Growth from "@/section/components/Growth"
import Footer from "@/section/components/Footer"

export default function Home() {
  return (
    <div>
      <Hero />
      <Service />
      <Featured />
      <Event />
      <Network />
      <Growth />
      <Footer />
    </div>
  );
}
