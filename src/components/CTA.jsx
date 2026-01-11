import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="section">
      <motion.div
        className="content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2>Get Started</h2>
        <button className="cta-btn">Launch</button>
      </motion.div>
    </section>
  );
}
