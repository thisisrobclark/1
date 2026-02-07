interface YuduLogoProps {
  height?: number;
  className?: string;
  showTagline?: boolean;
  color?: string;
}

export default function YuduLogo({
  height = 40,
  className = "",
  showTagline = false,
  color = "currentColor",
}: YuduLogoProps) {
  const iconH = height;
  const iconW = iconH * 0.75;
  const textH = iconH * 0.55;
  const taglineH = iconH * 0.22;
  const gap = iconH * 0.25;
  const totalW = iconW + gap + iconW * 2.8;

  return (
    <span className={`inline-flex items-center ${className}`}>
      {/* Geometric Icon Mark */}
      <svg
        width={iconW}
        height={iconH}
        viewBox="0 0 75 100"
        fill="none"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="square"
        strokeLinejoin="miter"
      >
        {/* Outer rectangle */}
        <rect x="2" y="2" width="71" height="96" />
        {/* V/chevron — top face of 3D box */}
        <line x1="2" y1="2" x2="38" y2="36" />
        <line x1="73" y1="2" x2="38" y2="36" />
        {/* Center vertical — stem of Y */}
        <line x1="38" y1="36" x2="38" y2="98" />
        {/* Left panel divider */}
        <line x1="22" y1="36" x2="22" y2="98" />
      </svg>

      {/* Text portion */}
      <span
        className="flex flex-col justify-center"
        style={{ marginLeft: gap, lineHeight: 1 }}
      >
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: textH,
            fontWeight: 300,
            letterSpacing: "0.08em",
            color,
          }}
        >
          YUDU
        </span>
        {showTagline && (
          <span
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: taglineH,
              fontWeight: 400,
              letterSpacing: "0.32em",
              color,
              marginTop: 2,
            }}
          >
            PRODUCTS
          </span>
        )}
      </span>
    </span>
  );
}
