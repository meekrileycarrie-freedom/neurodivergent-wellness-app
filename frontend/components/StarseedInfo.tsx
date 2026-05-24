import React, { useState } from 'react';

const starseeds: Record<string, string> = {
  'pleiadian': 'Pleiadians are believed to be helpers and teachers bringing wisdom and compassion.',
  'arcturian': 'Arcturians are thought of as advanced in technology and spirituality, guiding humanity to higher consciousness.',
  'andromedan': 'Andromedans symbolize freedom and love, often associated with creative or empathic people.',
  'sirian': 'Sirians are seen as highly intuitive and connected to water and flow.',
  // More starseed types can be added as needed
};

const StarseedInfo: React.FC = () => {
  const [query, setQuery] = useState('');
  const [info, setInfo] = useState<string | null>(null);

  const handleSearch = () => {
    const key = query.trim().toLowerCase();
    setInfo(starseeds[key] || 'No information found. Try another starseed type like pleiadian, arcturian, andromedan, or sirian.');
  };

  return (
    <div className="bg-white rounded shadow p-4 max-w-md mx-auto mt-8">
      <h3 className="font-bold text-lg mb-2">Starseed Type Info</h3>
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          className="flex-1 border rounded p-2"
          placeholder="E.g. pleiadian, arcturian, etc."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button className="bg-purple-600 text-white rounded px-3 py-1" onClick={handleSearch}>
          Search
        </button>
      </div>
      {info && <div className="bg-slate-100 p-2 rounded mt-2">{info}</div>}
    </div>
  );
};

export default StarseedInfo;
