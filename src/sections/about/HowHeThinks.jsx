import { motion } from 'framer-motion';
import styles from './HowHeThinks.module.css';

export function HowHeThinks({ data }) {
  return (
    <section className={styles.section} aria-labelledby="how-he-thinks-title">
      <div className={styles.header}>
        <p className={styles.label}>Judgment</p>
        <h2 id="how-he-thinks-title">{data.title}</h2>
        <p className={styles.intro}>{data.intro}</p>
      </div>

      <div className={styles.stack}>
        {data.principles.map((item, index) => (
          <motion.article
            key={item.heading}
            className={styles.principle}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.index}>{String(index + 1).padStart(2, '0')}</div>
            <div className={styles.body}>
              <h3>{item.heading}</h3>
              <p>{item.text}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
