'use client';

export default function FootballField() {
  // 4-4-2 Formation: 1 GK, 4 Defenders, 4 Midfielders, 2 Forwards
  const players = [
    // Goalkeeper
    { number: 1, position: 'GK', x: 50, y: 10 },
    
    // Defenders (4)
    { number: 2, position: 'RB', x: 20, y: 30 },
    { number: 3, position: 'CB', x: 35, y: 25 },
    { number: 4, position: 'CB', x: 65, y: 25 },
    { number: 5, position: 'LB', x: 80, y: 30 },
    
    // Midfielders (4)
    { number: 6, position: 'RM', x: 15, y: 50 },
    { number: 7, position: 'CM', x: 35, y: 50 },
    { number: 8, position: 'CM', x: 65, y: 50 },
    { number: 11, position: 'LM', x: 85, y: 50 },
    
    // Forwards (2)
    { number: 9, position: 'ST', x: 40, y: 75 },
    { number: 10, position: 'ST', x: 60, y: 75 },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-green-800">Alabama Football Club</h1>
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">4-4-2 Formation</h2>
      
      {/* Football Field */}
      <div className="relative w-full max-w-2xl bg-green-600 border-4 border-white rounded-lg p-8" style={{ aspectRatio: '2 / 3' }}>
        {/* Field Lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
          {/* Center Line */}
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white" strokeWidth="2" />
          {/* Center Circle */}
          <circle cx="50%" cy="50%" r="15%" stroke="white" strokeWidth="2" fill="none" />
          {/* Center Spot */}
          <circle cx="50%" cy="50%" r="1%" fill="white" />
          {/* Goal Areas */}
          <rect x="37.5%" y="0%" width="25%" height="15%" fill="none" stroke="white" strokeWidth="2" />
          <rect x="37.5%" y="85%" width="25%" height="15%" fill="none" stroke="white" strokeWidth="2" />
          {/* Penalty Areas */}
          <rect x="25%" y="0%" width="50%" height="23%" fill="none" stroke="white" strokeWidth="2" />
          <rect x="25%" y="77%" width="50%" height="23%" fill="none" stroke="white" strokeWidth="2" />
        </svg>

        {/* Players */}
        {players.map((player) => (
          <div
            key={player.number}
            className="absolute flex items-center justify-center"
            style={{
              left: `${player.x}%`,
              top: `${player.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* Player Circle */}
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
              <span className="text-white font-bold text-lg">{player.number}</span>
            </div>
            {/* Position Label */}
            <div className="absolute -bottom-6 text-white font-semibold text-sm bg-blue-500 px-2 py-1 rounded">
              {player.position}
            </div>
          </div>
        ))}
      </div>

      {/* Formation Info */}
      <div className="mt-12 bg-white p-6 rounded-lg shadow-lg max-w-2xl">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Squad Lineup (4-4-2)</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-green-700 mb-2">Defenders</h4>
            <ul className="text-sm space-y-1">
              <li>2 - RB (Right Back)</li>
              <li>3 - CB (Center Back)</li>
              <li>4 - CB (Center Back)</li>
              <li>5 - LB (Left Back)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">Midfielders</h4>
            <ul className="text-sm space-y-1">
              <li>6 - RM (Right Mid)</li>
              <li>7 - CM (Center Mid)</li>
              <li>8 - CM (Center Mid)</li>
              <li>11 - LM (Left Mid)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">Forwards</h4>
            <ul className="text-sm space-y-1">
              <li>9 - ST (Striker)</li>
              <li>10 - ST (Striker)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">Goalkeeper</h4>
            <ul className="text-sm space-y-1">
              <li>1 - GK (Goalkeeper)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
