"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, SearchIcon, X } from "lucide-react";
import { useRegistrationStore } from "@/stores/auth-store";
import { Input } from "./ui/input";
import Image from "next/image";

export const COUNTRY_OPTIONS = [
  { value: "+44", label: "United Kingdom", flag: "🇬🇧" },
  { value: "+353", label: "Ireland", flag: "🇮🇪" },
  { value: "+1", label: "United States of America", flag: "🇺🇸" },
  { value: "+61", label: "Australia", flag: "🇦🇺" },
  { value: "+93", label: "Afghanistan", flag: "🇦🇫" },
  { value: "+355", label: "Albania", flag: "🇦🇱" },
  { value: "+213", label: "Algeria", flag: "🇩🇿" },
];

export const CountryCodeSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const { countryCode, setRegistrationData } = useRegistrationStore();

  const filteredOptions = COUNTRY_OPTIONS.filter((option) =>
    option.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-32 px-5 grow-0 h-14 border rounded-full font-light flex justify-between items-center border-gray-300"
      >
        {countryCode || "+ Code"}
        <ChevronDown size={18} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed -left-2 w-full top-0 bg-white h-screen z-50 flex flex-col"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex justify-between items-center gap-2 p-6 pb-2">
                <Input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <SearchIcon className="absolute right-24 text-gray-500" />
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2"
                >
                  <X size={24} className="text-gray-500" />
                </button>
              </div>

              <div className="overflow-y-auto max-h-full">
                {filteredOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      setRegistrationData({
                        countryCode: option.value,
                      });
                      setIsOpen(false);
                    }}
                    className="flex items-center p-3 hover:bg-gray-100 w-full text-left px-6 font-light"
                  >
                    <span className="mr-3 text-lg size-8 rounded-full overflow-hidden">
                      <Image
                        src={"/assets/icons/usa-flag.svg"}
                        className="object-cover w-full h-full scale-150"
                        width={50}
                        height={50}
                        alt="Country flag"
                      />
                    </span>
                    {option.value}
                    <span className="ml-4">{option.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
