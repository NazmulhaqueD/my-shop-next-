
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Brand */}
        <p className="text-sm">
          © {new Date().getFullYear()} MyShop. All rights reserved.
        </p>

        {/* Right Side - Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
