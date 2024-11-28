import React from 'react';

export const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <p>&copy; {new Date().getFullYear()} Paweł Wyszomirski. Wszelkie prawa zastrzeżone.</p>
    </div>
  </footer>
);