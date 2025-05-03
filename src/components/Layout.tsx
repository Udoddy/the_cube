import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ReservationPanel from './ReservationPanel';
import { ReservationProvider } from '../context/ReservationContext';
import ScrollToTop from '../utils/ScrollToTop';

const Layout: React.FC = () => {
  return (
    <ReservationProvider>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <ReservationPanel />
        <Footer />
      </div>
    </ReservationProvider>
  );
};

export default Layout;