"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsDrawer = ({ isOpen, onClose }: DrawerProps) => {
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
            <h1 className="text-xl font-bold">Terms and conditions</h1>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus blanditiis et quas natus sequi voluptatibus tempora
              voluptate in non, doloremque accusantium vero iusto fugiat velit
              quidem deserunt labore pariatur? Quidem.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus blanditiis et quas natus sequi voluptatibus tempora
              voluptate in non, doloremque accusantium vero iusto fugiat velit
              quidem deserunt labore pariatur? Quidem.
            </p>
            <h2 className="text-lg font-bold">Terms & Conditions</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus blanditiis et quas natus sequi voluptatibus tempora
              voluptate in non, doloremque accusantium vero iusto fugiat velit
              quidem deserunt labore pariatur? Quidem.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus blanditiis et quas natus sequi voluptatibus tempora
              voluptate in non, doloremque accusantium vero iusto fugiat velit
              quidem deserunt labore pariatur? Quidem.
            </p>
            <h3 className="text-base font-bold">Terms & Conditions</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus blanditiis et quas natus sequi voluptatibus tempora
              voluptate in non, doloremque accusantium vero iusto fugiat velit
              quidem deserunt labore pariatur? Quidem.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus blanditiis et quas natus sequi voluptatibus tempora
              voluptate in non, doloremque accusantium vero iusto fugiat velit
              quidem deserunt labore pariatur? Quidem.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TermsDrawer;
