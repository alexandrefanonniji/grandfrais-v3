// Shared UI primitives drawn from the Grand Frais UI kit
// (Buttons, tags, status bar, produce placeholders, reveal wrapper, confetti)

// ---- Status bar (generic — neutral iOS-style) ----
function StatusBar({ color = "var(--gf-ink)" }) {
  return (
    <div className="gf-status" style={{ color }}>
      <span>9:41</span>
      <div className="ind">
        {/* signal */}
        <div style={{ display: "flex", gap: 2, alignItems: "flex-end", height: 10 }}>
          {[3,5,7,9].map((h,i) => <div key={i} className="bar" style={{ height: h }} />)}
        </div>
        {/* wifi */}
        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" aria-hidden>
          <path d="M7.5 10.5l2-2.5a3.2 3.2 0 00-4 0l2 2.5z" fill="currentColor"/>
          <path d="M3 6.3a7 7 0 019 0" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
          <path d="M1 3.8a10 10 0 0113 0" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
        </svg>
        <div className="bat"><div className="bat-fill" /></div>
      </div>
    </div>
  );
}

// ---- Kit buttons ----
function Btn({ variant = "primary", children, onClick, icon, style, className = "" }) {
  const map = { primary: "gf-btn-primary", appOnly: "gf-btn-appOnly", secondary: "gf-btn-secondary" };
  return (
    <button className={`gf-btn ${map[variant]} gf-btn-block ${className}`} onClick={onClick} style={style}>
      {children}
      {icon}
    </button>
  );
}

// ---- Tag (kit component — border+fill variations) ----
function Tag({ children, fill = "var(--gf-ink)", color = "var(--gf-cream)", style }) {
  return <span className="gf-tag" style={{ background: fill, color, ...style }}>{children}</span>;
}

// ---- Real produce illustration ----
// Mapping from label (uppercase, accent-free) → SVG filename (in icons/produce/)
const PRODUCE_MAP = {
  ABRICOT: "Abricots", ABRICOTS: "Abricots",
  AIL: "Ail",
  AMANDE: "Amande", AMANDES: "Amande",
  POMME: "Apple", APPLE: "Apple",
  ASPERGE: "Asperge", ASPERGES: "Asperge",
  AUBERGINE: "Aubergine",
  AVOCAT: "Avocat",
  BANANE: "Banane", BANANES: "Banane",
  BETTERAVE: "Betterave",
  BROCHETTE: "Brochette",
  BROCOLI: "Brocoli",
  CACAHOUETE: "Cacahouete", CACAHUETE: "Cacahouete",
  CAROTTE: "Carotte", CAROTTES: "Carotte",
  CHAMPIGNON: "Champignon", CHAMPIGNONS: "Champignon",
  CITRON: "Citron", CITRONS: "Citron",
  CONFITURE: "Confiture",
  COOKIE: "Cookie", COOKIES: "Cookie",
  FARFALLE: "Farfalle", FARFALLES: "Farfalle",
  FENOUIL: "Fenouil",
  FIGUE: "Figue", FIGUES: "Figue",
  FRAISE: "Fraise", FRAISES: "Fraise",
  FROMAGE: "Fromage", CAMEMBERT: "Fromage", BRIE: "Fromage",
  "JUS D'ORANGE": "Jus-Orange", "JUS ORANGE": "Jus-Orange",
  NOIX: "Noix",
  OEUF: "Oeuf", OEUFS: "Oeuf",
  OLIVE: "Olive", OLIVES: "Olive",
  "ORANGE ENTIERE": "Orange-Entiere",
  ORANGE: "Orange", ORANGES: "Orange",
  PASTEQUE: "Pasteque",
  PECHE: "Peche", PECHES: "Peche",
  PENNE: "Penne", PENNES: "Penne",
  POIRE: "Poire", POIRES: "Poire",
  POIREAU: "Poireau", POIREAUX: "Poireau",
  POISSON: "Poisson",
  POIVRON: "Poivron", POIVRONS: "Poivron",
  POULET: "Poulet",
  RADIS: "Radis",
  SALADE: "Salade",
  SAUMON: "Saumon",
  SAUMON: "Saumon",
  STEAK: "Steak", BOEUF: "Steak", "ENTRECOTE": "Steak",
  TOMATE: "Tomate", TOMATES: "Tomate",
  "TOMME": "Tomme-Fromage", "TOMME FROMAGE": "Tomme-Fromage",
  TORTELLINI: "Tortellinis", TORTELLINIS: "Tortellinis",
};

