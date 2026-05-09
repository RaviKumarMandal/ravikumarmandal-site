import { motion } from 'framer-motion';
import styles from './InMotion.module.css';

export function InMotion({ data }) {
  return (
    <section className={styles.section} aria-labelledby="in-motion-title">
      <div className={styles.header}>
        <p className={styles.label}>In motion</p>
        <h2 id="in-motion-title">{data.title}</h2>
      </div>

      <div className={styles.grid}>
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
