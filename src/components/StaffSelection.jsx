import React from 'react';
import { UserIcon } from './icons';

const StaffSelection = ({ staff, onSelect }) => (
  <div>
    <h2 className="text-2xl font-bold mb-1">Select a Professional</h2>
    <p className="text-slate-400 mb-6">Choose from our available experts.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {staff.map(member => (
        <button key={member.id} onClick={() => onSelect(member)} className="text-left p-5 bg-slate-700/50 rounded-2xl border border-slate-700 hover:border-indigo-500 hover:bg-slate-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-4 group">
          <div className="bg-slate-600 p-3 rounded-full"><UserIcon /></div>
          <div>
            <h3 className="font-bold text-lg text-slate-100 group-hover:text-indigo-400 transition-colors">{member.name}</h3>
            <p className="text-sm text-slate-400">{member.specialty}</p>
          </div>
        </button>
      ))}
    </div>
  </div>
);

export default StaffSelection;