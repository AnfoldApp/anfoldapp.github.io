"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

interface AdvancedCollapsibleProps {
  children: React.ReactNode;
  className?: string;
  label?: string;
}

export default function AdvancedCollapsible({
  children,
  className = "",
  label = "More",
}: AdvancedCollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className={`rounded-lg border ${className}`}
      animate={{
        backgroundColor: isOpen ? "var(--cobalt-lightest)" : "transparent",
        borderColor: isOpen
          ? "var(--cobalt-lighter)"
          : "var(--cobalt-lightest)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex p-3 items-center gap-2 with-underline cursor-pointer hover:opacity-80 transition-opacity"
        aria-expanded={isOpen}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4" strokeWidth={2} />
        </motion.div>
        <span>{label}</span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="pl-3 pr-3 pb-3"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="space-y-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
