// Bottom sheets iOS-style pour le partage
// - ShareToastBar         : écran 08 — récap complet (carte lime + logo GF + plaisir coupable + stats + hashtags)
// - ShareProfileToastBar  : écran 05 — profil culinaire (image + titre + tagline + stats)
// Source: Figma node 26454:140865

const SHARE_APPS = [
  { name: "Messages",  img: "icons/photos/share/msg.png" },
  { name: "Instagram", img: "icons/photos/share/instagram.png" },
  { name: "Tiktok",    img: "icons/photos/share/tiktok.png" },
  { name: "Whatsapp",  img: "icons/photos/share/whatsapp.png" },
  { name: "Photos",    img: "icons/photos/share/photos.png" },
  { name: "Facebook",  bg: "#1877F2", letter: "f" },
  { name: "Fichiers",  img: "icons/photos/share/files.png" },
  { name: "Mail",      img: "icons/photos/share/mail.png" },
  { name: "Autre",     isOther: true },
];

function ShareAppIcon({ app }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flexShrink: 0 }}>
      <div style={{
        width: 60, height: 60, borderRadius: 16,
        overflow: "hidden",
        background: app.bg || (app.isOther ? "#e5e5ea" : "transparent"),
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer",
        boxShadow: "0 1px 1px rgba(0,0,0,.15)",
      }}>
        {app.img ? (
          <img src={app.img} alt={app.name}
               style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
        ) : app.isOther ? (
          <div style={{ display: "flex", gap: 4 }}>
            {[0,1,2].map(i => (
              <div key={i} style={{
                width: 4, height: 4, borderRadius: "50%", background: "#8e8e93",
              }}/>
            ))}
          </div>
        ) : (
          <span style={{
            fontFamily: "Fixture Condensed", fontWeight: 900,
            fontSize: 36, color: "#fff", lineHeight: 1,
          }}>
            {app.letter}
          </span>
        )}
      </div>
      <span style={{
        fontFamily: "DIN Pro", fontWeight: 700,
        fontSize: 10, lineHeight: "10px",
        color: "#292929", whiteSpace: "nowrap",
      }}>
        {app.name}
      </span>
    </div>
  );
}

