/** Decorative V.G.A. holographic rings for the portfolio hero. */
export default function VGAArtwork() {
  return (
    <div className="vga-artwork" aria-hidden="true">
      <svg viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="vgaAura">
            <stop stopColor="#50DFFF" stopOpacity=".19" />
            <stop offset=".66" stopColor="#167CB5" stopOpacity=".055" />
            <stop offset="1" stopColor="#050B13" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="vgaRing" x1="82" y1="82" x2="398" y2="398" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A6F4FF" />
            <stop offset=".48" stopColor="#50DFFF" stopOpacity=".28" />
            <stop offset="1" stopColor="#167CB5" />
          </linearGradient>
        </defs>

        <circle cx="240" cy="240" r="238" fill="url(#vgaAura)" />
        <g className="vga-art-outer">
          <circle cx="240" cy="240" r="211" stroke="url(#vgaRing)" strokeWidth="1.2" strokeDasharray="2 8 38 10 5 14" />
          <circle cx="240" cy="240" r="198" stroke="#50DFFF" strokeOpacity=".34" strokeWidth=".8" strokeDasharray="1 12" />
          <path d="M240 8v25M240 447v25M8 240h25M447 240h25" stroke="#A6F4FF" strokeOpacity=".8" />
          <circle cx="240" cy="29" r="3.5" fill="#A6F4FF" />
          <circle cx="451" cy="240" r="3" fill="#50DFFF" />
        </g>
        <g className="vga-art-middle">
          <circle cx="240" cy="240" r="168" stroke="#50DFFF" strokeOpacity=".66" strokeWidth="1.1" strokeDasharray="46 12 4 14 18 10" />
          <circle cx="240" cy="240" r="154" stroke="#167CB5" strokeOpacity=".6" strokeWidth=".9" strokeDasharray="2 9" />
          <path d="m240 59 8 8-8 8-8-8 8-8ZM421 240l-8 8-8-8 8-8 8 8ZM240 421l-8-8 8-8 8 8-8 8ZM59 240l8-8 8 8-8 8-8-8Z" fill="#50DFFF" fillOpacity=".8" />
        </g>
        <g className="vga-art-inner">
          <circle cx="240" cy="240" r="123" stroke="#A6F4FF" strokeOpacity=".66" strokeWidth="1.2" strokeDasharray="56 12 3 12" />
          <circle cx="240" cy="240" r="108" stroke="#50DFFF" strokeOpacity=".25" />
          <path d="M240 111v18M240 351v18M111 240h18M351 240h18" stroke="#A6F4FF" strokeOpacity=".8" strokeWidth="1.4" />
          <circle cx="240" cy="240" r="82" fill="#07121B" fillOpacity=".35" stroke="#50DFFF" strokeOpacity=".25" />
        </g>
        <g fill="#A6F4FF">
          <circle cx="375" cy="139" r="3" />
          <circle cx="122" cy="337" r="2.5" fillOpacity=".7" />
          <circle cx="337" cy="371" r="2" fillOpacity=".65" />
        </g>
        <path d="M327 152l38-38M116 338l36-36M329 338l-28-28" stroke="#50DFFF" strokeOpacity=".3" strokeWidth=".8" />
        <path d="M240 39v18m0 366v18M39 240h18m366 0h18" stroke="#50DFFF" strokeOpacity=".3" strokeDasharray="2 4" />
      </svg>
      <span className="vga-art-label vga-art-label-top">V.G.A. / 01</span>
      <span className="vga-art-label vga-art-label-bottom">VIRTUAL GUIDANCE ARCHITECTURE</span>
    </div>
  );
}
