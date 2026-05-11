// Écran 02 — Tes produits de l'année
// Carrousel horizontal de 3 cartes : Le Plaisir Coupable (rose, active), Le Produit Phare (beige), L'achat improbable (lime pâle)
// Source: Figma node 26473:189834 (WRAP ANNUEL / 02-Produits de l'année)
// IMPORTANT: animations ajoutées dans une passe dédiée. useReveal + .reveal en place.

const PRODUITS_CARDS = [
  {
    key: "coupable",
    eyebrow: "Celui que tu achètes en douce",
    category: "Le plaisir coupable",
    photo: "icons/photos/02-card-cookie.jpg",
    achete: "Acheté 24 fois",
    name: "Cookie caramel beurre salé",
    quote: "“On ne juge pas. Enfin, un peu.”",
    bg: "#fbcfe6",         // exclu-app/200 rose
    quoteBg: "#f9a8d1",    // exclu-app/300 rose plus dense
  },
  {
    key: "phare",
    eyebrow: "Celui que tu achètes le plus",
    category: "Le produit phare",
    photo: "icons/photos/02-card-pita.jpg",
    achete: "Acheté 38 fois",
    name: "Pains pita",
    quote: "“Une découverte. Maintenant c'est une religion.”",
    bg: "#e6ddad",         // beige-fonce
    quoteBg: "#f9f4dc",    // beige-clair
  },
  {
    key: "improbable",
    eyebrow: "Celui qu'on n'explique pas",
    category: "L'achat improbable",
    photo: "icons/photos/02-card-merou.webp",
    achete: "Acheté 6 fois",
    name: "Mérou ondulé",
    quote: "Acheté par moins de 0,5% des clients Grand Frais",
    bg: "#edfdc4",         // primary-vert/100 lime pâle
    quoteBg: "#ddf39e",    // primary-vert/200 lime moins pâle
  },
];