function produceKey(label) {
  if (!label) return null;
  const norm = String(label)
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // strip accents
    .toUpperCase()
    .replace(/[^A-Z' ]/g, "")
    .trim();
  return PRODUCE_MAP[norm] || null;
}

// Realistic produce illustration (uses real SVG if available, else falls back to placeholder)
function Produce({ label, w, h, style }) {
  const key = produceKey(label);
  if (!key) return <ProducePH label={label} w={w} h={h} style={style}/>;
  return (
    <img src={`icons/produce/${key}.svg`} alt={label}
         style={{ width: w, height: h, objectFit: "contain",
                  display: "block", pointerEvents: "none", ...style }}/>
  );
}

// Name of all available produce (for random picks in transition, etc)
const PRODUCE_NAMES = [
  "TOMATE","CITRON","FROMAGE","STEAK","OLIVE","FRAISE","POMME","BANANE",
  "CAROTTE","AVOCAT","POIVRON","AUBERGINE","ORANGE","BROCOLI","POIRE","PECHE",
  "RADIS","SALADE","POISSON","POULET","NOIX","COOKIE","FIGUE","OEUF",
];

// ---- Produce placeholder (stripes + label) — kept as fallback ----
function ProducePH({ label = "PRODUIT", w, h, radius = 0, tone = "sand", style }) {
  // If we have a real illustration, prefer it
  const key = produceKey(label);
  if (key) {
    return (
      <img src={`icons/produce/${key}.svg`} alt={label}
           style={{ width: w, height: h, objectFit: "contain",
                    display: "block", pointerEvents: "none", ...style }}/>
    );
  }
  const tones = {
    sand: { bg: "var(--gf-sand)", stripe: "rgba(131,119,16,.18)", text: "var(--gf-olive-dark)" },
    lime: { bg: "var(--gf-lime-soft)", stripe: "rgba(111,96,20,.22)", text: "var(--gf-olive-dark)" },
    cream: { bg: "var(--gf-cream)", stripe: "rgba(41,41,41,.07)", text: "rgba(41,41,41,.5)" },
    pink: { bg: "var(--gf-pink-soft)", stripe: "rgba(203,28,72,.2)", text: "var(--gf-burgundy)" },
    ink: { bg: "var(--gf-ink)", stripe: "rgba(255,254,245,.08)", text: "rgba(255,254,245,.5)" },
  };
  const t = tones[tone] || tones.sand;
  return (
    <div className="produce" style={{
      width: w, height: h, borderRadius: radius,
      backgroundColor: t.bg,
      backgroundImage: `repeating-linear-gradient(45deg, ${t.stripe} 0 6px, transparent 6px 14px)`,
      color: t.text,
      ...style,
    }}>{label}</div>
  );
}

// ---- Reveal on mount ----
function useReveal(active) {
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    if (active) {
      setOn(false);
      const t = setTimeout(() => setOn(true), 40);
      return () => clearTimeout(t);
    } else {
      setOn(false);
    }
  }, [active]);
  return on;
}

