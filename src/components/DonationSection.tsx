import { Coffee, Building2 } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "./ContactModal";

export function DonationSection() {
  const [contactOpen, setContactOpen] = useState(false);

  const handleBMAC = () =>
    window.open("https://coff.ee/personalens.cc", "_blank");
  // const handleKoFi = () =>
  //   window.open("https://ko-fi.com/personalens", "_blank");
  // const handleStripe = () =>
  //   window.open("https://your-stripe-donate-link.com", "_blank");
  const handleSponsorEmail = () => {
    window.location.href =
      "mailto:miguel.rubiojimenez@gmail.com?subject=Sponsorship Inquiry";
  };

  return (
    <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-amber-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-200/30 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-amber-200/50">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <Coffee className="w-10 h-10 text-white" />
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Keep AI Accessibility Testing{" "}
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Free
              </span>
            </h2>

            <p className="text-xl text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed">
              Help keep PersonaLens available for developers around the world.
              Your support helps cover OpenAI API costs and ongoing development.
            </p>

            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're an individual or an organization, your donation
              makes a real difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <button
                onClick={handleBMAC}
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-xl font-semibold text-md shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center"
              >
                <Coffee className="w-5 h-5 mr-2" />
                Buy Me a Coffee
              </button>
              {/* <button
                onClick={handleKoFi}
                className="bg-white border border-orange-300 text-orange-700 px-6 py-3 rounded-xl font-semibold text-md shadow hover:scale-105 transition-all flex items-center"
              >
                <Heart className="w-5 h-5 mr-2" />
                Donate via Ko-fi
              </button> */}
              {/* <button
                onClick={handleStripe}
                className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold text-md shadow hover:scale-105 transition-all flex items-center"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Donate with Card
              </button> */}
            </div>

            {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span className="font-medium">Made with love</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="font-medium">Open source</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="font-medium">Community driven</span>
              </div>
            </div> */}

            {/* <div className="pt-6 border-t border-amber-200 text-sm text-gray-500">
              <p className="mb-2">
                Looking to sponsor as a company or larger donor?
              </p>
              <a
                href="mailto:miguel.rubiojimenez@gmail.com?subject=Sponsorship Inquiry"
                className="inline-flex items-center text-orange-700 font-medium hover:underline"
              >
                <Building2 className="w-4 h-4 mr-1" />
                Contact us for sponsorship
              </a>
            </div> */}
            <div className="pt-6 border-t border-amber-200 text-sm text-gray-500">
              <p className="mb-2">
                Looking to sponsor as a company or larger donor?
              </p>
              <button
                onClick={() => setContactOpen(true)}
                className="inline-flex items-center text-orange-700 font-medium hover:underline"
              >
                <Building2 className="w-4 h-4 mr-1" />
                Contact us for sponsorship
              </button>
            </div>

            <ContactModal
              isOpen={contactOpen}
              onClose={() => setContactOpen(false)}
            />

            <div className="mt-12 border-t border-amber-200 pt-6">
              <p className="text-sm text-gray-500 mb-4">
                This project was built during the{" "}
                <span className="font-medium text-gray-700">
                  CustomHack Hackathon
                </span>
                , with support from these amazing tools and platforms:
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <a
                  href="https://useautumn.com"
                  target="_blank"
                  className="text-orange-700 hover:underline font-medium"
                >
                  🍂 Autumn
                </a>
                <a
                  href="https://tambo.co"
                  target="_blank"
                  className="text-orange-700 hover:underline font-medium"
                >
                  🧠 Tambo
                </a>
                <a
                  href="https://lingo.dev"
                  target="_blank"
                  className="text-orange-700 hover:underline font-medium"
                >
                  🌍 Lingo.dev
                </a>
                <a
                  href="https://www.better-auth.com/"
                  target="_blank"
                  className="text-orange-700 hover:underline font-medium"
                >
                  🔐 Better Auth
                </a>
                <a
                  href="https://firecrawl.dev"
                  target="_blank"
                  className="text-orange-700 hover:underline font-medium"
                >
                  🔥 Firecrawl
                </a>
                <a
                  href="https://magicui.design"
                  target="_blank"
                  className="text-orange-700 hover:underline font-medium"
                >
                  ✨ Magic UI
                </a>
                <a
                  href="https://resend.com"
                  target="_blank"
                  className="text-orange-700 hover:underline font-medium"
                >
                  📧 Resend
                </a>
                <a
                  href="https://supabase.com"
                  target="_blank"
                  className="text-orange-700 hover:underline font-medium"
                >
                  🐘 Supabase
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
