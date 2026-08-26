import type { Metadata } from 'next';
import ContactContent from '@/components/content/ContactContent';

export const metadata: Metadata = {
  title: 'Hubungi Kami',
  description:
    'Chat langsung dengan Ibu Kost via WhatsApp untuk cek ketersediaan kamar, harga, dan slot parkir di Kost Putri Ibu Dina, Jl. Sumbersari IV No. 59D Malang. Respon cepat setiap hari 07.00-20.00 WIB.',
  alternates: { canonical: '/contact' },
};

export default function Contact() {
  return <ContactContent />;
}
