import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: "auto",
          padding: "14px 32px",
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          alignItems: "center",
          gap: 40,
        }}
      >
    
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img src="/logo.png" alt="COSMO" style={{ height: 50 }} />
          <strong style={{ fontSize: 60, letterSpacing: "0.5px" }}>
            
          </strong>
        </Link>

        {/* CENTER EMPTY (FOR FUTURE) */}
        <div />

        {/* PAGES (ORANGE BOX AREA) */}
        <nav style={{ display: "flex", gap: 28, fontWeight: 500 }}>
          <Link to="/">Home</Link>
          <Link to="/applications">Applications</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
