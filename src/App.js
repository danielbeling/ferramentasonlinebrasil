import React, { useEffect } from 'react';
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import AdBanner from "./components/AdBanner";
const App = () => {

  return (
    <>
      <Router>
        <Header />
        <AdBanner />
        <AnimRoutes />
      </Router>
      <Analytics />
    </>
  );
};

export default App;
