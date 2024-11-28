import React, { useState } from 'react';

export const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Wiadomość od ${formState.name}`;
    const body = `
Imię i nazwisko: ${formState.name}
Email: ${formState.email}

Wiadomość:
${formState.message}
    `;
    
    const mailtoLink = `mailto:pawel@wyszomirski.biz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="kontakt" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skontaktuj się ze mną</h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-gray-700">Imię i nazwisko</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formState.name}
              onChange={(e) => setFormState({...formState, name: e.target.value})}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formState.email}
              onChange={(e) => setFormState({...formState, email: e.target.value})}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-gray-700">Wiadomość</label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formState.message}
              onChange={(e) => setFormState({...formState, message: e.target.value})}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Wyślij wiadomość
          </button>
        </form>
      </div>
    </section>
  );
};