import type React from "react";

let About = (): React.JSX.Element =>
  <div className="max-w-3xl mx-auto py-12 px-6">
    <header className="mb-8 border-b pb-4">
      <h1 className="text-4xl font-bold text-blue-600">О нашей компании</h1>
      <p className="text-slate-500 mt-2">Страница создана с использованием React (CDN-версия)</p>
    </header>

    <section className="bg-white p-6 rounded-xl shadow-md mb-6">
      <h2 className="text-2xl font-semibold mb-3">Кто мы такие?</h2>
      <p className="text-slate-600 leading-relaxed mb-4">
        Мы занимаемся разработкой современных веб-приложений. Эта страница собрана на чистом HTML без сложных сборщиков (вроде Webpack или Vite), но уже использует реактивное состояние React.
      </p>
    </section>
  </div >;

export default About;
