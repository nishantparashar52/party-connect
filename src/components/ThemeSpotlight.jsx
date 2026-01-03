import React from 'react';
import { Star } from 'lucide-react';

export default function ThemeSpotlight({ scrollY }) {
  const details = [
    { label: "Price Range", value: "₹299 - ₹499" },
    { label: "Group Size", value: "6-8 people" },
    { label: "Duration", value: "4 hours" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-indigo-100 to-purple-100 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          transform: `translateX(${scrollY * 0.1}px)`
        }}
      />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <Star className="w-8 h-8 text-yellow-900" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          First Theme: Sunday Brunch & Board Games
        </h2>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          Join fellow Koramangala residents every Sunday from 11 AM - 3 PM for delicious brunch, 
          classic board games, and conversations that matter. Small groups of 6-8 people, 
          perfectly curated for genuine connections.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {details.map((item, idx) => (
            <div key={idx} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl">
              <p className="text-gray-600 text-sm mb-1">{item.label}</p>
              <p className="text-2xl font-bold text-indigo-600">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}