function Screen02Produits({ active, onNext, onPrev }) {
  const on = useReveal(active);
  const [idx, setIdx] = React.useState(0);

  React.useEffect(() => { if (!active) setIdx(0); }, [active]);

  const go = (d) => setIdx(i => Math.max(0, Math.min(PRODUITS_CARDS.length - 1, i + d)));

  // Drag handling — works for both touch (mobile) and mouse (desktop)
  const drag = React.useRef({ startX: 0, isDown: false });
  const [dragDx, setDragDx] = React.useState(0);
  const SWIPE_THRESHOLD = 60;

  const onDragStart = (clientX) => {
    drag.current = { startX: clientX, isDown: true };
    setDragDx(0);
  };
  const onDragMove = (clientX) => {
    if (!drag.current.isDown) return;
    setDragDx(clientX - drag.current.startX);
  };
  const onDragEnd = () => {
    if (!drag.current.isDown) return;
    const dx = dragDx;
    drag.current.isDown = false;
    setDragDx(0);
    if (Math.abs(dx) > SWIPE_THRESHOLD) go(dx > 0 ? -1 : 1);
  };

  // Touch
  const onTouchStart = (e) => onDragStart(e.touches[0].clientX);
  const onTouchMove  = (e) => onDragMove(e.touches[0].clientX);
  const onTouchEnd   = () => onDragEnd();
  // Mouse
  const onMouseDown  = (e) => { e.preventDefault(); onDragStart(e.clientX); };
  const onMouseMove  = (e) => onDragMove(e.clientX);
  const onMouseUp    = () => onDragEnd();
  const onMouseLeave = () => onDragEnd();

  return (
    <div className="gf-app" style={{
      background: "#fffef5",
      color: "var(--gf-ink)",
      overflow: "hidden",
      position: "relative",
    }}>
      {/* Texture overlay (cream paper) */}
      <img src="icons/photos/02-bg.jpg" alt=""
           style={{
        position: "absolute", inset: 0,
        width: "100%", height: "100%",
        objectFit: "cover",
        mixBlendMode: "multiply", opacity: 0.2,
        pointerEvents: "none",
        zIndex: 0,
      }}/>

      {/* Status bar */}
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
          {/* Back button — absolute left:0 */}
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
            Chapitre 1 · Tes produits de l'année
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
          {/* Title */}
          <div className={`reveal reveal-d1 ${on ? "is-on" : ""}`}
               style={{
            fontFamily: "Fixture Condensed", fontWeight: 900,
            fontSize: 32, lineHeight: 1,
            color: "var(--gf-ink)",
            textTransform: "uppercase",
            textAlign: "center",
            width: "100%",
          }}>
            <div>Trois produits,</div>
            <div style={{ color: "#dc2670" }}>trois histoires.</div>
          </div>

          {/* Product list — horizontal carousel */}
          <div
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
            className={`reveal reveal-d2 ${on ? "is-on" : ""}`}
            style={{
              width: "100%",
              overflow: "hidden",
              cursor: drag.current.isDown ? "grabbing" : "grab",
              userSelect: "none",
              WebkitUserSelect: "none",
              touchAction: "pan-y",
            }}>
            <div style={{
              display: "flex", gap: 12,
              transform: `translateX(calc(${-idx} * (342px + 12px) + ${dragDx}px))`,
              transition: drag.current.isDown ? "none" : "transform 0.45s cubic-bezier(.2,.8,.3,1)",
              pointerEvents: drag.current.isDown ? "none" : "auto",
            }}>
              {PRODUITS_CARDS.map((card) => (
                <ProduitCard key={card.key} c={card} />
              ))}
            </div>
          </div>

          {/* Pagination dots */}
          <div style={{
            display: "flex", gap: 6, alignItems: "center",
            overflow: "hidden",
          }}>
            {PRODUITS_CARDS.map((_, i) => (
              <button key={i}
                onClick={() => setIdx(i)}
                aria-label={`Carte ${i + 1}`}
                style={{
                  width: i === idx ? 22 : 6,
                  height: 6,
                  borderRadius: 3,
                  background: i === idx ? "#292929" : "rgba(41,41,41,0.2)",
                  border: "none", padding: 0, cursor: "pointer",
                  transition: "width .3s, background .3s",
                }}/>
            ))}
          </div>
        </div>

        {/* ============================ */}
        {/* ACTION BUTTON — bottom right */}
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
// CARTE PRODUIT (3 variants : coupable, phare, improbable)
// =================================================
function ProduitCard({ c }) {
  return (
    <div style={{
      flexShrink: 0,
      width: 342,
      background: c.bg,
      padding: 16,
      display: "flex", flexDirection: "column",
      gap: 24,
      overflow: "hidden",
      boxShadow: "0px 16px 48px rgba(41,41,41,0.12)",
    }}>
      {/* Eyebrow + category title */}
      <div style={{
        display: "flex", flexDirection: "column",
        gap: 2,
        textTransform: "uppercase",
      }}>
        <div style={{
          fontFamily: "DIN Pro", fontWeight: 700,
          fontSize: 12, lineHeight: "12px",
          color: "rgba(41,41,41,0.7)",
          whiteSpace: "nowrap",
        }}>
          {c.eyebrow}
        </div>
        <div style={{
          fontFamily: "Fixture Condensed", fontWeight: 900,
          fontSize: 32, lineHeight: "30px",
          color: "#292929",
          whiteSpace: "nowrap",
        }}>
          {c.category}
        </div>
      </div>

      {/* Photo + product name */}
      <div style={{
        display: "flex", flexDirection: "column",
        gap: 8,
        width: "100%",
      }}>
        {/* Photo container with "Acheté X fois" pill */}
        <div style={{
          position: "relative",
          width: "100%", height: 277,
          padding: 8,
          display: "flex", flexDirection: "column",
          alignItems: "flex-end",
          backgroundImage: `url('${c.photo}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
          <div style={{
            background: "#fffef5",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "6px 8px",
            borderRadius: 8,
          }}>
            <div style={{
              fontFamily: "DIN Pro", fontWeight: 700,
              fontSize: 12, lineHeight: "12px",
              color: "#292929",
              whiteSpace: "nowrap",
            }}>
              {c.achete}
            </div>
          </div>
        </div>

        {/* Product name */}
        <div style={{
          fontFamily: "Fixture Condensed", fontWeight: 900,
          fontSize: 20, lineHeight: "20px",
          color: "#292929",
          textTransform: "uppercase",
          width: "100%",
        }}>
          {c.name}
        </div>
      </div>

      {/* Quote bar */}
      <div style={{
        width: "100%",
        background: c.quoteBg,
        borderRadius: 4,
        padding: "6px 8px",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          fontFamily: "DIN Pro", fontWeight: 700,
          fontSize: 12, lineHeight: "12px",
          color: "#292929",
          textAlign: "center",
          whiteSpace: "nowrap",
        }}>
          {c.quote}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Screen02Produits, ProduitCard, PRODUITS_CARDS });
