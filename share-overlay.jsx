// Share overlay — plein écran dans le cadre du téléphone, affiche une carte
// story 9:16 avec 2 CTAs: "Partager" (Instagram/WhatsApp/…) et "Fermer".
function ShareOverlay({ onClose, children }) {
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setOn(true), 20);
    return () => clearTimeout(t);
  }, []);
  return (
    <div style={{
      position: "absolute", inset: 0, zIndex: 500,
      background: on ? "rgba(10,10,10,.85)" : "rgba(10,10,10,0)",
      backdropFilter: "blur(12px)",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      transition: "background .3s",
      padding: 24,
    }}
    onClick={onClose}
    >
      {/* Header */}
      <div style={{
        position: "absolute", top: 54, left: 24, right: 24,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        color: "#fff", opacity: on ? 1 : 0, transition: "opacity .3s .15s",
      }}>
        <div style={{ fontFamily: "DIN Pro", fontWeight: 700, fontSize: 12,
                      letterSpacing: ".14em", textTransform: "uppercase", opacity: .7 }}>
          Aperçu du partage
        </div>
        <button onClick={onClose} aria-label="Fermer" style={{
          width: 36, height: 36, borderRadius: 18,
          background: "rgba(255,255,255,.12)", color: "#fff",
          border: "1px solid rgba(255,255,255,.2)", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Card */}
      <div onClick={(e) => e.stopPropagation()}
           style={{
        transform: on ? "translateY(0) scale(1)" : "translateY(30px) scale(.96)",
        opacity: on ? 1 : 0,
        transition: "transform .4s cubic-bezier(.2,1.1,.3,1), opacity .3s",
        marginBottom: 100,
      }}>
        {children}
      </div>

      {/* Share row */}
      <div onClick={(e) => e.stopPropagation()}
           style={{
        position: "absolute", bottom: 30, left: 24, right: 24,
        opacity: on ? 1 : 0, transform: on ? "translateY(0)" : "translateY(20px)",
        transition: "opacity .3s .25s, transform .3s .25s",
      }}>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 12 }}>
          {[
            { name: "Instagram", bg: "linear-gradient(45deg, #FD5, #F80, #E02, #B12, #714)" },
            { name: "TikTok",    bg: "#000" },
            { name: "WhatsApp",  bg: "#25D366" },
            { name: "Plus",      bg: "rgba(255,255,255,.12)" },
          ].map((s, i) => (
            <div key={i} style={{
              width: 54, height: 54, borderRadius: 16, background: s.bg,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontFamily: "DIN Pro", fontWeight: 700, fontSize: 10,
              cursor: "pointer", textAlign: "center", lineHeight: 1.1,
              border: s.name === "Plus" ? "1px solid rgba(255,255,255,.2)" : "none",
            }}>
              {s.name === "Plus" ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ) : s.name}
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", fontFamily: "DIN Pro", fontSize: 11,
                      color: "rgba(255,255,255,.6)", letterSpacing: ".08em",
                      textTransform: "uppercase" }}>
          Tap pour partager
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ShareOverlay });
