import ChoosePath from "@/components/pages/choosepage";
import Hero from "@/components/pages/hero";
import Statement from "@/components/pages/statement";

export default function Home() {
  return (
   <section className="pt-10  font-sans">
        <Hero/>
        <Statement/>
        <ChoosePath/>
   </section>
  );
}
