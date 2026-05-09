import { motion } from 'framer-motion';
import styles from './WritingHero.module.css';

export function WritingHero({ data }) {
  return (
    <section className={styles.section} aria-labelledby="writing-hero-title">
      <motion.div
        className={styles.shell}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className={styles.label}>{data.label}</p>
        <h1 id="writing-hero-title" className={styles.title}>
          {data.title}
        </h1>
        <p className={styles.intro}>{data.intro}</p>
        <p className={styles.supporting}>{data.supporting}</p>
      </motion.div>
    </section>
  );
}
