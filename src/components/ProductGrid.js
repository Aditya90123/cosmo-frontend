import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "../data/products";

export default function ProductGrid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
        gap: 32,
      }}
    >
      {products.map((p, i) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12 }}
          whileHover={{
            y: -10,
            boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
          }}
          style={{
            background: "#fff",
            borderRadius: 20,
            padding: 28,
            border: "1px solid #e5e7eb",
          }}
        >
          <h3>{p.name}</h3>
          <small style={{ color: "#6b7280" }}>{p.cat}</small>

          <p style={{ margin: "14px 0", color: "#374151" }}>
            {p.desc}
          </p>

          <Link to={`/products/${p.id}`}>
            View product →
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
