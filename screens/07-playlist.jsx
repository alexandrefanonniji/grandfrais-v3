// Écran 07 — Le cadeau : tes recettes 2026
// Liste scrollable de 7 cartes recette + 2 boutons (Ajouté/Continuer)
// Source: Figma node 26473:190443 (WRAP ANNUEL / 07 - Playlist)
// IMPORTANT: animations ajoutées dans une passe dédiée. useReveal + .reveal en place.

const PLAYLIST_RECIPES = [
  { name: "Gratin dauphinois familial",   tag: "Parce que 62 kg de pommes de terre", dur: "50 min", diff: "FACILE",      img: "icons/photos/07-gratin.jpg" },
  { name: "Bolognaise du dimanche",       tag: "Ton rituel famille",                 dur: "1h15",   diff: "FACILE",      img: "icons/photos/07-bolognaise.jpg" },
  { name: "Tartine houmous-radis",        tag: "Pour ton côté Ravitailleur",         dur: "10 min", diff: "FACILE",      img: "icons/photos/07-houmous.jpg" },
  { name: "Poulet rôti aux légumes",      tag: "Parce que dimanche, c'est dimanche", dur: "1h10",   diff: "FACILE",      img: "icons/photos/07-poulet.jpg" },
  { name: "Soupe poireau-pomme de terre", tag: "Ton rayon Fruits & Légumes adore",   dur: "50 min", diff: "FACILE",      img: "icons/photos/07-soupe.jpg" },
  { name: "Tarte tomate-moutarde",        tag: "Parce que tomates = été = joie",     dur: "50 min", diff: "FACILE",      img: "icons/photos/07-tarte.jpg" },
  { name: "Cookies du goûter",            tag: "Jamais assez, avec 4 à nourrir",     dur: "25 min", diff: "TRÈS FACILE", img: "icons/photos/07-cookies.jpg" },
];

