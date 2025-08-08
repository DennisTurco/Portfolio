'use client';

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

type AnimatedSectionProps = {
  children: ReactNode;
};

export default function AnimatedSection({ children }: AnimatedSectionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={fadeIn}
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  );
}