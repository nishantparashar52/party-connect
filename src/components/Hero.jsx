import React from 'react';
import { Users, Home, ArrowRight, MapPin } from 'lucide-react';

export default function Hero({ scrollY, onHostClick, onGuestClick }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-white/10 rounded-full -top-48 -left-48 blur-3xl"
          style={{ transform: `translate(${scrollY * 0.2}px, ${scrollY * 0.3}px)` }}
        />
        <div 
          className="absolute w-96 h-96 bg-white/10 rounded-full -bottom-48 -right-48 blur-3xl"
          style={{ transform: `translate(${-scrollY * 0.2}px, ${-scrollY * 0.3}px)` }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div 
          className="mb-6"
          style={{ transform: `translateY(${-scrollY * 0.2}px)`, opacity: 1 - scrollY * 0.002 }}
        >
          <MapPin className="w-12 h-12 text-white mx-auto mb-4" />
          <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
            Pilot Launch: Koramangala, Bangalore
          </span>
        </div>
        
        <h1 
          className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
          style={{ transform: `translateY(${-scrollY * 0.15}px)`, opacity: 1 - scrollY * 0.002 }}
        >
          Never Eat<br />Alone Again
        </h1>
        
        <p 
          className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto"
          style={{ transform: `translateY(${-scrollY * 0.1}px)`, opacity: 1 - scrollY * 0.002 }}
        >
          Connect with genuine people in Koramangala for Sunday brunches, board games, and meaningful conversations
        </p>
        
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{ transform: `translateY(${-scrollY * 0.05}px)`, opacity: 1 - scrollY * 0.002 }}
        >
          <button
            onClick={onHostClick}
            className="group bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <Home className="w-5 h-5" />
            Host a Party
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={onGuestClick}
            className="group bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <Users className="w-5 h-5" />
            Find a Party
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="mt-12 text-white/80 text-sm">
          <p>✨ Alcohol-free • Verified hosts • Safe spaces</p>
        </div>
      </div>

      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        style={{ opacity: Math.max(0, 1 - scrollY * 0.01) }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}