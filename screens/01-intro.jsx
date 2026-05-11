// Écran 01 — Intro
// Fond noir (Black-Background.png) + overlay produits (Intro-overlay-produits.png) au-dessus du texte
// "2026, c'est terminé." headline + "GRAND WRAPPED" + big "2026" + CTA lime "DÉCOUVRIR MON RÉCAP"
// Source: Figma node 26454:188509 (WRAP ANNUEL / 01-Intro)
// IMPORTANT: les animations d'apparition (reveal, transitions) seront ajoutées dans une passe
// dédiée. Les hooks useReveal et classes .reveal sont déjà en place sur tous les éléments
// candidats à l'animation.
//
// z-index layering:
//   0 : fond noir (img)
//   1 : texte (headline, subline, GRAND WRAPPED, big 2026)
//   2 : overlay produits détourés (img par-dessus le texte)
//   3 : status bar + close button + CTA (au-dessus de tout)

function Screen01Intro({ active, onNext }) {
  const on = useReveal(active);

  return (
    <div className="gf-app" style={{
      background: "#292929",
      color: "var(--gf-cream)",
      overflow: "hidden",
      position: "relative",
    }}>
      {/* Fond noir (image) */}
      <img src="icons/photos/01-bg.png" alt=""
           style={{
        position: "absolute", inset: 0,
        width: "100%", height: "100%",
        objectFit: "cover",
        pointerEvents: "none",
        zIndex: 0,
      }}/>

      {/* ============================ */}
      {/* STATUS BAR                   */}
      {/* ============================ */}
      <div style={{ position: "relative", zIndex: 3 }}>
        <StatusBar color="#fff" />
      </div>

      {/* ============================ */}
      {/* CLOSE BUTTON (top-left)      */}
      {/* ============================ */}
      <button aria-label="Fermer"
              style={{
        position: "absolute", top: 76, left: 24,
        width: 40, height: 40, borderRadius: 30,
        background: "transparent",
        border: "1px solid var(--gf-cream)",
        color: "var(--gf-cream)",
        cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 3,
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round"/>
        </svg>
      </button>

      {/* ============================ */}
      {/* HEADLINE BLOCK               */}
      {/* ============================ */}
      <div style={{
        position: "absolute",
        top: 91, left: 69,
        width: 252, padding: "0 4px",
        display: "flex", flexDirection: "column",
        alignItems: "center", gap: 18,
        textAlign: "center",
        zIndex: 1,
      }}>
        <h1 className={`reveal ${on ? "is-on" : ""}`}
            style={{
          margin: 0,
          fontFamily: "Fixture Condensed",
          fontWeight: 900,
          fontSize: 46, lineHeight: "46px",
          color: "var(--gf-cream)",
          textTransform: "uppercase",
          width: "100%",
        }}>
          2026, c'est<br/>
          <span style={{ color: "var(--gf-lime)" }}>terminé.</span>
        </h1>
        <p className={`reveal reveal-d1 ${on ? "is-on" : ""}`}
           style={{
          margin: 0,
          fontFamily: "Barlow, DIN Pro",
          fontStyle: "italic",
          fontSize: 14, lineHeight: 1.5,
          color: "rgba(255,254,245,.7)",
          width: "100%",
        }}>
          Mais toi et Grand Frais, vous avez vécu{" "}
          <em style={{
            fontStyle: "normal", fontWeight: 700,
            color: "var(--gf-cream)",
          }}>de grands moments très frais</em>.
        </p>
      </div>

      {/* ============================ */}
      {/* "GRAND WRAPPED" + BIG 2026   */}
      {/* ============================ */}
      <div className={`reveal reveal-d3 ${on ? "is-on" : ""}`}
           style={{
        position: "absolute",
        top: 355, left: 137,
        fontFamily: "DIN Pro",
        fontWeight: 900, fontSize: 14, lineHeight: "16px",
        textTransform: "uppercase",
        color: "#f9f4dc",
        zIndex: 1,
        whiteSpace: "nowrap",
      }}>
        Grand wrapped
      </div>

      <div className={`reveal reveal-d4 ${on ? "is-on" : ""}`}
           style={{
        position: "absolute",
        top: 357, left: 29,
        fontFamily: "Fixture Condensed",
        fontWeight: 900, fontSize: 172,
        lineHeight: 1,
        textTransform: "uppercase",
        color: "#f9f4dc",
        whiteSpace: "nowrap",
        zIndex: 1,
      }}>
        2026
      </div>

      {/* ============================ */}
      {/* OVERLAY PRODUITS DÉTOURÉS    */}
      {/* (au-dessus du texte, en dessous du bouton) */}
      {/* ============================ */}
      <img src="icons/photos/01-overlay.png" alt=""
           style={{
        position: "absolute", inset: 0,
        width: "100%", height: "100%",
        objectFit: "cover",
        pointerEvents: "none",
        zIndex: 2,
      }}/>

      {/* ============================ */}
      {/* CTA                          */}
      {/* ============================ */}
      <button onClick={onNext}
              className={`reveal reveal-d6 ${on ? "is-on" : ""}`}
              style={{
        position: "absolute",
        top: 765, left: 27,
        width: 336, height: 40,
        padding: 16,
        background: "#cce60c",
        color: "var(--gf-ink)",
        border: "none",
        borderRadius: 30,
        fontFamily: "DIN Pro",
        fontWeight: 900, fontSize: 14, lineHeight: "16px",
        textTransform: "uppercase",
        display: "flex", alignItems: "center", justifyContent: "center",
        gap: 4,
        cursor: "pointer",
        zIndex: 3,
      }}>
        Découvrir mon récap
      </button>
    </div>
  );
}

Object.assign(window, { Screen01Intro });
