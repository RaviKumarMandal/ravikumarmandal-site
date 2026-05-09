import { motion } from 'framer-motion';
import styles from './WritingThemes.module.css';

export function WritingThemes({ data }) {
  return (
    <section className={styles.section} aria-labelledby="writing-themes-title">
      <div className={styles.header}>
        <p className={styles.label}>Themes</p>
        <h2 id="writing-themes-title">{data.title}</h2>
        <p className={styles.intro}>{data.intro}</p>
      </div>

      <div className={styles.grid}>
        {data.items.map((item, index) => (
          <motion.article
            key={item.name}
            className={styles.theme}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.42, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
