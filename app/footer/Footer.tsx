import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:justify-between h-auto md:h-14 py-4 md:py-0 gap-4 md:gap-0">
          
          {/* Left side - Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-2 text-sm text-center md:text-left">
            <span>© <time dateTime="2025">2025</time> /</span>
            <span className="font-medium">Ac Villaroman</span>
            <span>/</span>
            <span>Code smart, not just hard.</span>
          </div>

          {/* Right side - Trademark Logo */}
          <div className="flex items-center">
            <Image
              src="/trademark.png"
              alt="Trademark"
              width={36}
              height={36}
              className="object-contain opacity-80 hover:opacity-100 transition-opacity"
              priority
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
