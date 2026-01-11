import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section className="parallax-section">
      <motion.div className="parallax-bg" style={{ y }} />
      <motion.div
        className="parallax-content"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Depth Through Parallax</h2>
      </motion.div>
    </section>
  );
}
