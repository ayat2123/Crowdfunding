import Link from 'next/link';
import Image from 'next/image';

export default function PublicFooter() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/vector.png"
                alt="Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <h3 className="text-lg font-semibold text-gray-800">FUND FOR FOUND</h3>
            </div>
            <p className="text-sm text-gray-600">
              Empowering creators and innovators through community-driven crowdfunding.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-indigo-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/explore" className="text-sm text-gray-600 hover:text-indigo-600">
                  Explore Projects
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-sm text-gray-600 hover:text-indigo-600">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-sm text-gray-600 hover:text-indigo-600">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-indigo-600">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-gray-600 hover:text-indigo-600">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Stay Updated</h4>
            <div className="space-y-4">
              <p className="text-sm text-gray-600">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <button className="px-6 py-2 text-sm text-white bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-600">
              {new Date().getFullYear()} FUND FOR FOUND. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-indigo-600">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-600 hover:text-indigo-600">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}