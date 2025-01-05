import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold gradient-text mb-2">
              Seyed Ataii
            </h3>
            <p className="text-gray-400 text-sm">
              IT Administrator • Developer • 3D Artist
            </p>
          </div>

          {/* Middle - Quick Links */}
          <div className="mb-6 md:mb-0">
            <div className="flex space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right side */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
