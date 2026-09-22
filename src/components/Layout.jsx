import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import LoadingBar from './LoadingBar';  

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <LoadingBar />                      
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}