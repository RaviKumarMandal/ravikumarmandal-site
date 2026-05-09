import { motion } from 'framer-motion';
import styles from './ReadingPath.module.css';

export function ReadingPath({ data }) {
  return (
    <section className={styles.section} aria-labelledby="reading-path-title">
      <div className={styles.header}>
        <p className={styles.label}>Reading path</p>
        <h2 id="reading-path-title">{data.title}</h2>
        <p className={styles.intro}>{data.intro}</p>
      </div>

      <div className={styles.pathList}>
        {data.paths.map((item, index) => (
          <motion.div
            key={item.cue}
            className={styles.path}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.42, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className={styles.cue}>{item.cue}</p>
            <p className={styles.recommendation}>{item.recommendation}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
