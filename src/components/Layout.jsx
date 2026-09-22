import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import LoadingBar from './LoadingBar';
import ScrollToTop from './ScrollToTop';  

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <LoadingBar />
      <ScrollToTop />                  
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}