// ---- Falling mini-produce layer (ex-Sparkles) ----
// Replaces the old confetti shapes with tiny produce SVGs that fall slowly
// and rotate. Each piece picks a random produce from PRODUCE_NAMES.
function Sparkles({ items = 14 }) {
  // Disabled: animation des illustrations qui tombent désactivée sur tous les écrans.
  // Pour la réactiver, supprimer la ligne ci-dessous.
  return null;
  // eslint-disable-next-line no-unreachable
  const pieces = React.useMemo(() => (
    Array.from({ length: items }, (_, i) => ({
      id: i,
      left: Math.random() * 94 + 3,
      delay: Math.random() * 6,
      dur: 7 + Math.random() * 7,         // slow drift, 7–14s
      size: 14 + Math.random() * 14,      // 14–28px — tiny but recognizable
      label: PRODUCE_NAMES[Math.floor(Math.random() * PRODUCE_NAMES.length)],
      rot: Math.random() * 360,
      opacity: 0.55 + Math.random() * 0.35,
    }))
  ), [items]);
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 1 }}>
      {pieces.map(p => (
        <div key={p.id} style={{
          position: "absolute", left: `${p.left}%`, top: -30,
          width: p.size, height: p.size,
          animation: `gfFall ${p.dur}s linear ${p.delay}s infinite`,
          willChange: "transform",
        }}>
          <div style={{ width: "100%", height: "100%", opacity: p.opacity, transform: `rotate(${p.rot}deg)` }}>
            <Produce label={p.label} w={p.size} h={p.size}/>
          </div>
        </div>
      ))}
    </div>
  );
}

// Small sparkle burst (decorative, static)
function SparkBurst({ size = 20, color = "var(--gf-lime)", style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style} aria-hidden>
      <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M19 5l-4 4M9 15l-4 4" stroke={color} strokeWidth="2.2" strokeLinecap="round"/>
    </svg>
  );
}

// Bottom back arrow ("retour" chevron, common in kit)
function BackButton({ onClick, color = "var(--gf-ink)" }) {
  return (
    <button onClick={onClick} aria-label="Retour" style={{
      border: "none", background: "transparent", padding: 8, cursor: "pointer",
      color, display: "flex", alignItems: "center",
    }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

// Page progress (1/5 etc) — matches kit's pagedots style
function PageProgress({ total = 5, index = 0, color = "var(--gf-ink)" }) {
  return (
    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
      {Array.from({ length: total }).map((_, i) => (
        <span key={i} style={{
          width: i === index ? 22 : 6, height: 6, borderRadius: 3,
          background: i <= index ? color : `color-mix(in oklab, ${color} 20%, transparent)`,
          transition: "width .3s, background .3s",
        }} />
      ))}
    </div>
  );
}

// Header bar: back + counter
function TopBar({ onBack, index, total, color = "var(--gf-ink)" }) {
  return (
    <div style={{
      position: "absolute", top: 54, left: 0, right: 0, padding: "8px 20px",
      display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 20,
    }}>
      <BackButton onClick={onBack} color={color} />
      <PageProgress total={total} index={index} color={color} />
      <div style={{ width: 38 }} />
    </div>
  );
}

// ---- useCountUp ----
// Anime un nombre de 0 → target sur `duration` ms, avec ease-out cubique.
// Démarre quand `active` passe à true. Optionnel `delay` ms avant le start.
function useCountUp(target, active, duration = 1200, delay = 0) {
  const [v, setV] = React.useState(0);
  React.useEffect(() => {
    if (!active) { setV(0); return; }
    let raf, start;
    const t = setTimeout(() => {
      const step = (ts) => {
        if (!start) start = ts;
        const p = Math.min(1, (ts - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setV(Math.round(target * eased));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, delay);
    return () => { clearTimeout(t); cancelAnimationFrame(raf); };
  }, [active, target, duration, delay]);
  return v;
}

Object.assign(window, { StatusBar, Btn, Tag, ProducePH, Produce, PRODUCE_MAP, PRODUCE_NAMES, produceKey, useReveal, useCountUp, Sparkles, SparkBurst, BackButton, PageProgress, TopBar });
