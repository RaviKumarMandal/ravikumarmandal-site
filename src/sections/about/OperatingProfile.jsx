import { motion } from 'framer-motion';
import styles from './OperatingProfile.module.css';

export function OperatingProfile({ data }) {
  return (
    <section className={styles.section} aria-labelledby="operating-profile-title">
      <div className={styles.introBlock}>
        <p className={styles.label}>Operating profile</p>
        <h2 id="operating-profile-title">{data.title}</h2>
        <p className={styles.intro}>{data.intro}</p>
      </div>

      <div className={styles.grid}>
        {data.items.map((item, index) => (
          <motion.article
            key={item.title}
            className={styles.item}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
