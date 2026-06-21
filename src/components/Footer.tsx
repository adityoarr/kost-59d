const Footer = () => {
  return (
    <footer
      itemScope
      itemType="https://schema.org/WPFooter"
      style={{
        background: "transparent",
        borderTop: "1px solid rgba(0,0,0,0.07)",
        padding: "14px 20px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "11px",
          color: "rgba(0,0,0,0.35)",
          fontWeight: 500,
          letterSpacing: "0.02em",
          margin: 0,
        }}
      >
        © 2026{" "}
        <span itemProp="copyrightHolder" style={{ color: "rgba(0,0,0,0.55)", fontWeight: 600 }}>
          Kost Putri 59D
        </span>
        {" "}·{" "}by{" "}
        <a
          href="https://adityoarr.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="Adityo Ar Rafiuddin"
          style={{
            color: "#059669",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          adityoarr
        </a>
      </p>
    </footer>
  );
};

export default Footer;