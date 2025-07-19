import React from 'react';

const Confirmation = ({ service, staff, date, time, onConfirm, isLoading, error }) => (
  <div>
    <h2 className="text-2xl font-bold mb-1">Confirm Your Booking</h2>
    <p className="text-slate-400 mb-6">Please review the details below before confirming.</p>
    <div className="bg-slate-900/70 p-6 rounded-2xl space-y-4 border border-slate-700">
      <div className="flex justify-between items-center">
        <span className="text-slate-400">Service:</span>
        <span className="font-bold text-lg">{service.name}</span>
      </div>
       <div className="flex justify-between items-center">
        <span className="text-slate-400">Professional:</span>
        <span className="font-bold">{staff.name}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-slate-400">Date:</span>
        <span className="font-bold">{date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-slate-400">Time:</span>
        <span className="font-bold">{time}</span>
      </div>
      <div className="border-t border-slate-700 my-4"></div>
       <div className="flex justify-between items-center">
        <span className="text-slate-400 text-xl">Total Price:</span>
        <span className="font-bold text-2xl text-green-400">${service.price}</span>
      </div>
    </div>
    {error && <p className="text-red-400 text-center mt-4">{error}</p>}
    <div className="mt-8 text-center">
      <button 
        onClick={onConfirm}
        disabled={isLoading}
        className="w-full md:w-auto bg-green-600 text-white font-bold py-4 px-12 rounded-xl shadow-lg shadow-green-600/20 hover:bg-green-500 transition-all duration-300 transform hover:scale-105 disabled:bg-slate-600 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center"
      >
        {isLoading ? <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div> : 'Confirm & Book'}
      </button>
    </div>
  </div>
);

export default Confirmation;