// Wrapper commun : scrim + sheet animée qui slide-up depuis le bas
function BottomSheet({ onClose, gap = 16, paddingBottom = 32, children }) {
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setOn(true), 20);
    return () => clearTimeout(t);
  }, []);

  const handleClose = () => {
    setOn(false);
    setTimeout(onClose, 350);
  };

  return (
    <React.Fragment>
      {/* Scrim */}
      <div onClick={handleClose}
           style={{
        position: "absolute", inset: 0, zIndex: 400,
        background: on ? "rgba(10,10,10,.5)" : "rgba(10,10,10,0)",
        transition: "background .35s",
      }}/>

      {/* Sheet */}
      <div onClick={(e) => e.stopPropagation()}
           style={{
        position: "absolute", left: 0, right: 0, bottom: 0, zIndex: 401,
        height: 746,
        background: "#fffef5",
        borderRadius: "32px 32px 0 0",
        transform: on ? "translateY(0)" : "translateY(100%)",
        transition: "transform .4s cubic-bezier(.2,1,.3,1)",
        display: "flex", flexDirection: "column",
        padding: `16px 16px ${paddingBottom}px`,
        gap,
        overflow: "hidden",
      }}>
        {/* Drag handle */}
        <div style={{
          position: "absolute", top: 12, left: "50%",
          transform: "translateX(-50%)",
          width: 41, height: 4,
          background: "rgba(60,60,67,.3)",
          borderRadius: 2,
        }}/>

        {/* Close button */}
        <div style={{ display: "flex", justifyContent: "flex-end", flexShrink: 0 }}>
          <button onClick={handleClose} aria-label="Fermer"
                  style={{
            width: 40, height: 40,
            border: "1px solid #292929",
            borderRadius: "50%",
            background: "transparent",
            cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 0,
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="#292929" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {children}
      </div>
    </React.Fragment>
  );
}

// === Share-ToastBar (écran 08 — récap complet) =========================
function ShareToastBar({ onClose }) {
  return (
    <BottomSheet onClose={onClose} gap={16} paddingBottom={32}>
      {/* Carte poster lime */}
      <div style={{
        position: "relative",
        width: "100%", height: 522,
        padding: "40px 24px 24px",
        borderRadius: 16,
        background: "linear-gradient(189.4deg, #e5ff22 0%, #cce60c 48.56%, #a8cd02 100%)",
        display: "flex", flexDirection: "column", gap: 9,
        flexShrink: 0,
        color: "#292929",
      }}>
        {/* Logo GF — chevauche le haut de la carte */}
        <img src="icons/photos/08-logo.svg" alt="Grand Frais"
             style={{
          position: "absolute",
          top: -36, left: "50%",
          width: 72, height: 72,
          transform: "translateX(-50%) rotate(-8deg)",
          filter: "drop-shadow(0 4px 8px rgba(0,0,0,.15))",
        }}/>

        {/* Summary image + texte */}
        <div style={{ flex: "1 0 0", minHeight: 0, display: "flex", flexDirection: "column", gap: 8, width: "100%" }}>
          <div style={{ flex: "1 0 0", minHeight: 0, position: "relative", overflow: "hidden" }}>
            <img src="icons/photos/ravitailleur-v3.png" alt="Caddie"
                 style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}/>
          </div>
          <div style={{ display: "flex", flexDirection: "column", textTransform: "uppercase", width: "100%" }}>
            <div style={{ fontFamily: "DIN Pro", fontWeight: 700, fontSize: 12, lineHeight: "12px", opacity: .7 }}>
              Mon profil 2026
            </div>
            <div style={{ fontFamily: "Fixture Condensed", fontWeight: 900, fontSize: 46, lineHeight: "46px" }}>
              Le Ravitailleur
            </div>
          </div>
        </div>

        {/* Sep */}
        <div style={{ width: "100%", height: 1, background: "rgba(41,41,41,.15)", flexShrink: 0 }}/>

        {/* Plaisir coupable */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, width: "100%", overflow: "hidden", flexShrink: 0 }}>
          <img src="icons/photos/08-cookie.jpg" alt="Cookie"
               style={{ width: 64, height: 64, objectFit: "cover", flexShrink: 0 }}/>
          <div style={{ flex: "1 0 0", minWidth: 0, display: "flex", flexDirection: "column", gap: 4, overflow: "hidden" }}>
            <div style={{ fontFamily: "DIN Pro", fontWeight: 400, fontSize: 10, lineHeight: "11px", opacity: .7, textTransform: "uppercase", whiteSpace: "nowrap" }}>
              Mon plaisir coupable
            </div>
            <div style={{ fontFamily: "Fixture Condensed", fontWeight: 900, fontSize: 20, lineHeight: "20px", textTransform: "uppercase" }}>
              Cookie caramel beurre salé
            </div>
          </div>
        </div>

        {/* Sep */}
        <div style={{ width: "100%", height: 1, background: "rgba(41,41,41,.15)", flexShrink: 0 }}/>

        {/* 3 stats */}
        <div style={{ display: "flex", gap: 4, width: "100%", overflow: "hidden", flexShrink: 0 }}>
          {[["892","Produits achetés"],["58","Visites"],["15,4","Produits par visite"]].map(([v, l], i) => (
            <div key={i} style={{
              flex: "1 0 0", minWidth: 0, padding: 8,
              background: "rgba(19,19,19,.05)",
              border: ".5px solid rgba(33,33,33,.34)",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
              overflow: "hidden",
            }}>
              <div style={{ fontFamily: "Fixture Condensed", fontWeight: 900, fontSize: 20, lineHeight: "20px", textTransform: "uppercase", whiteSpace: "nowrap" }}>{v}</div>
              <div style={{ fontFamily: "DIN Pro", fontWeight: 400, fontSize: 8, lineHeight: "8px", textAlign: "center", width: "100%" }}>{l}</div>
            </div>
          ))}
        </div>

        {/* Sep */}
        <div style={{ width: "100%", height: 1, background: "rgba(41,41,41,.15)", flexShrink: 0 }}/>

        {/* Hashtags */}
        <div style={{
          display: "flex", justifyContent: "space-between", width: "100%",
          fontFamily: "DIN Pro", fontWeight: 700, fontSize: 14, lineHeight: "15px",
          whiteSpace: "nowrap", flexShrink: 0,
        }}>
          <span>@grandfrais</span>
          <span>#Grandfraiswrapped</span>
        </div>
      </div>

      {/* Share section */}
      <ShareSection title="Partager mon récap" />
    </BottomSheet>
  );
}

