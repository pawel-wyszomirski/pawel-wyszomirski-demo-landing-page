import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => (
  <div className="pt-24 pb-16 text-center bg-gradient-to-r from-blue-50 to-indigo-50">
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6" itemProp="headline">
        Uwolnij potencjał AI w swoim biznesie
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8" itemProp="description">
        Zautomatyzuj procesy, zwiększ efektywność i osiągnij przewagę konkurencyjną dzięki sztucznej inteligencji.
      </p>
      <a
        href="https://cal.com/wyszomirski"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition-colors"
        aria-label="Umów bezpłatną konsultację"
      >
        Umów bezpłatną konsultację
        <ArrowRight className="ml-2" aria-hidden="true" />
      </a>
    </div>
  </div>
);