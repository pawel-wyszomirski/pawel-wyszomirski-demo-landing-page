import React from 'react';

export const AboutMe = () => (
  <section id="o-mnie" className="py-16 bg-white">
    <div className="max-w-4xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3">
          <img
            src="https://res.cloudinary.com/dqsvgngfx/image/upload/v1732788764/pawel_wyszomirski_icon_wieg28.png"
            alt="Paweł Wyszomirski"
            className="rounded-full shadow-lg w-64 h-64 object-cover"
          />
        </div>
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-4">O mnie</h2>
          <p className="text-lg text-gray-700 mb-6">
            Nazywam się Paweł Wyszomirski. Jestem innowatorem społecznym, przedsiębiorcą, trenerem AI i doktorantem. 
            Pomagam firmom i organizacjom takim jak Twoja wykorzystać moc AI do osiągnięcia sukcesu.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Posłuchaj mojego podcastu</h3>
            <audio
              controls
              className="w-full"
            >
              <source src="https://res.cloudinary.com/dqsvgngfx/video/upload/v1732788773/ja_ng1wvp.wav" type="audio/wav" />
              Twoja przeglądarka nie wspiera odtwarzacza audio.
            </audio>
          </div>
        </div>
      </div>
    </div>
  </section>
);