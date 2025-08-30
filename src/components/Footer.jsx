export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Stack Maker. All rights reserved.
      </div>
    </footer>
  );
}
