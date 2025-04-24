'use client';

import { useState } from 'react';

export default function Home() {
  const [showNotice, setShowNotice] = useState(false);

  const handleDeposit = () => {
    setShowNotice(true);

    // Directly call HypeLabAnalytics.logEvent
    if (typeof window !== 'undefined' && window.HypeLabAnalytics) {
      window.HypeLabAnalytics.logEvent('first_deposit');
      console.log('Tracked event: first_deposit');
    } else {
      console.warn('HypeLabAnalytics not available');
    }

    // The notice will be hidden automatically after animation completes
    setTimeout(() => {
      setShowNotice(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <button
          onClick={handleDeposit}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Deposit
        </button>

        {/* Inline FlashNotice with Tailwind animations */}
        {showNotice && (
          <div className="fixed top-5 left-1/2 transform -translate-x-1/2 py-3 px-6 rounded-lg bg-green-500 text-white shadow-lg z-50 animate-[fadeIn_0.3s_ease-in-out_forwards,fadeOut_0.3s_ease-in-out_2.7s_forwards]">
            Deposit completed successfully!
          </div>
        )}
      </div>
    </div>
  );
}
