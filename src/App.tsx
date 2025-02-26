// src/App.tsx

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import {
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
  ClerkLoaded,
  SignInButton,
} from "@clerk/clerk-react";
import HomePage from "./pages/HomePage";
import CouplePage from "./pages/Couple";
import Apropos from "./pages/Apropos";
import FamilyPage from "./pages/Family";
import IndividuelPage from "./pages/Individuel";
import Layout from "./components/Layout";
import { HelmetProvider } from 'react-helmet-async';
// import DashboardPage from "./pages/Dashboard";

// Welcome/Login page component
function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-stone-100">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-montserrat mb-4">Bienvenue Carole</h1>
        <p className="text-xl text-gray-600 mb-8">Click sur le bouton entre ton mail et le mot de passe que je t'ai envoyé</p>
      </div>
      <div className="flex gap-4">
        <SignInButton mode="modal">
          <button className="bg-green-800 hover:bg-natural-green/80 text-white px-6 py-3 rounded-md text-lg">
            Connecte toi
          </button>
        </SignInButton>
      </div>
    </div>
  );
}

function App() {
  console.log('App rendering');

  return (
    <ClerkLoaded>
      <HelmetProvider>
        <Router>
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
                  <HomePage />
                </Layout>
              </SignedIn>
            } />

            <Route path="/couple" element={
              <SignedIn>
                <Layout>
                  <CouplePage />
                </Layout>
              </SignedIn>
            } />

            <Route path="/family" element={
              <SignedIn>
                <Layout>
                  <FamilyPage />
                </Layout>
              </SignedIn>
            } />

            <Route path="/individuel" element={
              <SignedIn>
                <Layout>
                  <IndividuelPage />
                </Layout>
              </SignedIn>
            } />

            <Route path="/apropos" element={
              <SignedIn>
                <Layout>
                  <Apropos />
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
