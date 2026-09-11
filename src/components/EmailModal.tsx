import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Copy, X, Check } from 'lucide-react';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

export function EmailModal({ isOpen, onClose, email }: EmailModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
  };

  const handleOpenApp = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          />
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3 text-gray-900">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-semibold">Contact Ankit</h3>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleCopy}
                  className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-black hover:bg-gray-50 transition-all group"
                >
                  <span className="font-medium text-gray-900">{email}</span>
                  <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-black">
                    {copied ? (
                      <><Check className="w-4 h-4 text-green-500" /> Copied!</>
                    ) : (
                      <><Copy className="w-4 h-4" /> Copy</>
                    )}
                  </div>
                </button>

                <button
                  onClick={handleOpenApp}
                  className="w-full flex items-center justify-center gap-2 p-4 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Open Email App
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