function Screen07Playlist({ active, onNext, onPrev }) {
  const on = useReveal(active);
  const [added, setAdded] = React.useState(false);
  // Reset état quand on quitte l'écran
  React.useEffect(() => { if (!active) setAdded(false); }, [active]);

  return (
    <div className="gf-app" style={{
      background: "#fffef5",
      color: "var(--gf-ink)",
      overflow: "hidden",
      position: "relative",
    }}>
      {/* Texture overlay */}
      <img src="icons/photos/07-bg.jpg" alt=""
           style={{
        position: "absolute", inset: 0,
        width: "100%", height: "100%",
        objectFit: "cover",
        mixBlendMode: "multiply", opacity: 0.2,
        pointerEvents: "none",
        zIndex: 0,
      }}/>

      <div style={{
        position: "relative", zIndex: 3,
        background: "#fffef5",
      }}>
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
            Chapitre 6 · Le cadeau
          </div>
        </div>

        {/* ============================ */}
        {/* ACHIEVEMENTS SECTION         */}
        {/* (Section header + scrollable list) */}
        {/* ============================ */}
        <div style={{
          width: "100%",
          height: 580, maxHeight: 580,
          display: "flex", flexDirection: "column",
          alignItems: "center", gap: 24,
        }}>
          {/* Section header */}
          <div className={`reveal reveal-d1 ${on ? "is-on" : ""}`}
               style={{
            width: "100%",
            display: "flex", flexDirection: "column",
            alignItems: "flex-start", gap: 4,
          }}>
            <div style={{
              width: "100%",
              fontFamily: "Fixture Condensed", fontWeight: 900,
              fontSize: 46, lineHeight: "46px",
              color: "var(--gf-ink)",
              textTransform: "uppercase",
              textAlign: "left",
            }}>
              Tes <span style={{ color: "#dc2670" }}>recettes</span> 2026
            </div>
            <div style={{
              width: "100%",
              fontFamily: "DIN Pro", fontWeight: 400,
              fontSize: 13, lineHeight: 1.45,
              color: "#4f4f4f",
            }}>
              <span style={{ fontWeight: 700, color: "var(--gf-ink)" }}>7 recettes</span>{" "}
              faites pour toi, basées sur toute ton année.
            </div>
          </div>

          {/* Scrollable list */}
          <div style={{
            flex: "1 0 0", minHeight: 0,
            position: "relative",
            width: 342,
          }}>
            <div style={{
              position: "absolute", inset: 0,
              overflowY: "auto", overflowX: "hidden",
              paddingBottom: 48,
              scrollbarWidth: "none",
            }}>
              {PLAYLIST_RECIPES.map((r, i) => (
                <RecipeCard key={i} r={r} delay={i} on={on} />
              ))}
            </div>
            {/* Fade gradient at bottom of list — fait passer du transparent au cream */}
            <div style={{
              position: "absolute", left: 0, right: 0, bottom: 0,
              height: 62,
              background: "linear-gradient(180deg, rgba(255,254,245,0) 0%, #fffef5 100%)",
              pointerEvents: "none",
            }}/>
          </div>
        </div>

        {/* ============================ */}
        {/* BUTTONS                      */}
        {/* ============================ */}
        <div style={{
          width: "100%",
          display: "flex", flexDirection: "column",
          alignItems: "flex-start", gap: 8,
        }}>
          {/* "Ajouter à mes playlists" → toggle vers "Ajouté avec succès" au clic */}
          <button onClick={() => setAdded(true)}
                  disabled={added}
                  className={`reveal reveal-d5 ${on ? "is-on" : ""}`}
                  style={{
            width: "100%", height: 40,
            padding: 16,
            background: "transparent",
            color: "var(--gf-ink)",
            border: "1px solid var(--gf-ink)",
            borderRadius: 30,
            fontFamily: "DIN Pro", fontWeight: 900,
            fontSize: 14, lineHeight: "16px",
            textTransform: "uppercase",
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: 4,
            cursor: added ? "default" : "pointer",
            transition: "color .25s ease, opacity .25s ease",
          }}>
            {added ? "Ajouté avec succès" : "Ajouter à mes playlists"}
            {added ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
          {/* "Continuer" — solid ink, white text */}
          <button onClick={onNext}
                  className={`reveal reveal-d6 ${on ? "is-on" : ""}`}
                  style={{
            width: "100%", height: 40,
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
// Carte recette
// =================================================
function RecipeCard({ r, delay, on }) {
  const dCls = delay <= 6 ? `reveal-d${Math.min(delay + 1, 6)}` : "reveal-d6";
  return (
    <div className={`reveal ${dCls} ${on ? "is-on" : ""}`}
         style={{
      width: "100%",
      marginBottom: 4,
      background: "#fffef5",
      border: "1px solid rgba(41,41,41,0.08)",
      display: "flex", alignItems: "center",
      overflow: "hidden",
    }}>
      {/* Thumbnail 70x70 */}
      <div style={{
        width: 70, height: 70,
        flexShrink: 0,
        background: "#e6ddad",
        position: "relative",
        overflow: "hidden",
        alignSelf: "stretch",
      }}>
        <img src={r.img} alt={r.name}
             style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover",
        }}/>
      </div>
      {/* Content */}
      <div style={{
        flex: "1 0 0", minWidth: 0,
        padding: 16,
        display: "flex", flexDirection: "column",
        gap: 4,
        overflow: "hidden",
      }}>
        <div style={{
          fontFamily: "Fixture Condensed", fontWeight: 900,
          fontSize: 18, lineHeight: "19px",
          color: "var(--gf-ink)",
          textTransform: "uppercase",
          width: "100%",
        }}>
          {r.name}
        </div>
        <div style={{
          fontFamily: "DIN Pro", fontWeight: 400,
          fontSize: 12, lineHeight: "12px",
          color: "#dc2670",
          width: "100%",
        }}>
          {r.tag}
        </div>
        <div style={{
          display: "flex", gap: 8, alignItems: "center",
          fontFamily: "DIN Pro", fontWeight: 700,
          fontSize: 10, lineHeight: "10px",
          color: "#5d5d5d",
          whiteSpace: "nowrap",
        }}>
          <span>{r.dur}</span>
          <span style={{ color: "#4f4f4f" }}>·</span>
          <span style={{ color: "#4f4f4f" }}>{r.diff}</span>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Screen07Playlist, RecipeCard, PLAYLIST_RECIPES });
