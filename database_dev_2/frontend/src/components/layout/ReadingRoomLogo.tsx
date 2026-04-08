type ReadingRoomLogoProps = {
  size?: number;
};

export function ReadingRoomLogo({ size = 44 }: ReadingRoomLogoProps) {
  return (
    <svg
      aria-label="Britannicus Reading Room logo"
      role="img"
      width={size}
      height={size}
      viewBox="0 0 72 72"
      className="shrink-0"
    >
      <rect x="3" y="3" width="66" height="66" rx="12" fill="#103b33" stroke="#d2a93c" strokeWidth="3" />
      <rect x="10" y="10" width="52" height="52" rx="8" fill="#18493f" stroke="#d2a93c" strokeWidth="1.5" />
      <circle cx="36" cy="20" r="4" fill="#d2a93c" />
      <path d="M36 14l1.2 3.3h3.4l-2.8 2 1.1 3.2-2.9-2.1-2.8 2.1 1-3.2-2.7-2h3.4z" fill="#d2a93c" />
      <path d="M22 36c4 0 10 1 14 2v14c-4-1-10-2-14-2z" fill="#efe6c8" />
      <path d="M50 36c-4 0-10 1-14 2v14c4-1 10-2 14-2z" fill="#efe6c8" />
      <path d="M36 38v14" stroke="#ba9231" strokeWidth="1.4" />
      <path d="M24 41h9M24 45h9M24 49h8M39 41h9M39 45h9M39 49h8" stroke="#b6aa86" strokeWidth="1" />
      <path d="M18 28h36" stroke="#d2a93c" strokeWidth="1.2" />
      <path d="M18 56h36" stroke="#d2a93c" strokeWidth="1.2" />
    </svg>
  );
}
