import { Eye, PlayCircle } from "lucide-react";
import { useState } from "react";

interface HeroSectionProps {
  onSignUpClick: () => void;
}

export function HeroSection({ onSignUpClick }: HeroSectionProps) {
  const [showInstallGuide, setShowInstallGuide] = useState(false);

  const handleDownloadExtension = () => {
    // Replace with your actual ZIP file URL
    window.open("/PersonaLens-extension.zip", "_blank");
    setShowInstallGuide(true);
  };

  const handleWatchDemo = () => {
    // Replace with your actual demo video URL
    window.open("https://youtu.be/8y-Hfi5-mJk", "_blank");
  };

  return (
    <section className="relative py-28 bg-darkBg overflow-hidden">
      {/* Background gradient glow */}
      <div
        aria-hidden
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-to-br from-darkAccent/30 via-darkAccent2/20 to-transparent rounded-full blur-3xl pointer-events-none"
      />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-glass backdrop-blur-xl border border-darkBorder rounded-3xl shadow-glass px-10 py-16 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-darkAccent to-darkAccent2 rounded-2xl flex items-center justify-center mb-6 shadow-accent">
            <Eye className="w-9 h-9 text-darkText" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-darkText mb-6 tracking-tight">
            See Your Website
            <br />
            <span className="bg-gradient-to-r from-darkAccent to-darkAccent2 bg-clip-text text-transparent">
              Through Every User’s Eyes
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-darkSubtle mb-10 max-w-2xl">
            PersonaLens reveals accessibility and usability gaps by letting you
            test your site as real users experience it—across abilities,
            languages, and devices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button
              onClick={onSignUpClick}
              className="bg-gradient-to-r from-darkAccent to-darkAccent2 text-darkText px-8 py-3 rounded-xl font-semibold shadow-accent hover:opacity-90 transition w-full sm:w-auto"
            >
              Start Testing for Free
            </button>
            <button
              onClick={handleDownloadExtension}
              className="border border-darkAccent text-darkAccent px-8 py-3 rounded-xl font-semibold hover:bg-darkAccent hover:text-darkText transition w-full sm:w-auto"
            >
              Download ZIP
            </button>
            <button
              onClick={handleWatchDemo}
              className="flex items-center justify-center gap-2 bg-darkCard border border-darkAccent2 text-darkAccent2 px-8 py-3 rounded-xl font-semibold hover:bg-darkAccent2 hover:text-darkText transition w-full sm:w-auto"
            >
              <PlayCircle className="w-5 h-5" />
              Watch Demo Video
            </button>
          </div>
        </div>
      </div>
      {/* Install guide modal */}
      {showInstallGuide && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-darkCard rounded-2xl p-8 max-w-lg w-full border border-darkAccent shadow-glass relative">
            <button
              onClick={() => setShowInstallGuide(false)}
              className="absolute top-4 right-4 text-darkSubtle hover:text-darkAccent"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-darkText mb-4">
              How to Install the Extension
            </h2>
            <ol className="list-decimal list-inside text-darkText space-y-2 text-base">
              <li>Download the ZIP file above and extract it to a folder.</li>
              <li>
                Open <span className="font-mono">chrome://extensions</span> in
                your browser.
              </li>
              <li>
                Enable <b>Developer mode</b> (top right).
              </li>
              <li>
                Click <b>“Load unpacked”</b> and select the extracted folder.
              </li>
              <li>PersonaLens is now ready to use!</li>
            </ol>
            <p className="mt-4 text-darkSubtle text-sm">
              Once the extension is approved, you’ll be able to install it
              directly from the Chrome Web Store.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
