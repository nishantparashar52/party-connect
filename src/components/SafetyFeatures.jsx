import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function SafetyFeatures() {
  const features = [
    "WhatsApp verification for all members",
    "Host background checks & ratings",
    "Curated group matching by interests",
    "24/7 support via WhatsApp",
    "Transparent pricing with no hidden fees",
    "Clear house rules & guidelines"
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          Your Safety is Our Priority
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-md">
              <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
              <span className="text-lg text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}