import React from 'react';
import { CalendarIcon, ClockIcon } from './icons';

const DateTimeSelection = ({ selectedDate, onDateChange, availableSlots, selectedTime, onTimeSelect, isLoading }) => {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-1">Select Date & Time</h2>
      <p className="text-slate-400 mb-6">Choose your preferred date and time slot.</p>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="date-picker" className="font-medium text-slate-300 mb-2 block flex gap-2 items-center"><CalendarIcon /> Select Date</label>
          <input
            type="date"
            id="date-picker"
            min={today}
            value={selectedDate.toISOString().split("T")[0]}
            onChange={onDateChange}
            className="w-full p-3 bg-slate-700 rounded-lg border-2 border-slate-600 focus:border-indigo-500 focus:ring-indigo-500 transition-colors"
          />
        </div>
        <div>
           <h3 className="font-medium text-slate-300 mb-2 flex gap-2 items-center"><ClockIcon /> Available Slots</h3>
          {isLoading ? (
            <div className="flex items-center justify-center h-32">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-400"></div>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-2">
              {availableSlots.length > 0 ? availableSlots.map(time => (
                <button 
                  key={time} 
                  onClick={() => onTimeSelect(time)}
                  className={`p-3 rounded-lg font-semibold text-sm transition-all duration-200 transform hover:scale-105 ${selectedTime === time ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-700 hover:bg-slate-600'}`}
                >
                  {time}
                </button>
              )) : <p className="col-span-3 text-slate-400 text-sm">No slots available for this date.</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DateTimeSelection;