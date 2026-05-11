// Écran 06 — Mon Fridge
// Fond gradient bleu + badge "SAC' CÉLÈRE" + "156 PARTIES JOUÉES" + carte "Joueur invétéré"
// Source: Figma node 26473:190118 (WRAP ANNUEL / 06 - Mon Fridge)
// IMPORTANT: animations ajoutées dans une passe dédiée. useReveal + .reveal en place.

function Screen06Fridge({ active, onNext, onPrev }) {
  const on = useReveal(active);

  return (
    <div className="gf-app" style={{
      background: "linear-gradient(182.6deg, #7CC3E8 5.8%, #2A7AB5 55%, #0F3E6B 95.27%)",
      color: "var(--gf-cream)",
      overflow: "hidden",
      position: "relative",
    }}>
      {/* Texture overlay */}
      <img src="icons/photos/06-bg.jpg" alt=""
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
            Chapitre 5 · Mon Fridge
          </div>
        </div>

        {/* ============================ */}
        {/* ACHIEVEMENTS SECTION         */}
        {/* ============================ */}
        <div style={{
          width: "100%",
          display: "flex", flexDirection: "column",
          alignItems: "center", gap: 24,
        }}>
          {/* Title: "Tes exploits / Mon Fridge" */}
          <div className={`reveal reveal-d1 ${on ? "is-on" : ""}`}
               style={{
            fontFamily: "Fixture Condensed", fontWeight: 900,
            fontSize: 32, lineHeight: 1,
            textTransform: "uppercase",
            textAlign: "center",
            width: "100%",
          }}>
            <div style={{ color: "var(--gf-cream)" }}>Tes exploits</div>
            <div style={{ color: "#cde6b6" }}>Mon Fridge</div>
          </div>

          {/* Badge "SAC' CÉLÈRE" + Number 156 + "PARTIES JOUÉES" */}
          <div style={{
            width: 342,
            paddingTop: 18,
            display: "flex", flexDirection: "column",
            alignItems: "center", gap: 4,
            overflow: "hidden",
          }}>
            <img src="icons/photos/06-sac-celere.png"
                 alt="Sac célère"
                 className={`reveal reveal-d2 ${on ? "is-on" : ""}`}
                 style={{
              width: 204, height: 95,
              objectFit: "contain",
              filter: "drop-shadow(0 6px 18px rgba(0,0,0,.25))",
            }}/>
            <div className={`reveal reveal-d3 ${on ? "is-on" : ""}`}
                 style={{
              fontFamily: "Fixture Condensed", fontWeight: 900,
              fontSize: 180, lineHeight: 0.88,
              letterSpacing: "-0.04em",
              color: "var(--gf-cream)",
              textAlign: "center",
              whiteSpace: "nowrap",
              fontVariantNumeric: "tabular-nums",
              textShadow: "0 8px 50px rgba(255,255,255,0.18)",
            }}>
              156
            </div>
            <div className={`reveal reveal-d4 ${on ? "is-on" : ""}`}
                 style={{
              fontFamily: "Fixture Condensed", fontWeight: 900,
              fontSize: 32, lineHeight: "30px",
              color: "#cde6b6",
              textTransform: "uppercase",
              textAlign: "center",
              width: "100%",
            }}>
              Parties jouées
            </div>
          </div>
        </div>

        {/* ============================ */}
        {/* JOUEUR INVÉTÉRÉ card         */}
        {/* ============================ */}
        <div className={`reveal reveal-d5 ${on ? "is-on" : ""}`}
             style={{
          width: "100%",
          padding: "12px 16px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,254,245,0.1)",
          borderRadius: 16,
          display: "flex", flexDirection: "column",
          alignItems: "center", gap: 8,
          overflow: "hidden",
        }}>
          <div style={{
            fontFamily: "Fixture Condensed", fontWeight: 900,
            fontSize: 20, lineHeight: "20px",
            color: "var(--gf-cream)",
            textTransform: "uppercase",
            textAlign: "center",
            width: "100%",
          }}>
            Joueur invétéré.
          </div>
          <div style={{
            display: "flex", alignItems: "center",
            fontFamily: "DIN Pro", fontWeight: 400,
            fontSize: 14, lineHeight: "15px",
            color: "var(--gf-cream)",
            whiteSpace: "nowrap",
          }}>
            🏆&nbsp;Dans le top 8% des joueurs de ton magasin.
          </div>
        </div>

        {/* ============================ */}
        {/* CTA bottom right             */}
        {/* ============================ */}
        <div style={{
          width: "100%",
          display: "flex", justifyContent: "flex-end",
        }}>
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

Object.assign(window, { Screen06Fridge });
