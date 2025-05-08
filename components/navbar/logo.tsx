export const Logo = () => (
  <svg
    width="180"
    height="48"
    viewBox="0 0 180 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <style>
      {`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap');
        
        .tech-text {
          font-family: 'Orbitron', sans-serif;
          font-weight: 700;
          font-size: 28px;
          fill: #000;
          animation: glitch 2s infinite, pulse 3s ease-in-out infinite;
        }
        
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(2px, -2px); }
          60% { transform: translate(-2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; text-shadow: 0 0 8px rgba(0, 0, 0, 0.5); }
        }
      `}
    </style>
    
    <text
      x="0"
      y="38"
      className="tech-text"
    >
      Mukadaz
    </text>
    
    {/* Optional digital "scan lines" effect */}
    <rect width="180" height="2" y="36" fill="#000" opacity="0.2">
      <animate attributeName="y" values="36;38;36" dur="1.5s" repeatCount="indefinite" />
    </rect>
  </svg>
);