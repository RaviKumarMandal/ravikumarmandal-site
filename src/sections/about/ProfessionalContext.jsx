import { motion } from 'framer-motion';
import styles from './ProfessionalContext.module.css';

export function ProfessionalContext({ data }) {
  return (
    <section className={styles.section} aria-labelledby="professional-context-title">
      <div className={styles.shell}>
        <div className={styles.header}>
          <p className={styles.label}>Professional context</p>
          <h2 id="professional-context-title">{data.title}</h2>
          <p className={styles.intro}>{data.intro}</p>
        </div>

        <motion.div
          className={styles.contextPanel}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.overview}>{data.overview}</p>

          <div className={styles.points}>
            {data.points.map((item, index) => (
              <motion.p
                key={item}
                className={styles.point}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                {item}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
