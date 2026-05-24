import React, { useState } from 'react';

const meanings: Record<string, string> = {
  '111': '111 is often seen as a sign of alignment and new beginnings.',
  '222': '222 implies balance, trust, and cooperative energy.',
  '333': '333 relates to support from guides or the universe.',
  '11:11': 'Many interpret 11:11 as a synchronicity—pay attention to your thoughts and intentions.',
  'butterfly': 'Butterflies symbolize transformation, rebirth, and growth.',
  // Add more symbols, numbers, and animal meanings as needed
};

const SynchronicityMeaning: React.FC = () => {
  const [query, setQuery] = useState('');
  const [meaning, setMeaning] = useState<string | null>(null);

  const handleSearch = () => {
    const key = query.trim().toLowerCase();
    setMeaning(meanings[key] || meanings[query] || 'No meaning found. Try another number, symbol, or animal.');
  };

  return (
    <div className="bg-white rounded shadow p-4 max-w-md mx-auto mt-8">
      <h3 className="font-bold text-lg mb-2">Synchronicity Meaning Finder</h3>
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          className="flex-1 border rounded p-2"
          placeholder="E.g. 111, butterfly, 11:11..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="bg-indigo-600 text-white rounded px-3 py-1" onClick={handleSearch}>
          Search
        </button>
      </div>
      {meaning && <div className="bg-slate-100 p-2 rounded mt-2">{meaning}</div>}
    </div>
  );
};

export default SynchronicityMeaning;
