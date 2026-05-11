// Écran 03 — Ton rayon n°1
// Stat géante 41% en rose + bar chart photo (3 colonnes hauteur ≠) : Boucherie / F&L / Crèmerie
// Source: Figma node 26454:189017 (WRAP ANNUEL / 03 - Rayon n°1)
// IMPORTANT: animations ajoutées dans une passe dédiée. useReveal + .reveal en place.

// Container interne (h:359 - padding 16*2 = 327)
const RAYON_CONTAINER_INNER_H = 327;

const RAYONS = [
  {
    key: "boucherie",
    label: "BOUCHERIE",
    pct: 19,
    height: 188,
    photo: "icons/photos/03-boucherie.jpg",
    winner: false,
  },
  {
    key: "fruits-legumes",
    label: "FRUITS & LÉGUMES",
    pct: 41,
    height: RAYON_CONTAINER_INNER_H, // full inner height
    photo: "icons/photos/03-fruits-leg.jpg",
    winner: true,
  },
  {
    key: "cremerie",
    label: "CRÈMERIE & FROMAGERIE",
    pct: 16,
    height: 144,
    photo: "icons/photos/03-cremerie.jpg",
    winner: false,
  },
];

// Durée des animations (synchro entre montée des colonnes et chiffres)
const RAYON_ANIM_DURATION = 2100;
const RAYON_ANIM_DELAY = 400;     // attendre que l'écran soit posé avant suspens

function Screen03Rayon({ active, onNext, onPrev }) {
  const on = useReveal(active);

  // Compteur du gros 41% (titre central)
  const headlinePct = useCountUp(41, on, RAYON_ANIM_DURATION, RAYON_ANIM_DELAY);

  return (
    <div className="gf-app" style={{
      background: "#fffef5",
      color: "var(--gf-ink)",
      overflow: "hidden",
      position: "relative",
    }}>
      {/* Texture overlay */}
      <img src="icons/photos/03-bg.jpg" alt=""
           style={{
        position: "absolute", inset: 0,
        width: "100%", height: "100%",
        objectFit: "cover",
        mixBlendMode: "multiply", opacity: 0.2,
        pointerEvents: "none",
        zIndex: 0,
      }}/>

      <div style={{ position: "relative", zIndex: 3 }}>
        <StatusBar />
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
            border: "1px solid var(--gf-ink)",
            borderRadius: 30,
            color: "var(--gf-ink)",
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
            color: "var(--gf-ink)",
            textTransform: "uppercase",
            textAlign: "center",
            whiteSpace: "nowrap",
          }}>
            Chapitre 2 · Ton rayon n°1
          </div>
        </div>

        {/* ============================ */}
        {/* CONTENT — terrain de chasse  */}
        {/* ============================ */}
        <div className={`reveal reveal-d1 ${on ? "is-on" : ""}`}
             style={{
          width: "100%",
          display: "flex", flexDirection: "column",
          alignItems: "center", gap: 8,
          textTransform: "uppercase",
        }}>
          <div style={{
            fontFamily: "DIN Pro", fontWeight: 700,
            fontSize: 12, lineHeight: "12px",
            color: "#5d5d5d",
            width: "100%", textAlign: "center",
          }}>
            Ton terrain de chasse
          </div>
          <div style={{
            fontFamily: "Fixture Condensed", fontWeight: 900,
            fontSize: 32, lineHeight: "30px",
            color: "var(--gf-ink)",
            width: "100%", textAlign: "center",
          }}>
            Fruits & légumes
          </div>
          <div style={{
            width: "100%",
            padding: "0 24px",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            whiteSpace: "nowrap",
          }}>
            <div className={`reveal reveal-d2 ${on ? "is-on" : ""}`}
                 style={{
              fontFamily: "Fixture Condensed", fontWeight: 900,
              fontSize: 91, lineHeight: 1,
              color: "#dc2670",
              textAlign: "center",
              fontVariantNumeric: "tabular-nums",
            }}>
              {headlinePct}%
            </div>
            <div style={{
              fontFamily: "DIN Pro", fontWeight: 700,
              fontSize: 12, lineHeight: "12px",
              color: "#5d5d5d",
              textAlign: "center",
            }}>
              de tes achats
            </div>
          </div>
        </div>

        {/* ============================ */}
        {/* BAR CHART PHOTO              */}
        {/* ============================ */}
        <div className={`reveal reveal-d3 ${on ? "is-on" : ""}`}
             style={{
          width: "100%",
          height: 359,
          background: "#f9f4dc",
          padding: 16,
          display: "flex",
          alignItems: "flex-end", justifyContent: "center",
          gap: 8,
        }}>
          {RAYONS.map((r) => (
            <RayonColumn key={r.key} r={r} on={on} />
          ))}
        </div>

        {/* ============================ */}
        {/* CTA bottom right             */}
        {/* ============================ */}
        <div style={{
          width: "100%",
          display: "flex", justifyContent: "flex-end",
        }}>
          <button onClick={onNext}
                  className={`reveal reveal-d4 ${on ? "is-on" : ""}`}
                  style={{
            width: 154, height: 40,
            padding: 16,
            background: "var(--gf-ink)",
            color: "#fff",
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

// =================================================
// Colonne rayon (1 catégorie)
// La hauteur de la colonne s'anime de 0 vers sa valeur finale (suspens "barre qui monte"),
// et le pourcentage compte en synchro de 0% vers sa valeur finale.
// =================================================
function RayonColumn({ r, on }) {
  const animatedPct = useCountUp(r.pct, on, RAYON_ANIM_DURATION, RAYON_ANIM_DELAY);
  // Hauteur initiale très petite (pas 0 pour garder le label visible)
  // → grandit vers r.height en synchro avec le compteur
  const COLLAPSED_H = 50; // hauteur minimale pendant l'état initial (labels visibles, photo cachée)
  return (
    <div style={{
      flex: "1 0 0", minWidth: 0,
      height: on ? r.height : COLLAPSED_H,
      display: "flex", flexDirection: "column",
      alignItems: "center", gap: 8,
      transition: `height ${RAYON_ANIM_DURATION}ms cubic-bezier(.2,.7,.3,1) ${RAYON_ANIM_DELAY}ms`,
      willChange: "height",
    }}>
      <div style={{
        fontFamily: "DIN Pro", fontWeight: 700,
        fontSize: 12, lineHeight: "12px",
        color: "var(--gf-ink)",
        width: "100%", textAlign: "center",
        textTransform: "uppercase",
      }}>
        {r.label}
      </div>
      <div style={{
        fontFamily: "Fixture Condensed", fontWeight: 900,
        fontSize: 18, lineHeight: "19px",
        color: r.winner ? "var(--gf-ink)" : "#5d5d5d",
        width: "100%", textAlign: "center",
        textTransform: "uppercase",
        fontVariantNumeric: "tabular-nums",
      }}>
        {animatedPct}%
      </div>
      <div style={{
        flex: "1 0 0", minHeight: 0,
        width: "100%",
        position: "relative",
        overflow: "hidden",
        background: "#f6f6f6",
      }}>
        <img src={r.photo} alt={r.label}
             style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover",
        }}/>
      </div>
    </div>
  );
}

Object.assign(window, { Screen03Rayon, RayonColumn, RAYONS });
