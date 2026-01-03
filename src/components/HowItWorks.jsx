import React from 'react';
import { Calendar, Shield, MessageCircle } from 'lucide-react';

export default function HowItWorks({ scrollY }) {
  const steps = [
    {
      icon: <Calendar className="w-12 h-12 text-indigo-600" />,
      title: "Browse Events",
      desc: "Find Sunday brunches, game nights, and gatherings in Koramangala"
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-600" />,
      title: "Get Verified",
      desc: "Quick WhatsApp verification ensures genuine, safe connections"
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-pink-600" />,
      title: "Connect & Attend",
      desc: "Join curated groups and make real friendships over brunch"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div 
        className="max-w-6xl mx-auto"
        style={{ transform: `translateY(${(scrollY - 400) * -0.05}px)` }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
          How It Works
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">Simple, safe, and social</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}