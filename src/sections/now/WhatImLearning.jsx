import { motion } from 'framer-motion';
import styles from './WhatImLearning.module.css';

export function WhatImLearning({ data }) {
  return (
    <section className={styles.section} aria-labelledby="what-im-learning-title">
      <div className={styles.header}>
        <p className={styles.label}>What I’m learning</p>
        <h2 id="what-im-learning-title">{data.title}</h2>
        <p className={styles.intro}>{data.intro}</p>
      </div>

      <div className={styles.stack}>
        {data.items.map((item, index) => (
          <motion.article
            key={item.title}
            className={styles.item}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.42, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
