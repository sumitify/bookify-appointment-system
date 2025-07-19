import React, { useEffect, useRef } from 'react';
import { CheckCircleIcon } from './icons';

const ConfirmationModal = ({ onReset }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (window.gsap && modalRef.current) {
      window.gsap.fromTo(modalRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' }
      );
    }
  }, []);

  return (
    <div ref={modalRef} className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl shadow-2xl shadow-slate-900/50 p-8 sm:p-12 text-center flex flex-col items-center">
      <CheckCircleIcon />
      <h2 className="text-3xl font-bold mt-6 mb-2 text-green-400">Appointment Confirmed!</h2>
      <p className="text-slate-300 max-w-sm mx-auto">
        Your booking has been successfully scheduled. A confirmation email and calendar invite have been sent.
      </p>
      <button
        onClick={onReset}
        className="mt-8 bg-indigo-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 transition-all duration-300 transform hover:scale-105"
      >
        Book Another Appointment
      </button>
    </div>
  );
};

export default ConfirmationModal;