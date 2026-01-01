import HeroSlider from "../components/HeroSlider";
import StatsSection from "../components/StatsSection";
import ApplicationsSection from "../components/ApplicationsSection";
import WhyCosmo from "../components/WhyCosmo";
import ProductGrid from "../components/ProductGrid";
import SideProductSection from "../components/SideProductSection";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <HeroSlider />

      {/* STATS */}
      <StatsSection />

      {/* APPLICATIONS */}
      <ApplicationsSection />

      {/* WHY COSMO */}
      <WhyCosmo />

      {/* 🔽 NEW SECTION 1: AIR LEAK TESTER */}
      <SideProductSection
        title="Air Leak Tester"
        subtitle="High-accuracy differential pressure testing"
        description="COSMO Air Leak Testers detect minute pressure variations using
        differential pressure and vacuum methods. Widely used in automotive,
        EV, valves, and safety-critical components where airtightness is essential."
        image="/images/air-leak-tester.png"
      />

      {/* 🔽 NEW SECTION 2: AIR FLOW TESTER */}
      <SideProductSection
        title="Air Flow Tester"
        subtitle="Precision flow rate and volume measurement"
        description="COSMO Air Flow Testers measure air flow and volume with high
        repeatability. Ideal for filters, blowers, ventilation components, and
        airflow-related performance evaluation."
        image="/images/air-flow-tester.png"
        reverse
      />

      {/* PRODUCTS */}
      <motion.section
        id="products"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          maxWidth: 1400,
          margin: "auto",
          padding: "100px 32px",
        }}
      >
        <h2 style={{ fontSize: 34, marginBottom: 36 }}>
          Our Products
        </h2>

        <ProductGrid />
      </motion.section>
    </>
  );
}
