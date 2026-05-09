import { motion } from 'framer-motion';
import styles from './HowWorkIsApproached.module.css';

export function HowWorkIsApproached({ data }) {
  return (
    <section className={styles.section} aria-labelledby="work-approach-title">
      <div className={styles.header}>
        <p className={styles.label}>Execution approach</p>
        <h2 id="work-approach-title">{data.title}</h2>
        <p className={styles.intro}>{data.intro}</p>
      </div>

      <div className={styles.list}>
        {data.points.map((item, index) => (
          <motion.div
            key={item}
            className={styles.point}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.42, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{item}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
