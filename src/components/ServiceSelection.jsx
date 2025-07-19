import React from 'react';

const ServiceSelection = ({ services, onSelect }) => (
  <div>
    <h2 className="text-2xl font-bold mb-1">Select a Service</h2>
    <p className="text-slate-400 mb-6">Choose the service you would like to book.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {services.map(service => (
        <button key={service.id} onClick={() => onSelect(service)} className="text-left p-5 bg-slate-700/50 rounded-2xl border border-slate-700 hover:border-indigo-500 hover:bg-slate-700 transition-all duration-300 transform hover:-translate-y-1 group">
          <h3 className="font-bold text-lg text-slate-100 group-hover:text-indigo-400 transition-colors">{service.name}</h3>
          <p className="text-sm text-slate-400 my-2">{service.description}</p>
          <div className="flex justify-between items-center text-sm font-medium text-slate-300 mt-4">
            <span>{service.duration} min</span>
            <span className="text-lg font-bold text-green-400">${service.price}</span>
          </div>
        </button>
      ))}
    </div>
  </div>
);

export default ServiceSelection;