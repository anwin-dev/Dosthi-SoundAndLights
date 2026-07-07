import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';

const HomePage = lazy(() => import('../pages/HomePage').then((mod) => ({ default: mod.HomePage })));
const AboutPage = lazy(() => import('../pages/AboutPage').then((mod) => ({ default: mod.AboutPage })));
const ServicesPage = lazy(() => import('../pages/ServicesPage').then((mod) => ({ default: mod.ServicesPage })));
const EquipmentPage = lazy(() => import('../pages/EquipmentPage').then((mod) => ({ default: mod.EquipmentPage })));
const PortfolioPage = lazy(() => import('../pages/PortfolioPage').then((mod) => ({ default: mod.PortfolioPage })));
const BookingPage = lazy(() => import('../pages/BookingPage').then((mod) => ({ default: mod.BookingPage })));
const GalleryPage = lazy(() => import('../pages/GalleryPage').then((mod) => ({ default: mod.GalleryPage })));
const TestimonialsPage = lazy(() => import('../pages/TestimonialsPage').then((mod) => ({ default: mod.TestimonialsPage })));
const FaqPage = lazy(() => import('../pages/FaqPage').then((mod) => ({ default: mod.FaqPage })));
const ContactPage = lazy(() => import('../pages/ContactPage').then((mod) => ({ default: mod.ContactPage })));

export const AppRouter = () => (
  <Suspense fallback={<div className="grid min-h-[50vh] place-items-center text-sm tracking-[0.35em] text-white/60">LOADING EXPERIENCE</div>}>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/equipment" element={<EquipmentPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  </Suspense>
);
