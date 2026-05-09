import { motion } from 'framer-motion';
import styles from './WorkLens.module.css';

export function WorkLens({ data }) {
  return (
    <section className={styles.section} aria-labelledby="work-lens-title">
      <motion.div
        className={styles.block}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 id="work-lens-title" className={styles.statement}>
          {data.statement}
        </h2>
        <p className={styles.note}>{data.note}</p>
      </motion.div>
    </section>
  );
}
