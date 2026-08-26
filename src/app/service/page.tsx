import type { Metadata } from 'next';
import ServiceContent from '@/components/content/ServiceContent';

export const metadata: Metadata = {
  title: 'Layanan Makan Kost Putri Malang',
  description:
    'Paket makan harian, mingguan, dan bulanan untuk penghuni maupun umum di Kost Putri Ibu Dina Malang. Cocok juga untuk acara & gathering. Hubungi kami untuk info menu dan harga.',
  alternates: { canonical: '/service' },
};

export default function Service() {
  return <ServiceContent />;
}
