import React from 'react';

export default function CTA({ onHostClick, onGuestClick }) {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Connect?
        </h2>
        <p className="text-xl mb-12 text-white/90">
          Join our pilot program in Koramangala. Limited spots for first 15 events!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onHostClick}
            className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          >
            Become a Host
          </button>
          
          <button
            onClick={onGuestClick}
            className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
          >
            Join as Guest
          </button>
        </div>

        <div className="mt-12 flex justify-center gap-8 text-sm text-white/80 flex-wrap">
          <span>🎯 10-15 Events Goal</span>
          <span>📍 Koramangala Only</span>
          <span>🚀 Launching Soon</span>
        </div>
      </div>
    </section>
  );
}