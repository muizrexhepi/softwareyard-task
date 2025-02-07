"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyDrawer = ({ isOpen, onClose }: DrawerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-x-0 bottom-0 w-full h-screen bg-white z-50 flex flex-col"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex justify-end items-center p-6">
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>
          <div className="overflow-y-auto flex-1 p-6 text-gray-600 space-y-4 text-sm font-light">
            <h1 className="text-xl font-bold">Privacy Policy</h1>
            <p>
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your personal data.
            </p>
            <p>
              We are committed to ensuring your information is secure and never
              shared without your consent.
            </p>
            <h2 className="text-lg font-bold">Data Collection</h2>
            <p>
              We collect minimal personal data necessary to provide you with the
              best experience.
            </p>
            <p>
              This includes information such as your name, email, and phone
              number, which are securely stored.
            </p>
            <h3 className="text-base font-bold">How We Use Your Data</h3>
            <p>
              Your information helps us personalize your experience and improve
              our services.
            </p>
            <p>
              We never sell your data to third parties, and all processing is
              done securely.
            </p>
            <h3 className="text-base font-bold">Your Rights</h3>
            <p>
              You have the right to request access, correction, or deletion of
              your personal data at any time.
            </p>
            <p>
              If you have any questions about our privacy policy, feel free to
              contact us.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PrivacyDrawer;
