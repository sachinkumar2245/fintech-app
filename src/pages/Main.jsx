import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function MainPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-extrabold mb-6 text-indigo-600">
            Welcome to Stack Maker
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Empower your finances with Stack Maker — the smart, secure, and
            effortless way to manage, grow, and track your money.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/signup"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Get Started
            </a>
            <a
              href="/login"
              className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition"
            >
              Login
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-3">
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">Track Your Wealth</h3>
              <p className="text-gray-600">
                Monitor your investments, expenses, and savings — all in one
                place with real-time updates.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">AI-Powered Insights</h3>
              <p className="text-gray-600">
                Get smart recommendations on how to grow your wealth using our
                secure AI analytics.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">Secure & Private</h3>
              <p className="text-gray-600">
                Your financial data is protected with bank-grade encryption and
                strict privacy controls.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
