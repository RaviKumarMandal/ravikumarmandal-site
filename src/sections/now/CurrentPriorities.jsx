import { motion } from 'framer-motion';
import styles from './CurrentPriorities.module.css';

export function CurrentPriorities({ data }) {
  return (
    <section className={styles.section} aria-labelledby="current-priorities-title">
      <div className={styles.header}>
        <p className={styles.label}>Current priorities</p>
        <h2 id="current-priorities-title">{data.title}</h2>
        <p className={styles.intro}>{data.intro}</p>
      </div>

      <div className={styles.list}>
        {data.items.map((item, index) => (
          <motion.div
            key={item.title}
            className={styles.priority}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.42, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3>{item.title}</h3>
            <p>{item.context}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
