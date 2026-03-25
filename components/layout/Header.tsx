'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Button from '@/components/ui/Button'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Marketplace', href: '/marketplace' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed w-full z-50 bg-background-dark/90 backdrop-blur-sm border-b border-border">
      <nav className="container-custom mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-purple text-2xl">{'\u25C8'}</span>
            <div>
              <span className="text-cream font-serif text-lg font-semibold tracking-wide">121212</span>
              <span className="text-purple-light font-serif text-lg italic">.community</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-cream hover:text-purple-light transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link href="/marketplace">
              <Button size="sm">Claim Your City</Button>
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden text-cream hover:text-purple-light"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-cream hover:text-purple-light transition-colors duration-200 text-base font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/marketplace" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full mt-4">Claim Your City</Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
