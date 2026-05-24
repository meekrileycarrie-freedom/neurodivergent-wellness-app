import React, { useState } from 'react';

/**
 * AIHelper: Safe trauma-informed AI chat component for guidance, grounding, reflection, and spiritual meaning.
 * Boundaries: Does not diagnose/treat, models healthy self-awareness, gentle spiritual explanation.
 */
const AIHelper: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      role: 'system',
      content:
        "Hi, I'm your AI guide! I can help with grounding, emotional regulation, and self-reflection, as well as offer meaning for synchronicities, birthdates, and starseed information. I do not diagnose or treat any condition and always encourage you to seek help from professionals when needed.",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // Note: Add your backend endpoint for actual AI responses
  const send = async () => {
    setLoading(true);
    setMessages((prev) => [...prev, { role: 'user', content: input }]);
    // Mock response for illustration
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'ai',
          content:
            "Thank you for sharing. Remember to take a deep breath. Would you like to try a grounding exercise or explore the meaning of something you've noticed (like numbers, dreams, or synchronicities)?",
        },
      ]);
      setLoading(false);
    }, 1500);
    setInput('');
  };

  return (
    <div className="bg-white rounded shadow-lg p-4 max-w-xl mx-auto mt-8">
      <h2 className="font-bold text-xl mb-2">AI Support Guide</h2>
      <div className="h-64 overflow-y-auto border px-2 py-1 mb-2 bg-slate-50 rounded">
        {messages.map((m, i) => (
          <div key={i} className={`mb-1 ${m.role === 'ai' ? 'text-blue-600' : m.role === 'user' ? 'text-gray-700 text-right' : 'italic text-gray-400'}`}>
            {m.content}
          </div>
        ))}
        {loading && <div className="text-gray-500">AI is thinking...</div>}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 border rounded p-2"
          value={input}
          placeholder="Type your thoughts or questions here..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key==='Enter' && send()}
          disabled={loading}
        />
        <button className="bg-blue-600 text-white rounded px-4 py-2" onClick={send} disabled={loading || !input}>
          Send
        </button>
      </div>
      <div className="text-xs text-gray-500 mt-2">
        Please note: This AI cannot diagnose, treat, or intervene in crises. For emergencies or mental health concerns, seek professional support.
      </div>
    </div>
  );
};

export default AIHelper;
