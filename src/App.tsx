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
import PonctuellePage from "./pages/Ponctuelle";
import Layout from "./components/Layout";
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

// Protected layout that checks authentication
function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <SignedIn>
      <Layout>{children}</Layout>
    </SignedIn>
  );
}

function App() {
  return (
    <ClerkLoaded>
      <Router>
        <Routes>
          {/* Default route - Welcome/Login page for non-authenticated users */}
          <Route
            path="/"
            element={
              <>
                <SignedIn>
                  <Navigate to="/home" replace />
                </SignedIn>
                <SignedOut>
                  <WelcomePage />
                </SignedOut>
              </>
            }
          />

          {/* Auth routes */}
          <Route
            path="/sign-in/*"
            element={<SignIn routing="path" path="/sign-in" signUpUrl="/sign-up" />}
          />
          <Route
            path="/sign-up/*"
            element={<SignUp routing="path" path="/sign-up" signInUrl="/sign-in" />}
          />

          {/* Protected routes - Only accessible when authenticated */}
          <Route
            path="/home"
            element={
              <ProtectedLayout>
                <HomePage />
              </ProtectedLayout>
            }
          />
          <Route
            path="/couple"
            element={
              <ProtectedLayout>
                <CouplePage />
              </ProtectedLayout>
            }
          />
          <Route
            path="/family"
            element={
              <ProtectedLayout>
                <FamilyPage />
              </ProtectedLayout>
            }
          />
          <Route
            path="/ponctuelle"
            element={
              <ProtectedLayout>
                <PonctuellePage />
              </ProtectedLayout>
            }
          />
          <Route
            path="/bio"
            element={
              <ProtectedLayout>
                <Apropos />
              </ProtectedLayout>
            }
          />

          {/* Catch-all route - Redirect to welcome page if not authenticated */}
          <Route
            path="*"
            element={
              <SignedIn>
                <Navigate to="/home" replace />
              </SignedIn>
            }
          />
        </Routes>
      </Router>
    </ClerkLoaded>
  );
}

export default App;
