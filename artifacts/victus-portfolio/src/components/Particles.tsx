import type { CSSProperties, SVGProps } from "react";
import {
  SiCanva,
  SiCss,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPython,
  SiWix,
} from "react-icons/si";

function LightroomLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" role="img" {...props}>
      <rect
        x="7"
        y="7"
        width="50"
        height="50"
        rx="11"
        fill="#001E36"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path d="M18 43V20h5.4v18.3h10.4V43H18Z" fill="currentColor" />
      <path
        d="M37.4 43V27.2h4.5l0.3 2.7c1.1-2 2.9-3 5.4-3 0.5 0 0.9 0 1.3 0.1v5.1c-0.6-0.1-1.2-0.2-1.9-0.2-2.8 0-4.1 1.5-4.1 4.5V43h-5.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

const skillNodes = [
  { Icon: SiHtml5, label: "HTML", className: "skill-node-html" },
  { Icon: SiCss, label: "CSS", className: "skill-node-css" },
  { Icon: SiJavascript, label: "JavaScript", className: "skill-node-js" },
  { Icon: SiPython, label: "Python", className: "skill-node-python" },
  { Icon: LightroomLogo, label: "Adobe Lightroom", className: "skill-node-lightroom-a" },
  { Icon: SiMysql, label: "SQL", className: "skill-node-sql" },
  { Icon: SiFigma, label: "Figma", className: "skill-node-figma" },
  { Icon: SiCanva, label: "Canva", className: "skill-node-canva" },
  { Icon: SiWix, label: "Wix Studio", className: "skill-node-wix" },
];

export default function Particles() {
  return (
    <>
      <div aria-hidden="true" className="depth-atmosphere fixed inset-0 pointer-events-none z-0">
        <div className="depth-tunnel" />
        <div className="depth-grid-plane" />
        <div className="skill-constellation">
          {skillNodes.map(({ Icon, label, className }, index) => (
            <span
              key={`${label}-${index}`}
              className={`skill-node ${className}`}
              style={{ "--node-index": index } as CSSProperties}
            >
              <Icon aria-label={label} />
            </span>
          ))}
        </div>
        <div className="depth-geometry depth-geometry-a" />
        <div className="depth-geometry depth-geometry-b" />
      </div>
      <div
        aria-hidden="true"
        className="particle-field fixed inset-0 pointer-events-none z-0"
      />
    </>
  );
}
