import React from 'react';

export const WhyMe = () => (
  <section id="dlaczego-ja" className="py-16 bg-white">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Dlaczego ja?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Doświadczenie</h3>
          <p className="text-gray-600">
            Posiadam bogate doświadczenie w tworzeniu chatbotów AI, prowadzeniu kursów i wdrażaniu AI w organizacjach.
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Pasja</h3>
          <p className="text-gray-600">
            Jestem pasjonatem AI i wierzę w jej potencjał do zmieniania świata na lepsze.
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">Indywidualne podejście</h3>
          <p className="text-gray-600">
            Słucham uważnie potrzeb moich klientów i tworzę rozwiązania dopasowane do ich specyfiki.
          </p>
        </div>
      </div>
    </div>
  </section>
);