import { useState } from "react";
import { Copy, Check, Heart, Chrome } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

export function Dashboard() {
  const { user, signOut } = useAuth();
  const [copied, setCopied] = useState(false);

  const apiKey = user?.user_metadata?.api_key || "No API key found";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(apiKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 py-10 font-inter text-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-md">
              PL
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight">
              PersonaLens
            </h1>
          </div>
          <div className="text-sm text-gray-400">{user?.email}</div>
        </header>

        {/* Main Card */}
        <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700 p-10 space-y-10">
          {/* API Key Section */}
          <div className="bg-gradient-to-br from-purple-800/40 to-pink-700/30 border border-purple-700/40 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-2">Your API Key</h3>
            <div className="flex items-center gap-2">
              <code className="bg-gray-900 px-3 py-2 rounded border border-gray-700 text-sm font-mono flex-1 break-all">
                {apiKey}
              </code>
              <button
                onClick={copyToClipboard}
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold px-4 py-2 rounded-lg shadow hover:opacity-90 transition flex items-center space-x-1"
              >
                {copied ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>
            <p className="text-sm text-pink-300 mt-2">
              Paste this in your PersonaLens Chrome extension settings.
            </p>
          </div>

          {/* Account Status */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
              <h4 className="font-semibold mb-1">Account Status</h4>
              <p className="text-3xl font-extrabold text-green-400">Active</p>
              <p className="text-sm text-gray-400">Always Free 🎉</p>
            </div>

            {/* Donation Callout */}
            <div className="bg-gradient-to-br from-pink-800/30 to-purple-700/30 border border-pink-700/30 rounded-xl p-6">
              <h4 className="font-semibold mb-2 text-pink-300 flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-400" /> Support PersonaLens
              </h4>
              <p className="text-sm text-gray-300 mb-3">
                PersonaLens is free and community-powered. If it helps you,
                consider buying us a coffee to support development and AI costs.
              </p>
              <a
                href="https://coff.ee/personalens.cc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition"
              >
                ☕ Buy Me a Coffee
              </a>
            </div>
          </div>

          {/* Getting Started */}
          <div className="bg-gray-900/80 border border-purple-600/30 rounded-xl p-6">
            <h4 className="font-semibold text-purple-400 mb-2">
              Getting Started
            </h4>

            <ol className="text-sm space-y-1 list-decimal list-inside text-gray-200 mb-4">
              <li>
                <a
                  href="https://chromewebstore.google.com/detail/personalens/cglgioahlckbpkobooplpklngonaocfg?utm_source=item-share-cb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:underline inline-flex items-center gap-1"
                >
                  Install the PersonaLens Chrome extension
                  <Chrome className="w-4 h-4" />
                </a>
              </li>
              <li>Open the extension and go to Settings</li>
              <li>Paste your API key above</li>
              <li>Start testing websites for accessibility!</li>
            </ol>

            <p className="text-xs text-gray-400">
              If the link doesn’t work, search “PersonaLens” on the Chrome Web
              Store.
            </p>
          </div>

          {/* Sign Out */}
          <div className="pt-4 border-t border-gray-700 flex justify-end">
            <button
              onClick={signOut}
              className="text-red-400 hover:text-red-300 font-semibold transition"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
