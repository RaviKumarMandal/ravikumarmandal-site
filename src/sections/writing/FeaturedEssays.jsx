import { motion } from 'framer-motion';
import styles from './FeaturedEssays.module.css';

function EssayEntry({ essay, variant = 'supporting' }) {
  return (
    <article className={`${styles.entry} ${styles[variant]}`.trim()}>
      <p className={styles.meta}>
        <span>{essay.theme}</span>
        <span>{essay.readingTime}</span>
      </p>
      <h3>{essay.title}</h3>
      <p className={styles.premise}>{essay.premise}</p>
    </article>
  );
}

export function FeaturedEssays({ data }) {
  return (
    <section className={styles.section} aria-labelledby="featured-essays-title">
      <div className={styles.header}>
        <p className={styles.label}>Featured essays</p>
        <h2 id="featured-essays-title">{data.title}</h2>
        <p className={styles.intro}>{data.intro}</p>
      </div>

      <div className={styles.primaryRow}>
        {data.primary.map((essay, index) => (
          <motion.div
            key={essay.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.46, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <EssayEntry essay={essay} variant="primary" />
          </motion.div>
        ))}
      </div>

      <div className={styles.supportingRow}>
        {data.supporting.map((essay, index) => (
          <motion.div
            key={essay.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.44, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <EssayEntry essay={essay} variant={index === 0 ? 'supportingLarge' : 'supporting'} />
          </motion.div>
        ))}
      </div>

      <div className={styles.compactRow}>
        {data.compact.map((essay, index) => (
          <motion.div
            key={essay.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
          >
            <EssayEntry essay={essay} variant="compact" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
