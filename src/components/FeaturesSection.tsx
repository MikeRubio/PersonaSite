import { Eye, Globe, Users, Hand, EyeOff, Brain } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Colorblind Users",
    description:
      "Test color contrast and accessibility for users with deuteranopia and other color vision deficiencies.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
  {
    icon: Globe,
    title: "Non-Native Speakers",
    description:
      "Evaluate language complexity and clarity for users with different English proficiency levels.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    icon: Users,
    title: "Elderly Users",
    description:
      "Test for age-related accessibility needs including larger text and simplified navigation.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
  },
  {
    icon: Hand,
    title: "Motor Impaired",
    description:
      "Evaluate usability for users with limited fine motor control and mobility challenges.",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
  },
  {
    icon: EyeOff,
    title: "Low Vision",
    description:
      "Test screen reader compatibility and high contrast requirements for visually impaired users.",
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
  },
  {
    icon: Brain,
    title: "Cognitive Impaired",
    description:
      "Evaluate clarity and cognitive load for users with learning disabilities and cognitive challenges.",
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/20",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Test From Multiple
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Perspectives
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI analyzes your website through the lens of different user
            personas, revealing accessibility barriers you might miss.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border ${feature.borderColor} hover:scale-105`}
              >
                <div
                  className={`absolute inset-0 ${feature.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
