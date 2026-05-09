import { motion } from 'framer-motion';
import styles from './CurrentState.module.css';

export function CurrentState({ data }) {
  return (
    <section className={styles.section} aria-labelledby="current-state-title">
      <div className={styles.layout}>
        <div className={styles.header}>
          <p className={styles.label}>Current state</p>
          <h2 id="current-state-title">{data.title}</h2>
        </div>

        <motion.div
          className={styles.body}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
        >
          {data.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
