import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './NowClosingCTA.module.css';

export function NowClosingCTA({ data }) {
  return (
    <section className={styles.section} aria-labelledby="now-closing-title">
      <motion.div
        className={styles.shell}
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.copy}>
          <p className={styles.label}>Next</p>
          <h2 id="now-closing-title">{data.title}</h2>
          <p className={styles.intro}>{data.intro}</p>
        </div>

        <div className={styles.links}>
          {data.links.map((item) => (
            <Link key={item.href} className={styles.link} to={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
