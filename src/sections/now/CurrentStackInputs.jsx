import { motion } from 'framer-motion';
import styles from './CurrentStackInputs.module.css';

export function CurrentStackInputs({ data }) {
  return (
    <section className={styles.section} aria-labelledby="current-stack-inputs-title">
      <div className={styles.header}>
        <p className={styles.label}>Current stack and inputs</p>
        <h2 id="current-stack-inputs-title">{data.title}</h2>
        <p className={styles.intro}>{data.intro}</p>
      </div>

      <div className={styles.grid}>
        {data.inputs.map((item, index) => (
          <motion.article
            key={item.title}
            className={styles.input}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.42, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
