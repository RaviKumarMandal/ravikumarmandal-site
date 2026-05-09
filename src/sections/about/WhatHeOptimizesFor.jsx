import { motion } from 'framer-motion';
import styles from './WhatHeOptimizesFor.module.css';

export function WhatHeOptimizesFor({ data }) {
  return (
    <section className={styles.section} aria-labelledby="optimizes-for-title">
      <div className={styles.header}>
        <p className={styles.label}>Standards</p>
        <h2 id="optimizes-for-title">{data.title}</h2>
        <p className={styles.intro}>{data.intro}</p>
      </div>

      <div className={styles.signatureBlock}>
        {data.items.map((item, index) => (
          <motion.div
            key={item}
            className={styles.rule}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.42, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{item}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
