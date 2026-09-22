import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import BBBEE from './pages/BBBEE';
import Learnerships from './pages/Learnerships';
import CorporateTraining from './pages/CorporateTraining';
import OccupationalTraining from './pages/OccupationalTraining';
import NationalFootprint from './pages/NationalFootprint';
import Partnerships from './pages/Partnerships';
import HRManagers from './pages/HRManagers';
import Procurement from './pages/Procurement';
import Industries from './pages/Industries';
import OurDifference from './pages/OurDifference';
import Contact from './pages/Contact';
import ContentHub from './pages/ContentHub';
import LearnershipListings from './pages/LearnershipListings';
import LearnershipDetail from './pages/LearnershipDetail';
import NewsList from './pages/NewsList';
import NewsDetail from './pages/NewsDetail';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import AdminPanel from './pages/admin/AdminPanel';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="bbbee" element={<BBBEE />} />
          <Route path="learnerships" element={<Learnerships />} />
          <Route path="corporate-training" element={<CorporateTraining />} />
          <Route path="occupational-training" element={<OccupationalTraining />} />
          <Route path="footprint" element={<NationalFootprint />} />
          <Route path="partnerships" element={<Partnerships />} />
          <Route path="hr-managers" element={<HRManagers />} />
          <Route path="procurement" element={<Procurement />} />
          <Route path="industries" element={<Industries />} />
          <Route path="our-difference" element={<OurDifference />} />
          <Route path="contact" element={<Contact />} />
          <Route path="hub" element={<ContentHub />} />
          <Route path="opportunities" element={<LearnershipListings />} />
          <Route path="opportunities/:id" element={<LearnershipDetail />} />
          <Route path="news" element={<NewsList />} />
          <Route path="news/:id" element={<NewsDetail />} />
          <Route path="blog" element={<BlogList />} />
          <Route path="blog/:id" element={<BlogDetail />} />
          <Route path="admin" element={<AdminPanel />} />
        </Route>
      </Routes>
    </Router>
  );
}