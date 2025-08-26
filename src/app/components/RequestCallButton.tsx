"use client";
import { motion } from "framer-motion";

interface DemoButtonProps {
  onClick?: () => void;
}

const RequestCall: React.FC<DemoButtonProps> = ({ onClick }) => (
  <div className="relative inline-flex items-center">
    <motion.button
      type="button"
      onClick={onClick}
      className="flex items-center text-sm cursor-pointer gap-2 bg-primary text-white font-semibold px-1 md:pl-6 py-1 pl-4 rounded-full shadow-lg hover:bg-primary transition relative"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      Request a Call
      <span className="ml-2 flex-shrink-0">
        <img
          src="/img/arrowrighticonwhite.svg"
          alt="Icon"
          className="w-12 h-12 object-contain"
        />
      </span>
    </motion.button>
  </div>
);

export default RequestCall;
