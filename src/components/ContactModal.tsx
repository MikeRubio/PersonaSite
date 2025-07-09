import React from "react";
import { X, Mail, Twitter, Github } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl w-full max-w-md relative border border-gray-700">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold mb-4">Sponsor PersonaLens</h2>
        <p className="text-sm text-gray-300 mb-6">
          Want to sponsor or collaborate? Reach out via email or connect on
          social.
        </p>

        <ul className="space-y-4 text-sm">
          <li className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-orange-400" />
            <a
              href="mailto:miguel.rubiojimenez@gmail.com"
              className="hover:underline text-orange-300"
            >
              miguel.rubiojimenez@gmail.com
            </a>
          </li>
          <li className="flex items-center space-x-3">
            <Twitter className="w-5 h-5 text-sky-400" />
            <a
              href="https://twitter.com/guerllaje"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-sky-300"
            >
              @guerllaje
            </a>
          </li>
          <li className="flex items-center space-x-3">
            <Github className="w-5 h-5 text-gray-300" />
            <a
              href="https://github.com/guerllaje"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-gray-300"
            >
              github.com/guerllaje
            </a>
          </li>
        </ul>

        <div className="mt-6 text-xs text-gray-500">
          We appreciate your support and interest 💜
        </div>
      </div>
    </div>
  );
}
