export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-indigo-600">
          Stack Maker
        </a>

        {/* Right Menu */}
        <div className="flex gap-4">
          <a
            href="/login"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            Login
          </a>
          <a
            href="/signup"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Sign Up
          </a>
        </div>
      </nav>
    </header>
  );
}

