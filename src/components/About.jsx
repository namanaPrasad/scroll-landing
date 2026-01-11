import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="section">
      <motion.div
        className="content"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2>Intentional Motion</h2>
        <p>
          Content animates only when it enters the viewport for a smooth,
          premium scroll experience.
        </p>
      </motion.div>
    </section>
  );
}
