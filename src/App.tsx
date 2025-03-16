// src/App.tsx

import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router";

import { lazy, Suspense, useEffect } from "react";
import Layout from "./components/Layout";
import { HelmetProvider } from 'react-helmet-async';
import LoadingFallback from "./components/LoadingFallback";
import WelcomePage from "./components/WelcomePage";

// Lazy load page components
const HomePage = lazy(() => import("./pages/HomePage"));
const CouplePage = lazy(() => import("./pages/Couple"));
const FamilyPage = lazy(() => import("./pages/Family"));
const IndividuelPage = lazy(() => import("./pages/Individuel"));
const Apropos = lazy(() => import("./pages/Apropos"));
const ConditionsGenerales = lazy(() => import("./pages/ConditionsGenerales"));

// ScrollToTop component to reset scroll position on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Try to find the snap container first
    const snapContainer = document.querySelector('.snap-y.snap-mandatory') as HTMLElement;

    if (snapContainer) {
      // If we have a snap container, scroll it to the top
      snapContainer.scrollTo(0, 0);
    }

    // Also scroll the window to the top
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  console.log('App rendering');

  return (

    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Default route */}
          <Route path="/" element={
            <>

              <Navigate to="/home" replace />


              <WelcomePage />

            </>
          } />

          {/* Auth routes */}


          {/* Protected routes */}
          <Route path="/home" element={

            <Layout isHomePage={true}>
              <Suspense fallback={<LoadingFallback />}>
                <HomePage />
              </Suspense>
            </Layout>

          } />

          <Route path="/couple" element={

            <Layout>
              <Suspense fallback={<LoadingFallback />}>
                <CouplePage />
              </Suspense>
            </Layout>

          } />

          <Route path="/family" element={

            <Layout>
              <Suspense fallback={<LoadingFallback />}>
                <FamilyPage />
              </Suspense>
            </Layout>

          } />

          <Route path="/individuel" element={

            <Layout>
              <Suspense fallback={<LoadingFallback />}>
                <IndividuelPage />
              </Suspense>
            </Layout>

          } />

          <Route path="/apropos" element={

            <Layout>
              <Suspense fallback={<LoadingFallback />}>
                <Apropos />
              </Suspense>
            </Layout>

          } />

          <Route path="/conditions-generales" element={

            <Layout>
              <Suspense fallback={<LoadingFallback />}>
                <ConditionsGenerales />
              </Suspense>
            </Layout>

          } />

          {/* Catch-all route */}
          <Route path="*" element={

            <Navigate to="/home" replace />

          } />
        </Routes>
      </Router>
    </HelmetProvider>

  );
}

export default App;