// === Share-Profile-ToastBar (écran 05 — profil culinaire) ===============
function ShareProfileToastBar({ onClose }) {
  return (
    <BottomSheet onClose={onClose} gap={20} paddingBottom={40}>
      {/* Carte light lime */}
      <div style={{
        flex: "1 0 0", minHeight: 0,
        background: "#f8fee8",
        padding: 16,
        display: "flex", flexDirection: "column", gap: 20,
        width: "100%",
      }}>
        {/* Profile image + texte */}
        <div style={{ flex: "1 0 0", minHeight: 0, display: "flex", flexDirection: "column", gap: 12, width: "100%" }}>
          <div style={{ flex: "1 0 0", minHeight: 0, position: "relative", overflow: "hidden" }}>
            <img src="icons/photos/ravitailleur-v3.png" alt="Caddie"
                 style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}/>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4, color: "#292929", width: "100%" }}>
            <div style={{ fontFamily: "Fixture Condensed", fontWeight: 900, fontSize: 32, lineHeight: "30px", textTransform: "uppercase", whiteSpace: "nowrap" }}>
              Le ravitailleur
            </div>
            <div style={{ fontFamily: "DIN Pro", fontWeight: 400, fontSize: 14, lineHeight: "15px" }}>
              Tu ne fais pas tes courses. Tu approvisionnes.
            </div>
          </div>
        </div>

        {/* 3 stats */}
        <div style={{ display: "flex", gap: 8, width: "100%", overflow: "hidden", color: "#292929", flexShrink: 0 }}>
          {[["892","Produits achetés"],["58","Visites"],["15,4","Produits par visite"]].map(([v, l], i) => (
            <div key={i} style={{
              flex: "1 0 0", minWidth: 0, padding: "12px 8px",
              background: "rgba(0,0,0,.05)",
              border: ".5px solid rgba(0,0,0,.34)",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
              overflow: "hidden",
            }}>
              <div style={{ fontFamily: "Fixture Condensed", fontWeight: 900, fontSize: 22, lineHeight: "22px", textTransform: "uppercase", whiteSpace: "nowrap" }}>{v}</div>
              <div style={{ fontFamily: "DIN Pro", fontWeight: 400, fontSize: 10, lineHeight: "11px", textAlign: "center", width: "100%" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Share section */}
      <ShareSection title="Partager mon profil culinaire" />
    </BottomSheet>
  );
}

function ShareSection({ title }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%", flexShrink: 0 }}>
      <div style={{
        fontFamily: "DIN Pro", fontWeight: 700,
        fontSize: 17, lineHeight: "22px",
        letterSpacing: "-.408px",
        color: "#292929",
      }}>
        {title}
      </div>
      <div style={{
        display: "flex", gap: 11, alignItems: "flex-start",
        overflowX: "auto",
        scrollbarWidth: "none",
        WebkitOverflowScrolling: "touch",
        paddingBottom: 4,
        marginRight: -16,
      }}>
        {SHARE_APPS.map((app, i) => <ShareAppIcon key={i} app={app} />)}
      </div>
    </div>
  );
}

Object.assign(window, { ShareToastBar, ShareProfileToastBar });
