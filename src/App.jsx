import React, { useState, useMemo } from "react";
import * as Icons from "./lib";

const ALL_ICONS = Object.keys(Icons)
  .filter((name) => name.startsWith("Fi"))
  .sort();

export default function App() {
  const [search, setSearch] = useState("");
  const [size, setSize] = useState(28);
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [color, setColor] = useState("#3b82f6");
  const [dark, setDark] = useState(true);
  const [copiedName, setCopiedName] = useState(null);

  const filteredIcons = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return ALL_ICONS;
    return ALL_ICONS.filter((name) => name.toLowerCase().includes(q));
  }, [search]);

  const handleCopy = (name) => {
    const snippet = `<${name} size={${size}} strokeWidth={${strokeWidth}} color="${color}" />`;
    navigator.clipboard.writeText(snippet).then(() => {
      setCopiedName(name);
      setTimeout(() => setCopiedName(null), 2000);
    });
  };

  const bg = dark ? "#0f172a" : "#f8fafc";
  const cardBg = dark ? "#1e293b" : "#ffffff";
  const text = dark ? "#f1f5f9" : "#0f172a";
  const textMuted = dark ? "#94a3b8" : "#64748b";
  const border = dark ? "#334155" : "#e2e8f0";

  return (
    <div
      style={{
        backgroundColor: bg,
        color: text,
        minHeight: "100vh",
        fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        transition: "background-color 0.2s, color 0.2s",
      }}
    >
      {/* Top Header */}
      <header
        style={{
          borderBottom: `1px solid ${border}`,
          padding: "1.25rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: dark ? "#111c34" : "#ffffff",
          position: "sticky",
          top: 0,
          zIndex: 40,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
          <div
            style={{
              padding: "0.5rem",
              borderRadius: "0.5rem",
              backgroundColor: "rgba(59, 130, 246, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icons.FiFeather size={26} color="#3b82f6" />
          </div>
          <div>
            <h1 style={{ fontSize: "1.35rem", fontWeight: 700, margin: 0, letterSpacing: "-0.02em" }}>
              React-FI Explorer
            </h1>
            <p style={{ margin: 0, fontSize: "0.825rem", color: textMuted }}>
              Modern Feather Icons for React 18 & 19 (v2.0.0)
            </p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <a
            href="https://github.com/monkeyscript/react-fi"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.5rem 0.875rem",
              borderRadius: "0.5rem",
              border: `1px solid ${border}`,
              backgroundColor: cardBg,
              color: text,
              textDecoration: "none",
              fontSize: "0.875rem",
              fontWeight: 500,
            }}
          >
            <Icons.FiGitHub size={16} />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.npmjs.com/package/react-fi"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.5rem 0.875rem",
              borderRadius: "0.5rem",
              border: `1px solid ${border}`,
              backgroundColor: "#cb3837",
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "0.875rem",
              fontWeight: 600,
            }}
          >
            <span>npm v2.0.0</span>
          </a>

          <button
            onClick={() => setDark(!dark)}
            style={{
              padding: "0.5rem 0.75rem",
              borderRadius: "0.5rem",
              border: `1px solid ${border}`,
              backgroundColor: cardBg,
              color: text,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            title="Toggle theme"
          >
            {dark ? <Icons.FiSun size={18} color="#f59e0b" /> : <Icons.FiMoon size={18} color="#6366f1" />}
          </button>
        </div>
      </header>

      {/* Control Bar */}
      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "2rem 2rem 1.5rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
            backgroundColor: cardBg,
            padding: "1.25rem 1.5rem",
            borderRadius: "0.875rem",
            border: `1px solid ${border}`,
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
          }}
        >
          {/* Search */}
          <div>
            <label style={{ display: "block", fontSize: "0.825rem", fontWeight: 600, marginBottom: "0.375rem" }}>
              Search Icons ({filteredIcons.length}/{ALL_ICONS.length})
            </label>
            <div style={{ position: "relative" }}>
              <Icons.FiSearch
                size={16}
                color={textMuted}
                style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)" }}
              />
              <input
                type="text"
                placeholder="Search by name (e.g. user, arrow, cloud)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "0.55rem 0.75rem 0.55rem 2.25rem",
                  borderRadius: "0.5rem",
                  border: `1px solid ${border}`,
                  backgroundColor: dark ? "#0f172a" : "#f1f5f9",
                  color: text,
                  fontSize: "0.875rem",
                  outline: "none",
                }}
              />
            </div>
          </div>

          {/* Size Control */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.375rem" }}>
              <label style={{ fontSize: "0.825rem", fontWeight: 600 }}>Size: {size}px</label>
              <span style={{ fontSize: "0.75rem", color: textMuted }}>16 - 64px</span>
            </div>
            <input
              type="range"
              min="16"
              max="64"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              style={{ width: "100%", accentColor: "#3b82f6" }}
            />
          </div>

          {/* Stroke Width */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.375rem" }}>
              <label style={{ fontSize: "0.825rem", fontWeight: 600 }}>Stroke: {strokeWidth}px</label>
              <span style={{ fontSize: "0.75rem", color: textMuted }}>1 - 3px</span>
            </div>
            <input
              type="range"
              min="1"
              max="3"
              step="0.5"
              value={strokeWidth}
              onChange={(e) => setStrokeWidth(Number(e.target.value))}
              style={{ width: "100%", accentColor: "#3b82f6" }}
            />
          </div>

          {/* Color Control */}
          <div>
            <label style={{ display: "block", fontSize: "0.825rem", fontWeight: 600, marginBottom: "0.375rem" }}>
              Color: {color}
            </label>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "0.375rem",
                  border: `1px solid ${border}`,
                  padding: 0,
                  cursor: "pointer",
                  backgroundColor: "transparent",
                }}
              />
              <div style={{ display: "flex", gap: "0.3rem" }}>
                {["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#a855f7", "#ec4899", dark ? "#f8fafc" : "#0f172a"].map(
                  (c) => (
                    <button
                      key={c}
                      onClick={() => setColor(c)}
                      style={{
                        width: "22px",
                        height: "22px",
                        borderRadius: "50%",
                        backgroundColor: c,
                        border: color === c ? "2px solid #38bdf8" : `1px solid ${border}`,
                        cursor: "pointer",
                      }}
                      title={c}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copy Toast */}
      {copiedName && (
        <div
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            backgroundColor: "#10b981",
            color: "#ffffff",
            padding: "0.75rem 1.25rem",
            borderRadius: "0.5rem",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontWeight: 600,
            fontSize: "0.875rem",
            zIndex: 50,
          }}
        >
          <Icons.FiCheck size={18} strokeWidth={3} />
          <span>Copied &lt;{copiedName} /&gt; snippet to clipboard!</span>
        </div>
      )}

      {/* Icons Grid */}
      <main style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem 3rem" }}>
        {filteredIcons.length === 0 ? (
          <div style={{ textAlign: "center", padding: "4rem 1rem", color: textMuted }}>
            <Icons.FiSearch size={48} style={{ opacity: 0.4, marginBottom: "1rem" }} />
            <p style={{ fontSize: "1.1rem" }}>No icons found matching "{search}"</p>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
              gap: "1rem",
            }}
          >
            {filteredIcons.map((name) => {
              const IconComp = Icons[name];
              const isCopied = copiedName === name;
              return (
                <div
                  key={name}
                  onClick={() => handleCopy(name)}
                  style={{
                    backgroundColor: cardBg,
                    border: isCopied ? "1px solid #10b981" : `1px solid ${border}`,
                    borderRadius: "0.75rem",
                    padding: "1.25rem 0.5rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.75rem",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                    boxShadow: isCopied ? "0 0 0 2px rgba(16, 185, 129, 0.2)" : "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.borderColor = "#3b82f6";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = isCopied ? "#10b981" : border;
                  }}
                  title="Click to copy JSX code"
                >
                  <IconComp size={size} color={color} strokeWidth={strokeWidth} />
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      color: textMuted,
                      textAlign: "center",
                      wordBreak: "break-all",
                      padding: "0 0.25rem",
                    }}
                  >
                    {name}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
