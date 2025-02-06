import Link from 'next/link';


export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Anthony Christmantoro</h3>
            <p className="text-gray-400">Bringing jobs to Indonesia's rural counties through innovative technology.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#hero" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#our-mission" className="text-gray-400 hover:text-white transition-colors">
                  Our Mission
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: hello@idb2b.com</p>
            <p className="text-gray-400">Phone: +62 (21) 39730083</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2023 Anthony Christmantoro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}