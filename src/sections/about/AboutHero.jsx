import { motion } from 'framer-motion';
import styles from './AboutHero.module.css';

const easing = [0.22, 1, 0.36, 1];

export function AboutHero({ data }) {
  return (
    <section className={styles.section} aria-labelledby="about-hero-title">
      <motion.div
        className={styles.shell}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: easing }}
      >
        <div className={styles.copy}>
          <p className={styles.label}>{data.label}</p>
          <h1 id="about-hero-title" className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.intro}>{data.intro}</p>
          <p className={styles.supporting}>{data.supporting}</p>
        </div>

        <div className={styles.signalStrip} aria-label="Professional signals">
          {data.signals.map((item, index) => (
            <motion.div
              key={item.label}
              className={styles.signal}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 + index * 0.07, ease: easing }}
            >
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
