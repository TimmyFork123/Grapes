import Image from "next/image";

export function LogoImage({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <Image
      src="/logo/blockblast-logo.png"
      alt="Block Blast Logo"
      width={40}
      height={40}
      className={className}
    />
  );
}

export function LogoText({ className = "w-auto h-12" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 600 120"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMid meet"
    >
      <text x="10" y="90" className="text-7xl font-black" style={{ filter: 'drop-shadow(3px 3px 2px rgba(0,0,0,0.3))' }}>
        <tspan fill="#FFD700">BLOCK</tspan>
        <tspan dx="0.5em" fill="#3498DB">BLAST</tspan>
      </text>
      <path d="M10 105 L500 105" stroke="#FFD700" strokeWidth="4" strokeLinecap="round" opacity="0.3" />
      <path d="M10 110 L500 110" stroke="#3498DB" strokeWidth="4" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}
