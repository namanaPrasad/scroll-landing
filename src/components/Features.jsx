import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Features() {
  const features = [
    "Scroll Triggered Animations",
    "Parallax Depth",
    "Smooth Performance",
    "Responsive Layout",
  ];

  return (
    <section className="section dark">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2>Features</h2>
        <div className="feature-list">
          {features.map((f) => (
            <motion.div key={f} className="feature" variants={item}>
              {f}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
