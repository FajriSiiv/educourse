"use client";

import { motion } from "framer-motion";

interface Props {
  textProps?: string;
  variant?: any;
}
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
export default function ButtonStarted({
  textProps = "Get Started",
  variant = item,
}: Props) {
  return (
    <motion.button
      variants={variant}
      className="py-3 px-6 max-w-fit bg-primary text-white rounded-lg font-semibold tracking-wide"
    >
      {textProps}
    </motion.button>
  );
}
