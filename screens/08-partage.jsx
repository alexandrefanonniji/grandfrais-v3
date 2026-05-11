// Écran 08 — Partage (chapitre final · merci)
// Poster card lime gradient avec logo GF en cercle, profil, plaisir coupable, 3 stats, hashtags
// + 2 boutons (Partager lime / Continuer cream)
// Source: Figma node 26473:190803 (WRAP ANNUEL / 08 - Partage)
// IMPORTANT: animations ajoutées dans une passe dédiée. useReveal + .reveal en place.

const PARTAGE_STATS = [
  { v: "892", l: "Produits achetés" },
  { v: "58",  l: "Visites" },
  { v: "15,4", l: "Produits par visite" },
];

function Screen08Partage({ active, onPrev, onShare, onRestart }) {
  const on = useReveal(active);
  const [showShare, setShowShare] = React.useState(false);

  return (
    <div className="gf-app" style={{
      background: "#292929",
      color: "var(--gf-cream)",
      overflow: "hidden",
      position: "relative",
    }}>
      {showShare && <ShareToastBar onClose={() => setShowShare(false)} />}
      {/* Fond noir (image partagée avec écran 01) */}
      <img src="icons/photos/01-bg.png" alt=""
           style={{
        position: "absolute", inset: 0,
        width: "100%", height: "100%",
        objectFit: "cover",
        pointerEvents: "none",
        zIndex: 0,
      }}/>

      <div style={{ position: "relative", zIndex: 3 }}>
        <StatusBar color="#fff" />
      </div>

      {/* Container — bg ink @30% par-dessus la texture */}
      <div style={{
        position: "absolute",
        top: 59, left: 0, right: 0,
        height: 785,
        padding: "16px 24px 40px",
        background: "rgba(41,41,41,0.3)",
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
            Chapitre final · Merci
          </div>
        </div>

        {/* ============================ */}
        {/* POSTER CARD                  */}
        {/* ============================ */}
        <div className={`reveal reveal-d1 ${on ? "is-on" : ""}`}
             style={{
          position: "relative",
          width: "100%", height: 581,
          padding: "40px 16px 24px",
          borderRadius: 16,
          background: "linear-gradient(190.93deg, #e5ff22 0%, #cce60c 48.56%, #a8cd02 100%)",
          display: "flex", flexDirection: "column",
          alignItems: "center", gap: 12,
        }}>
          {/* Logo Grand Frais (SVG vectoriel, scaling sans perte) — cercle en haut, rotation -8° */}
          <img src="icons/photos/08-logo.svg" alt="Grand Frais"
               style={{
            position: "absolute",
            top: -36, left: "50%",
            width: 72, height: 72,
            transform: "translateX(-50%)",
            filter: "drop-shadow(0 4px 8px rgba(0,0,0,.15))",
          }}/>

          {/* Profile card (image + nom) */}
          <div style={{
            flex: "1 0 0", minHeight: 0,
            width: "100%",
            display: "flex", flexDirection: "column",
            gap: 8,
          }}>
            {/* Caddie image */}
            <div style={{
              flex: "1 0 0", minHeight: 0,
              width: "100%",
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
            {/* Profile texts */}
            <div style={{
              display: "flex", flexDirection: "column",
              alignItems: "flex-start",
              color: "var(--gf-ink)",
              textTransform: "uppercase",
              width: "100%",
            }}>
              <div style={{
                fontFamily: "DIN Pro", fontWeight: 700,
                fontSize: 12, lineHeight: "12px",
                opacity: 0.7,
                whiteSpace: "nowrap",
              }}>
                Mon profil 2026
              </div>
              <div style={{
                fontFamily: "Fixture Condensed", fontWeight: 900,
                fontSize: 46, lineHeight: "46px",
                width: "100%",
              }}>
                Le Ravitailleur
              </div>
            </div>
          </div>

          {/* Séparateur */}
          <div style={{
            width: "100%", height: 1,
            background: "rgba(41,41,41,0.15)",
          }}/>

          {/* Plaisir coupable row */}
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            width: "100%",
            overflow: "hidden",
          }}>
            <img src="icons/photos/08-cookie.jpg" alt="Cookie"
                 style={{
              width: 64, height: 64,
              objectFit: "cover",
              flexShrink: 0,
            }}/>
            <div style={{
              flex: "1 0 0", minWidth: 0,
              display: "flex", flexDirection: "column",
              gap: 4,
              color: "var(--gf-ink)",
              overflow: "hidden",
            }}>
              <div style={{
                fontFamily: "DIN Pro", fontWeight: 400,
                fontSize: 10, lineHeight: "11px",
                opacity: 0.7,
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}>
                Mon plaisir coupable
              </div>
              <div style={{
                fontFamily: "Fixture Condensed", fontWeight: 900,
                fontSize: 20, lineHeight: "20px",
                textTransform: "uppercase",
                width: "100%",
              }}>
                Cookie caramel beurre salé
              </div>
            </div>
          </div>

          {/* Séparateur */}
          <div style={{
            width: "100%", height: 1,
            background: "rgba(41,41,41,0.15)",
          }}/>

          {/* 3 stats */}
          <div style={{
            display: "flex", gap: 4,
            alignItems: "flex-start",
            width: "100%",
            color: "var(--gf-ink)",
            overflow: "hidden",
          }}>
            {PARTAGE_STATS.map((s, i) => (
              <div key={i} style={{
                flex: "1 0 0", minWidth: 0,
                padding: 8,
                background: "rgba(19,19,19,0.05)",
                border: "0.5px solid rgba(33,33,33,0.34)",
                display: "flex", flexDirection: "column",
                alignItems: "center", gap: 4,
                overflow: "hidden",
              }}>
                <div style={{
                  fontFamily: "Fixture Condensed", fontWeight: 900,
                  fontSize: 20, lineHeight: "20px",
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

          {/* Séparateur */}
          <div style={{
            width: "100%", height: 1,
            background: "rgba(41,41,41,0.15)",
          }}/>

          {/* Footer hashtags */}
          <div style={{
            display: "flex", alignItems: "flex-start", justifyContent: "space-between",
            width: "100%",
            fontFamily: "DIN Pro", fontWeight: 700,
            fontSize: 14, lineHeight: "15px",
            color: "var(--gf-ink)",
            textAlign: "center",
            whiteSpace: "nowrap",
          }}>
            <div>@grandfrais</div>
            <div>#Grandfraiswrapped</div>
          </div>
        </div>

        {/* ============================ */}
        {/* ACTION BUTTONS               */}
        {/* ============================ */}
        <div style={{
          width: "100%",
          display: "flex", gap: 8, alignItems: "center", justifyContent: "center",
        }}>
          <button onClick={() => setShowShare(true)}
                  className={`reveal reveal-d5 ${on ? "is-on" : ""}`}
                  style={{
            flex: "1 0 0", minWidth: 0,
            height: 40,
            padding: 16,
            background: "#cce60c",
            color: "var(--gf-ink)",
            border: "none",
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
          <button onClick={onRestart}
                  className={`reveal reveal-d6 ${on ? "is-on" : ""}`}
                  style={{
            flex: "1 0 0", minWidth: 0,
            height: 40,
            padding: 16,
            background: "#fffef5",
            color: "var(--gf-ink)",
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

Object.assign(window, { Screen08Partage, PARTAGE_STATS });
