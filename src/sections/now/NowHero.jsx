import { motion } from 'framer-motion';
import styles from './NowHero.module.css';

export function NowHero({ data }) {
  return (
    <section className={styles.section} aria-labelledby="now-hero-title">
      <motion.div
        className={styles.shell}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className={styles.label}>{data.label}</p>
        <h1 id="now-hero-title" className={styles.title}>
          {data.title}
        </h1>
        <p className={styles.intro}>{data.intro}</p>
        <p className={styles.supporting}>{data.supporting}</p>
      </motion.div>
    </section>
  );
}
