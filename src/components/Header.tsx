"use client";

import { usePathname } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

const routeMeta: Record<string, { title: string; subtitle: string }> = {
  '/': { title: 'Kost 59D', subtitle: 'Malang, Jawa Timur' },
  '/facility': { title: 'Fasilitas', subtitle: 'Semua yang kamu butuhkan' },
  '/service': { title: 'Layanan', subtitle: 'Bantuan & permintaan' },
  '/resident': { title: 'Residen', subtitle: 'Komunitas penghuni' },
  '/contact': { title: 'Kontak', subtitle: 'Tanya-tanya langsung' },
};

const Header = () => {
  const pathname = usePathname();
  const meta = routeMeta[pathname] ?? routeMeta['/'];
  const isRoot = pathname === '/';

  return (
    <header className="fixed top-0 z-40 w-full max-w-md">
      <div className="h-16 bg-white/80 backdrop-blur-xl border-b border-gray-100/80 flex items-center px-5 gap-3">
        {!isRoot && (
          <Link href="/" className="w-8 h-8 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors">
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </Link>
        )}

        <div className={`${isRoot ? 'mx-auto' : 'flex-1'}`}>
          <h1 className="text-[17px] font-bold text-gray-900 leading-tight">
            {meta.title}
          </h1>
          <p className="text-[11px] text-gray-400 font-medium leading-tight">
            {meta.subtitle}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
