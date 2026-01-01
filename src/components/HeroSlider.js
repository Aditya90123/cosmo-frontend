import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      style={{
        position: "relative",        // ✅ REQUIRED
        overflow: "hidden",
        padding: "120px 0 80px",
      }}
    >
      {/* ✅ BACKGROUND VIDEO (BEHIND EVERYTHING) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "blur(5px)",
          opacity: 0.30,
          zIndex: 0,                 // ✅ BEHIND
        }}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* ✅ YOUR EXISTING CONTENT (ON TOP, UNCHANGED) */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            maxWidth: 1400,
            margin: "auto",
            padding: "0 32px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h1
              style={{
                fontSize: 56,
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: 24,
              }}
            >
              Precision Leak Testing
              <br />
              Solutions
            </h1>

            <p
              style={{
                fontSize: 18,
                color: "#4b5563",
                maxWidth: 520,
              }}
            >
              COSMO delivers high-accuracy leak testing systems for
              automotive, EV, and industrial manufacturing — engineered
              for reliability, repeatability, and productivity.
            </p>

            <div style={{ marginTop: 32, display: "flex", gap: 16 }}>
              <a
                href="#products"
                style={{
                  padding: "12px 22px",
                  background: "#2563eb",
                  color: "#fff",
                  borderRadius: 8,
                  fontWeight: 500,
                }}
              >
                View Products →
              </a>

              <a
                href="/contact"
                style={{
                  padding: "12px 22px",
                  border: "1px solid #d1d5db",
                  borderRadius: 8,
                  fontWeight: 500,
                }}
              >
                Contact Sales
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE SLIDER (UNCHANGED) */}
          <div style={{ position: "relative", height: 360 }}>
            <motion.img
              key={index}
              src={images[index]}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 28,
                position: "absolute",
                boxShadow: "0 40px 80px rgba(0,0,0,0.15)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
