import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import styles from './HeroSection.module.css';

const easing = [0.22, 1, 0.36, 1];

export function HeroSection({ data }) {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.grid}>
        <motion.aside
          className={styles.identityColumn}
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: easing }}
        >
          <div className={styles.identityBlock}>
            <span className={styles.status}>
              <span className={styles.statusDot} />
              {data.status}
            </span>
            <p className={styles.name}>{data.name}</p>
            <p className={styles.role}>{data.role}</p>
          </div>

          <div className={styles.signalsPanel}>
            {data.signals.map((item, index) => (
              <motion.div
                key={item.label}
                className={styles.signalItem}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12 + index * 0.08, ease: easing }}
              >
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </motion.div>
            ))}
          </div>
        </motion.aside>

        <div className={styles.statementColumn}>
          <motion.p
            className={styles.kicker}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05, ease: easing }}
          >
            Product systems, software craft, and credible digital presence
          </motion.p>

          <motion.h1
            id="home-hero-title"
            className={styles.headline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easing }}
          >
            {data.headline}
          </motion.h1>

          <motion.p
            className={styles.intro}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18, ease: easing }}
          >
            {data.intro}
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.26, ease: easing }}
          >
            <Button to={data.ctaPrimary.href} icon>
              {data.ctaPrimary.label}
            </Button>
            <Button to={data.ctaSecondary.href} variant="secondary">
              {data.ctaSecondary.label}
            </Button>
          </motion.div>

          <div className={styles.notesRow}>
            {data.notes.map((item, index) => (
              <motion.p
                key={item}
                className={styles.note}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.32 + index * 0.07, ease: easing }}
              >
                {item}
              </motion.p>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        className={styles.metricsStrip}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.32, ease: easing }}
      >
        {data.metrics.map((item) => (
          <div key={item.label} className={styles.metric}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
