"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Building2, HandPlatter, Users } from 'lucide-react';

const BottomNav = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Fasilitas', href: '/facility', icon: Building2 },
    { name: 'Layanan', href: '/service', icon: HandPlatter },
    { name: 'Residen', href: '/resident', icon: Users },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-md">
      <div className="mx-3 mb-3 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg shadow-black/10 border border-gray-100">
        <div className="grid h-16 grid-cols-4 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className="inline-flex flex-col items-center justify-center gap-0.5 group relative"
              >
                <div className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all duration-200 ${
                  isActive ? 'bg-indigo-50' : 'hover:bg-gray-50'
                }`}>
                  <Icon
                    className={`w-5 h-5 transition-all duration-200 ${
                      isActive ? 'text-indigo-600 scale-110' : 'text-gray-400 group-hover:text-indigo-500'
                    }`}
                  />
                  <span className={`text-[10px] font-semibold tracking-wide transition-all duration-200 ${
                    isActive ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-500'
                  }`}>
                    {item.name}
                  </span>
                </div>
                {isActive && (
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-indigo-500" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
