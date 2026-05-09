import { motion } from 'framer-motion';
import styles from './WorkingStyle.module.css';

export function WorkingStyle({ data }) {
  return (
    <section className={styles.section} aria-labelledby="working-style-title">
      <div className={styles.layout}>
        <div className={styles.header}>
          <p className={styles.label}>Working style</p>
          <h2 id="working-style-title">{data.title}</h2>
          <p className={styles.intro}>{data.intro}</p>
        </div>

        <div className={styles.rows}>
          {data.traits.map((item, index) => (
            <motion.div
              key={item.label}
              className={styles.row}
              initial={{ opacity: 0, x: index % 2 === 0 ? -14 : 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.42, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <span>{item.label}</span>
              <p>{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
