import React, { useState } from 'react';

function getLifePathNumber(dateString: string): number | null {
  // Example: '1992-04-28' => [1+9+9+2=21, 0+4=4, 2+8=10], then reduce 21+4+10=35 -> 3+5=8
  const parts = dateString.split('-');
  if (parts.length !== 3) return null;
  const sum = parts
    .join('')
    .split('')
    .map(Number)
    .reduce((acc, n) => acc + n, 0);
  let reduced = sum;
  while (reduced > 9 && reduced !== 11 && reduced !== 22 && reduced !== 33) {
    reduced = reduced.toString().split('').map(Number).reduce((a, b) => a + b, 0);
  }
  return reduced;
}

const lifePathMeanings: Record<string, string> = {
  '1': 'Life Path 1: Leadership, independence, and originality.',
  '2': 'Life Path 2: Partnership, diplomacy, and sensitivity.',
  '3': 'Life Path 3: Creativity, joy, and communication.',
  '4': 'Life Path 4: Practicality, organization, and hard work.',
  '5': 'Life Path 5: Freedom, adventure, and adaptability.',
  '6': 'Life Path 6: Service, family, and responsibility.',
  '7': 'Life Path 7: Introspection, analysis, and spirituality.',
  '8': 'Life Path 8: Power, ambition, and success.',
  '9': 'Life Path 9: Compassion, idealism, and humanitarianism.',
  '11': 'Master Number 11: Spiritual insight and inspiration.',
  '22': 'Master Number 22: Master builder, practical dreams.',
  '33': 'Master Number 33: Master teacher, selfless service.',
};

const BirthdateMeaning: React.FC = () => {
  const [birthdate, setBirthdate] = useState('');
  const [meaning, setMeaning] = useState<string | null>(null);

  const handleCheck = () => {
    const lp = getLifePathNumber(birthdate);
    if (lp === null) {
      setMeaning('Please use the YYYY-MM-DD format.');
      return;
    }
    setMeaning(lifePathMeanings[String(lp)] || 'No meaning found.');
  };

  return (
    <div className="bg-white rounded shadow p-4 max-w-md mx-auto mt-8">
      <h3 className="font-bold text-lg mb-2">Birthdate Meaning (Life Path Number)</h3>
      <div className="flex gap-2 mb-2">
        <input
          type="date"
          className="flex-1 border rounded p-2"
          value={birthdate}
          onChange={e => setBirthdate(e.target.value)}
        />
        <button className="bg-green-600 text-white rounded px-3 py-1" onClick={handleCheck}>
          Check
        </button>
      </div>
      {meaning && <div className="bg-slate-100 p-2 rounded mt-2">{meaning}</div>}
    </div>
  );
};

export default BirthdateMeaning;
