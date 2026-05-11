// Écran 05 — Ton profil culinaire
// Fond gradient lime + photo caddie + "LE RAVITAILLEUR" + 3 stats + 2 CTAs (Partager / Continuer)
// Source: Figma node 26473:189529 (WRAP ANNUEL / 05 - Ton profil culinaire)
// IMPORTANT: animations ajoutées dans une passe dédiée. useReveal + .reveal en place.

const PROFIL_STATS = [
  { v: "892", l: "Produits achetés" },
  { v: "58",  l: "Visites" },
  { v: "15,4", l: "Produits par visite" },
];

function Screen05Profil({ active, onNext, onPrev, onShare }) {
  const on = useReveal(active);
  const [showShare, setShowShare] = React.useState(false);

  return (
    <div className="gf-app" style={{
      background: "linear-gradient(176.24deg, #cdd508 2.95%, #9e980a 97.05%)",
      color: "var(--gf-cream)",
      overflow: "hidden",
      position: "relative",
    }}>
      {showShare && <ShareProfileToastBar onClose={() => setShowShare(false)} />}
      {/* Texture overlay */}
      <img src="icons/photos/05-bg.jpg" alt=""
           style={{
        position: "absolute", inset: 0,
        width: "100%", height: "100%",
        objectFit: "cover",
        mixBlendMode: "multiply", opacity: 0.2,
        pointerEvents: "none",
        zIndex: 0,
      }}/>

      <div style={{ position: "relative", zIndex: 3 }}>
        <StatusBar color="#fff" />
      </div>

      {/* Container — top 59, padding-x 24, h 785, flex column space-between */}
      <div style={{
        position: "absolute",
        top: 59, left: 0, right: 0,
        height: 785,
        padding: "16px 24px 40px",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "space-between",
        zIndex: 2,
      }}>
        {/* ============================ */}
        {/* HEADER                       */}
        {/* ============================ */}
        <div style={{
          position: "relative",
          width: "100%",
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: 24,
        }}>
          <button onClick={onPrev} aria-label="Retour"
                  className={`reveal ${on ? "is-on" : ""}`}
                  style={{
            position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)",
            width: 40, height: 40,
            background: "transparent",
            border: "1px solid var(--gf-cream)",
            borderRadius: 30,
            color: "var(--gf-cream)",
            cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className={`reveal ${on ? "is-on" : ""}`}
               style={{
            fontFamily: "DIN Pro", fontWeight: 400,
            fontSize: 12, lineHeight: "12px",
            color: "var(--gf-cream)",
            textTransform: "uppercase",
            textAlign: "center",
            whiteSpace: "nowrap",
          }}>
            Chapitre 4 · Ton profil
          </div>
        </div>

        {/* ============================ */}
        {/* PROFILE SECTION              */}
        {/* ============================ */}
        <div style={{
          width: "100%",
          display: "flex", flexDirection: "column",
          gap: 12,
        }}>
          {/* Image caddie */}
          <div className={`reveal reveal-d1 ${on ? "is-on" : ""}`}
               style={{
            width: "100%", height: 422,
            position: "relative",
            overflow: "hidden",
          }}>
            <img src="icons/photos/ravitailleur-v3.png" alt="Caddie plein"
                 style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover",
              pointerEvents: "none",
            }}/>
          </div>

          {/* Nom du profil */}
          <div className={`reveal reveal-d2 ${on ? "is-on" : ""}`}
               style={{
            fontFamily: "Fixture Condensed", fontWeight: 900,
            fontSize: 46, lineHeight: "46px",
            color: "var(--gf-cream)",
            textTransform: "uppercase",
            textAlign: "center",
            width: 342,
          }}>
            Le ravitailleur
          </div>

          {/* Tagline */}
          <div className={`reveal reveal-d3 ${on ? "is-on" : ""}`}
               style={{
            fontFamily: "DIN Pro", fontWeight: 400,
            fontSize: 14, lineHeight: "15px",
            color: "var(--gf-cream)",
            textAlign: "center",
            width: "100%",
          }}>
            Tu ne fais pas tes courses. Tu approvisionnes.
          </div>
        </div>

        {/* ============================ */}
        {/* 3 STATS                      */}
        {/* ============================ */}
        <div className={`reveal reveal-d4 ${on ? "is-on" : ""}`}
             style={{
          display: "flex", gap: 8,
          alignItems: "flex-start",
          width: 342,
          overflow: "hidden",
        }}>
          {PROFIL_STATS.map((s, i) => (
            <div key={i} style={{
              flex: "1 0 0", minWidth: 0,
              padding: "12px 8px",
              background: "rgba(255,254,245,0.05)",
              border: "0.5px solid rgba(254,242,243,0.34)",
              display: "flex", flexDirection: "column",
              alignItems: "center", gap: 4,
              overflow: "hidden",
              color: "var(--gf-cream)",
            }}>
              <div style={{
                fontFamily: "Fixture Condensed", fontWeight: 900,
                fontSize: 22, lineHeight: "22px",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}>
                {s.v}
              </div>
              <div style={{
                fontFamily: "DIN Pro", fontWeight: 400,
                fontSize: 10, lineHeight: "11px",
                textAlign: "center",
                width: "100%",
              }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>

        {/* ============================ */}
        {/* 2 CTAs (Partager / Continuer) */}
        {/* ============================ */}
        <div style={{
          width: "100%",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <button onClick={() => setShowShare(true)}
                  className={`reveal reveal-d5 ${on ? "is-on" : ""}`}
                  style={{
            width: 154, height: 40,
            padding: 16,
            background: "transparent",
            color: "#fffef5",
            border: "1px solid #fffef5",
            borderRadius: 30,
            fontFamily: "DIN Pro", fontWeight: 900,
            fontSize: 14, lineHeight: "16px",
            textTransform: "uppercase",
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: 4,
            cursor: "pointer",
          }}>
            Partager
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7M16 6l-4-4-4 4M12 2v14"
                    stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button onClick={onNext}
                  className={`reveal reveal-d6 ${on ? "is-on" : ""}`}
                  style={{
            width: 154, height: 40,
            padding: 16,
            background: "#fffef5",
            color: "#292929",
            border: "none",
            borderRadius: 30,
            fontFamily: "DIN Pro", fontWeight: 900,
            fontSize: 14, lineHeight: "16px",
            textTransform: "uppercase",
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: 4,
            cursor: "pointer",
          }}>
            Continuer
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Screen05Profil, PROFIL_STATS });
