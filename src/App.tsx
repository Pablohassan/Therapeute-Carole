// src/App.tsx

import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router";
import {
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
  ClerkLoaded,
} from "@clerk/clerk-react";
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
    <ClerkLoaded>
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            {/* Default route */}
            <Route path="/" element={
              <>
                <SignedIn>
                  <Navigate to="/home" replace />
                </SignedIn>
                <SignedOut>
                  <WelcomePage />
                </SignedOut>
              </>
            } />

            {/* Auth routes */}
            <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" signUpUrl="/sign-up" />} />
            <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" signInUrl="/sign-in" />} />

            {/* Protected routes */}
            <Route path="/home" element={
              <SignedIn>
                <Layout isHomePage={true}>
                  <Suspense fallback={<LoadingFallback />}>
                    <HomePage />
                  </Suspense>
                </Layout>
              </SignedIn>
            } />

            <Route path="/couple" element={
              <SignedIn>
                <Layout>
                  <Suspense fallback={<LoadingFallback />}>
                    <CouplePage />
                  </Suspense>
                </Layout>
              </SignedIn>
            } />

            <Route path="/family" element={
              <SignedIn>
                <Layout>
                  <Suspense fallback={<LoadingFallback />}>
                    <FamilyPage />
                  </Suspense>
                </Layout>
              </SignedIn>
            } />

            <Route path="/individuel" element={
              <SignedIn>
                <Layout>
                  <Suspense fallback={<LoadingFallback />}>
                    <IndividuelPage />
                  </Suspense>
                </Layout>
              </SignedIn>
            } />

            <Route path="/apropos" element={
              <SignedIn>
                <Layout>
                  <Suspense fallback={<LoadingFallback />}>
                    <Apropos />
                  </Suspense>
                </Layout>
              </SignedIn>
            } />

            <Route path="/conditions-generales" element={
              <SignedIn>
                <Layout>
                  <Suspense fallback={<LoadingFallback />}>
                    <ConditionsGenerales />
                  </Suspense>
                </Layout>
              </SignedIn>
            } />

            {/* Catch-all route */}
            <Route path="*" element={
              <SignedIn>
                <Navigate to="/home" replace />
              </SignedIn>
            } />
          </Routes>
        </Router>
      </HelmetProvider>
    </ClerkLoaded>
  );
}

export default App;
