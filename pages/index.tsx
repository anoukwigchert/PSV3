export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-blue-600 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">Welkom bij Tip Je Talent</h1>
      </header>
      <main className="p-8">
        <section className="mb-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Hallo wereld 👋</h2>
          <p className="text-lg">Welkom op de landingspagina van Tip Je Talent.</p>
        </section>
        <section className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-4 border rounded shadow">✔️ Makkelijk te gebruiken</div>
          <div className="p-4 border rounded shadow">🎯 Gericht op resultaat</div>
          <div className="p-4 border rounded shadow">🚀 Snel inzetbaar</div>
        </section>
        <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
            Meld je aan
          </button>
        </div>
      </main>
      <footer className="bg-gray-100 text-center p-4 mt-12">
        &copy; {new Date().getFullYear()} Tip Je Talent
      </footer>
    </div>
  )
}
