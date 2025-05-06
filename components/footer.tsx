import Link from "next/link"
import { Building2, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-secondary text-muted-foreground">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Building2 className="h-8 w-8 text-brand-teal" />
              <span className="text-xl font-bold text-foreground">Reliable Engineering</span>
            </Link>
            <p className="mb-6">
              Excellence in engineering and construction services for over 25 years. Building tomorrow's infrastructure
              with integrity, innovation, and expertise.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/structural-engineering" className="hover:text-foreground transition-colors">
                  Structural Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/construction-management" className="hover:text-foreground transition-colors">
                  Construction Management
                </Link>
              </li>
              <li>
                <Link href="/services/civil-engineering" className="hover:text-foreground transition-colors">
                  Civil Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/architectural-design" className="hover:text-foreground transition-colors">
                  Architectural Design
                </Link>
              </li>
              <li>
                <Link href="/services/mep-engineering" className="hover:text-foreground transition-colors">
                  MEP Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/renovation-retrofitting" className="hover:text-foreground transition-colors">
                  Renovation & Retrofitting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-brand-teal" />
                <span>
                  Jadibutti, Koteshwor - 32
                  <br />
                  Kathmandu
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-brand-teal" />
                <a href="tel:+977 9812340170" className="hover:text-foreground transition-colors">
                  +977 9812340170
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-brand-teal" />
                <a href="mailto:info@reliableengineering.com" className="hover:text-foreground transition-colors">
                  info@reliableengineering.com
                </a>
              </li>
            </ul>

            <h3 className="text-lg font-bold text-foreground mt-8 mb-4">Newsletter</h3>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="bg-background border-border text-foreground" />
              <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Reliable Engineering & Construction. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-sm hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-sm hover:text-foreground transition-colors">
              Sitemap
            </Link>
          </div>
          <Link href="https://www.motionage.com/" className="text-sm hover:text-foreground transition-colors">🛠️ Developed by Motion Age</Link>
        </div>
      </div>
    </footer>
  )
}
