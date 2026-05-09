import { motion } from 'framer-motion';
import { HomeSectionIntro } from './HomeSectionIntro';
import styles from './CurrentFocusPanel.module.css';

export function CurrentFocusPanel({ data }) {
  return (
    <section className={styles.section} aria-labelledby="current-focus-title">
      <HomeSectionIntro
        eyebrow={data.eyebrow}
        title={data.title}
        intro={data.intro}
        align="split"
      />

      <div className={styles.panel}>
        {data.items.map((item, index) => (
          <motion.div
            key={item.label}
            className={styles.row}
            initial={{ opacity: 0, x: index % 2 === 0 ? -16 : 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>{item.label}</span>
            <p id={index === 0 ? 'current-focus-title' : undefined}>{item.value}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
