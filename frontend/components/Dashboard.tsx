import React from 'react';
import AIHelper from './AIHelper';
import BirthdateMeaning from './BirthdateMeaning';
import SynchronicityMeaning from './SynchronicityMeaning';
import StarseedInfo from './StarseedInfo';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <h1 className="text-2xl font-bold mb-6">Inner Work – Wellness Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <AIHelper />
        <BirthdateMeaning />
        <SynchronicityMeaning />
        <StarseedInfo />
      </div>
    </div>
  );
};

export default Dashboard;
