import Link from 'next/link';
export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="#hero" className="text-white text-xl font-bold">
            Anthony Christmantoro
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="#how-it-works" className="text-white hover:text-indigo-400 transition-colors">
                How It Works
              </Link>
            </li>
            <li>
              <Link href="#our-mission" className="text-white hover:text-indigo-400 transition-colors">
                Our Mission
              </Link>
            </li>
            <li>
              <Link href="#inspiring-books" className="text-white hover:text-indigo-400 transition-colors">
                Inspiring Books
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-white hover:text-indigo-400 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}