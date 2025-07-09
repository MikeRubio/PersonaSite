import React from "react";
import { Eye } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

interface NavigationProps {
  onSignInClick: () => void;
  onSignUpClick: () => void;
}

export function Navigation({ onSignInClick, onSignUpClick }: NavigationProps) {
  const { user, signOut } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Eye className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">PersonaLens</h1>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">
                  Welcome, {user.email}
                </span>
                <button
                  onClick={signOut}
                  className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={onSignInClick}
                  className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                >
                  Sign In
                </button>
                <button
                  onClick={onSignUpClick}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
                >
                  Get Started
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
