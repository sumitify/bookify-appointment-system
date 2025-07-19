import React, { useState, useEffect, useRef } from 'react';
import { auth, signInAnonymously, onAuthStateChanged } from '../firebase/config';

// Import Components
import ServiceSelection from './ServiceSelection';
import StaffSelection from './StaffSelection';
import DateTimeSelection from './DateTimeSelection';
import Confirmation from './Confirmation';
import ConfirmationModal from './ConfirmationModal';
import { ScissorsIcon, ArrowLeftIcon } from './icons';

// --- MOCK DATA (This would come from your backend API) ---
const servicesData = [
  { id: 's1', name: 'Signature Haircut', duration: 60, price: 75, description: 'A tailored haircut experience with wash and style.' },
  { id: 's2', name: 'Manicure & Pedicure', duration: 90, price: 120, description: 'Complete nail care for hands and feet.' },
  { id: 's3', name: 'Deep Tissue Massage', duration: 60, price: 100, description: 'Targets deeper layers of muscle and connective tissue.' },
  { id: 's4', name: 'Dental Check-up', duration: 45, price: 90, description: 'Comprehensive oral examination and cleaning.' },
];
const staffData = [
  { id: 'st1', name: 'Alex Johnson', specialty: 'Senior Stylist' },
  { id: 'st2', name: 'Maria Garcia', specialty: 'Nail Technician' },
  { id: 'st3', name: 'Sam Chen', specialty: 'Massage Therapist' },
  { id: 'st4', name: 'Dr. Emily White', specialty: 'Dentist' },
];

export default function App() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);

  const wizardRef = useRef(null);

  // --- FIREBASE AUTHENTICATION ---
  useEffect(() => {
    if (!auth) {
        setError("Firebase is not configured properly.");
        return;
    }
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        signInAnonymously(auth).catch((error) => {
          console.error("Anonymous sign-in failed:", error);
          setError("Could not authenticate user.");
        });
      }
    });
    return () => unsubscribe();
  }, []);

  // --- ANIMATION LOGIC with GSAP ---
  useEffect(() => {
    if (window.gsap && wizardRef.current) {
      window.gsap.fromTo(wizardRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [step]);

  // --- MOCK API CALLS ---
  const fetchAvailableSlots = async (date, staff, service) => {
    setIsLoading(true);
    setError(null);
    console.log(`// CONCEPTUAL: Fetching slots for staff ${staff.id} on ${date.toDateString()}`);
    return new Promise(resolve => {
      setTimeout(() => {
        const slots = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00'];
        setIsLoading(false);
        resolve(slots);
      }, 1000);
    });
  };

  const confirmBookingOnBackend = async () => {
    setIsLoading(true);
    setError(null);
    console.log("// CONCEPTUAL: Submitting booking...");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.05) {
          setIsLoading(false);
          resolve({ success: true, bookingId: `bk_${Date.now()}` });
        } else {
          setIsLoading(false);
          reject(new Error("Slot just became unavailable. Please try another time."));
        }
      }, 1500);
    });
  };

  // --- EVENT HANDLERS ---
  const handleSelectService = (service) => {
    setSelectedService(service);
    setStep(2);
  };
  const handleSelectStaff = (staff) => {
    setSelectedStaff(staff);
    setStep(3);
    fetchAvailableSlots(selectedDate, staff, selectedService).then(setAvailableSlots);
  };
  const handleDateChange = (e) => {
    const newDate = new Date(e.target.value);
    setSelectedDate(newDate);
    setSelectedTime(null);
    fetchAvailableSlots(newDate, selectedStaff, selectedService).then(setAvailableSlots);
  };
  const handleConfirmBooking = async () => {
    try {
      await confirmBookingOnBackend();
      setBookingConfirmed(true);
    } catch (err) {
      setError(err.message);
    }
  };
  const handleReset = () => {
    setStep(1);
    setSelectedService(null);
    setSelectedStaff(null);
    setSelectedDate(new Date());
    setSelectedTime(null);
    setAvailableSlots([]);
    setBookingConfirmed(false);
    setError(null);
  };

  const renderStep = () => {
    switch (step) {
      case 1: return <ServiceSelection services={servicesData} onSelect={handleSelectService} />;
      case 2: return <StaffSelection staff={staffData} onSelect={handleSelectStaff} />;
      case 3: return <DateTimeSelection selectedDate={selectedDate} onDateChange={handleDateChange} availableSlots={availableSlots} selectedTime={selectedTime} onTimeSelect={setSelectedTime} isLoading={isLoading} />;
      case 4: return <Confirmation service={selectedService} staff={selectedStaff} date={selectedDate} time={selectedTime} onConfirm={handleConfirmBooking} isLoading={isLoading} error={error} />;
      default: return <div>Invalid Step</div>;
    }
  };

  const getProgress = () => {
    if (bookingConfirmed) return 100;
    return (step - 1) / 3 * 100;
  };

  return (
    <div className="antialiased text-slate-200 font-sans p-4 sm:p-6 lg:p-8 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-gray-900">
      <header className="absolute top-0 left-0 w-full p-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <ScissorsIcon />
          <h1 className="text-xl font-bold tracking-wider">Bookify</h1>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm text-xs font-mono px-3 py-1.5 rounded-full">
          UserID: {userId || 'Authenticating...'}
        </div>
      </header>
      
      <main className="w-full max-w-2xl">
        {bookingConfirmed ? (
          <ConfirmationModal onReset={handleReset} />
        ) : (
          <div ref={wizardRef} className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl shadow-2xl shadow-slate-900/50 p-6 sm:p-8">
            <div className="flex items-center gap-4 mb-6">
              {step > 1 && (
                <button onClick={() => setStep(s => s - 1)} className="p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition-all duration-300 transform hover:scale-110">
                  <ArrowLeftIcon />
                </button>
              )}
              <div className="w-full bg-slate-700 rounded-full h-2.5">
                <div className="bg-indigo-500 h-2.5 rounded-full transition-all duration-500 ease-out" style={{ width: `${getProgress()}%` }}></div>
              </div>
            </div>

            {renderStep()}

            <div className="mt-8 pt-6 border-t border-slate-700 text-right">
              {step === 3 && selectedTime && (
                <button onClick={() => setStep(4)} className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 transition-all duration-300 transform hover:scale-105">
                  Review Booking
                </button>
              )}
            </div>
          </div>
        )}
      </main>
      <footer className="absolute bottom-4 text-xs text-slate-500">
        Powered by a Serverless Architecture & React.js
      </footer>
    </div>
  );
}