'use client'
import { motion, Variants } from "framer-motion";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import Hero from "../components/HeroPortfolio";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function HomePage() {
  return (
    <div>
      <Navbar />

      <motion.section initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <Hero />
      </motion.section>

      <section>
        <Footer />
      </section>

    </div>
  );
}
