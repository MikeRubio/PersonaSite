import { useState } from "react";
import Thumbnail from "../assets/thumb.png";

export function DemoVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnailUrl =
    "https://img.youtube.com/vi/8y-Hfi5-mJk/maxresdefault.jpg";
  const videoUrl = "https://www.youtube.com/embed/8y-Hfi5-mJk";
  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700">
        <div className="aspect-video rounded-xl relative overflow-hidden">
          {/* Background Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 z-0"></div>

          {isPlaying ? (
            <iframe
              className="w-full h-full relative z-10 rounded-xl"
              src={videoUrl}
              title="PersonaLens Demo"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="relative w-full h-full">
              <img
                src={Thumbnail}
                alt="Watch demo"
                className="w-full h-full object-cover rounded-xl"
              />
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 z-10 flex items-center justify-center w-full h-full hover:bg-black/20 transition-all duration-300"
              ></button>
              <div className="absolute bottom-4 left-4 text-white/80 text-sm z-10">
                Watch PersonaLens in action
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
