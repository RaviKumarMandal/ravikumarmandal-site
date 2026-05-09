import { motion } from 'framer-motion';
import styles from './FeaturedWork.module.css';

function Entry({ item, prominent = false, compact = false }) {
  if (compact) {
    return (
      <article className={styles.compactItem}>
        <h3>{item.title}</h3>
        <p>{item.note}</p>
      </article>
    );
  }

  return (
    <article className={`${styles.entry} ${prominent ? styles.prominent : styles.supporting}`.trim()}>
      <div className={styles.entryHeader}>
        {item.signal ? <span className={styles.signal}>{item.signal}</span> : null}
        <h3>{item.title}</h3>
      </div>

      <div className={styles.entryBody}>
        <div>
          <span className={styles.metaLabel}>Context</span>
          <p>{item.context}</p>
        </div>
        <div>
          <span className={styles.metaLabel}>Role</span>
          <p>{item.role}</p>
        </div>
        <div>
          <span className={styles.metaLabel}>What the work was</span>
          <p>{item.work}</p>
        </div>
        <div>
          <span className={styles.metaLabel}>What mattered</span>
          <p>{item.impact}</p>
        </div>
      </div>

      <p className={styles.stack}>
        <span className={styles.metaLabel}>Stack</span>
        {item.stack}
      </p>
    </article>
  );
}

export function FeaturedWork({ data }) {
  return (
    <section className={styles.section} aria-labelledby="featured-work-title">
      <div className={styles.header}>
        <p className={styles.label}>Selected work</p>
        <h2 id="featured-work-title">{data.title}</h2>
        <p className={styles.intro}>{data.intro}</p>
      </div>

      <div className={styles.primaryStack}>
        {data.primary.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.48, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <Entry item={item} prominent />
          </motion.div>
        ))}
      </div>

      <div className={styles.supportingGrid}>
        {data.supporting.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.44, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <Entry item={item} />
          </motion.div>
        ))}
      </div>

      <div className={styles.compactStrip}>
        {data.compact.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
          >
            <Entry item={item} compact />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
