import React, { useState } from 'react'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { FeaturesSection } from './components/FeaturesSection'
import { HowItWorksSection } from './components/HowItWorksSection'
import { DonationSection } from "./components/DonationSection";
import { AuthModal } from "./components/AuthModal";
import { Dashboard } from "./components/Dashboard";

function AppContent() {
  const { user, loading } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signup");

  const handleSignInClick = () => {
    setAuthMode("signin");
    setAuthModalOpen(true);
  };

  const handleSignUpClick = () => {
    setAuthMode("signup");
    setAuthModalOpen(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white">Loading...</p>
        </div>
      </div>
    );
  }

  if (user) {
    return <Dashboard />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* <Navigation
        onSignInClick={handleSignInClick}
        onSignUpClick={handleSignUpClick}
      /> */}
      <HeroSection onSignUpClick={handleSignUpClick} />
      <FeaturesSection />
      <HowItWorksSection />
      <DonationSection />

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
