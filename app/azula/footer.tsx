import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h3 className="mb-4 text-2xl font-bold">AZULA</h3>
            <p className="mb-6 text-green-100">
              The smartest way to cook with charcoal. Save fuel. Cook faster.
              Breathe easier.
            </p>
            <div className="flex space-x-4 ">
              <a
                href="#"
                aria-label="Facebook"
                className="text-green-200 transition hover:text-white"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-green-200 transition hover:text-white"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-green-200 transition hover:text-white"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#features"
                  className="text-green-200 transition hover:text-white"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-green-200 transition hover:text-white"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-green-200 transition hover:text-white"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#buy"
                  className="text-green-200 transition hover:text-white"
                >
                  Buy Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2 h-4 w-4" />
                <a
                  href="tel:+234XXXXXXXXXX"
                  className="text-green-200 transition hover:text-white"
                >
                  +234 XXX XXX XXXX
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 h-4 w-4" />
                <a
                  href="mailto:hello@azula.com"
                  className="text-green-200 transition hover:text-white"
                >
                  hello@azula.com
                </a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 h-4 w-4" />
                <span className="text-green-200">Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-green-700 pt-8 text-center">
          <p className="text-green-200">
            © {currentYear} Azula. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-6 text-sm">
            <Link
              href="/privacy"
              className="text-green-200 transition hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-green-200 transition hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
