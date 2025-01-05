import { Code, Monitor, Palette, Send } from "lucide-react";

const LandingPage = () => {
  const navItems = [
    { icon: Code, label: "Projects", href: "/projects" },
    { icon: Palette, label: "Gallery", href: "/gallery" },
    { icon: Monitor, label: "Blog", href: "/blog" },
    { icon: Send, label: "Contact", href: "/contact" },
    { icon: Code, label: "Projects", href: "/projects" },
    { icon: Palette, label: "Gallery", href: "/gallery" },
    { icon: Monitor, label: "Blog", href: "/blog" },
    { icon: Send, label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50" /> */}

        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Seyed Ataii
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-gray-300">
            IT Administrator • Developer • 3D Artist
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="group p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="flex flex-col items-center space-y-2">
                  <item.icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
