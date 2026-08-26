import type { Metadata } from 'next';
import FacilityContent from '@/components/content/FacilityContent';

export const metadata: Metadata = {
  title: 'Fasilitas Kost Putri Malang',
  description:
    'WiFi 24/7, parkir motor berpagar, dapur & kompor, listrik-air all-in, kasur empuk, meja belajar, lemari, hingga area jemur luas — semua ada di Kost Putri Ibu Dina, Jl. Sumbersari IV/59D Malang.',
  alternates: { canonical: '/facility' },
};

export default function Facility() {
  return <FacilityContent />;
}
