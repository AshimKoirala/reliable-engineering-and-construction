"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DialogTitle } from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  // { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // trigger on mount

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMobileNav = (href: string) => {
    setIsMenuOpen(false)
    router.push(href)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? "bg-secondary shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-24 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 h-full">
          <div className="relative w-48 h-20 md:w-56 md:h-24">
            <Image
              src="/logo.png"
              alt="Motion Age Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-medium transition-colors hover:text-brand-teal ${
                pathname === link.href ? "text-brand-teal" : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
        </div>

        {/* Mobile Menu */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-8 w-8" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <VisuallyHidden>
              <DialogTitle>Mobile Navigation Menu</DialogTitle>
            </VisuallyHidden>
            <div className="flex flex-col gap-6 mt-6">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  onClick={() => handleMobileNav("/")}
                  className="text-xl font-medium"
                >
                  Home
                </Link>
                <ThemeToggle />
              </div>
              {navLinks.slice(1).map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleMobileNav(link.href)}
                  className="text-left text-xl font-medium text-muted-foreground hover:text-brand-teal transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}