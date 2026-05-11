// Écran 04 — Le chiffre improbable
// Fond gradient marron + image patates fullbleed + "62KG" géant + box équivalence
// Source: Figma node 26454:189358 (WRAP ANNUEL / 04 - Chiffre improbable)
// IMPORTANT: animations ajoutées dans une passe dédiée. useReveal + .reveal en place.

// Timings d'animation
const KG_DELAY = 400;
const KG_DURATION = 1800;
const EQUIV_DELAY = KG_DELAY + KG_DURATION - 100; // équivalence fade-in dès que le compteur termine
const EQUIV_DURATION = 700;

function Screen04Chiffre({ active, onNext, onPrev }) {
  const on = useReveal(active);
  const kg = useCountUp(62, on, KG_DURATION, KG_DELAY);

  return (
    <div className="gf-app" style={{
      background: "linear-gradient(99.5deg, #C87F3D 0%, #8B4A1F 78%)",
      color: "var(--gf-cream)",
      overflow: "hidden",
      position: "relative",
    }}>
      {/* Texture overlay */}
      <img src="icons/photos/04-bg.jpg" alt=""
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
            flex: "1 0 0",
            fontFamily: "DIN Pro", fontWeight: 400,
            fontSize: 12, lineHeight: "12px",
            color: "var(--gf-cream)",
            textTransform: "uppercase",
            textAlign: "center",
          }}>
            Chapitre 3 · Le chiffre improbable
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
          {/* Image container — patates photo + texte "62KG" superposé en bas */}
          <div className={`reveal reveal-d1 ${on ? "is-on" : ""}`}
               style={{
            position: "relative",
            width: "100%", height: 480,
            padding: 24,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "flex-end",
            overflow: "hidden",
          }}>
            {/* Photo patates */}
            <img src="icons/photos/04-patates.jpg" alt=""
                 style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover",
              pointerEvents: "none",
            }}/>
            {/* Gradient fade noir en bas (54%→100%, 0 → rgba(0,0,0,0.2)) */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(180deg, rgba(0,0,0,0) 54%, rgba(0,0,0,0.2) 100%)",
              pointerEvents: "none",
            }}/>
            {/* Weight container */}
            <div style={{
              position: "relative",
              display: "flex", flexDirection: "column",
              alignItems: "center", gap: 8,
              color: "var(--gf-cream)",
              textTransform: "uppercase",
              textAlign: "center",
              width: "100%",
              filter: "drop-shadow(0 4px 15px rgba(0,0,0,0.25))",
            }}>
              <div style={{
                fontFamily: "Fixture Condensed", fontWeight: 900,
                fontSize: 124, lineHeight: "130px",
                whiteSpace: "nowrap",
                fontVariantNumeric: "tabular-nums",
              }}>
                {kg}kg
              </div>
              <div style={{
                fontFamily: "Fixture Condensed", fontWeight: 900,
                fontSize: 18, lineHeight: "19px",
                width: "100%",
              }}>
                de pommes de terre
              </div>
            </div>
          </div>

          {/* Equivalence box — fade in après le count-up des kg */}
          <div style={{
            width: "100%",
            padding: "18px 22px",
            background: "rgba(255,254,245,0.12)",
            border: "1px solid rgba(255,254,245,0.22)",
            display: "flex", flexDirection: "column",
            gap: 8,
            overflow: "hidden",
            opacity: on ? 1 : 0,
            transition: `opacity ${EQUIV_DURATION}ms ease-out ${EQUIV_DELAY}ms`,
            willChange: "opacity",
          }}>
            <div style={{
              fontFamily: "DIN Pro", fontWeight: 700,
              fontSize: 12, lineHeight: "12px",
              color: "#cdd508",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}>
              ≈ Équivalence
            </div>
            <div style={{
              fontFamily: "DIN Pro", fontWeight: 700,
              fontSize: 18, lineHeight: "18px",
              color: "#fffef5",
              width: "100%",
            }}>
              C'est le poids moyen d'un adulte.<br/>
              Tu pourrais sculpter une Julie en purée.
            </div>
          </div>
        </div>

        {/* ============================ */}
        {/* CTA — bottom right           */}
        {/* ============================ */}
        <div style={{
          width: "100%",
          display: "flex", justifyContent: "flex-end",
        }}>
          <button onClick={onNext}
                  className={`reveal reveal-d3 ${on ? "is-on" : ""}`}
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

Object.assign(window, { Screen04Chiffre });
