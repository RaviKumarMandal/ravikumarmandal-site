import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HomeSectionIntro } from './HomeSectionIntro';
import styles from './SelectedWorkPreview.module.css';

export function SelectedWorkPreview({ data }) {
  return (
    <section className={styles.section} aria-labelledby="selected-work-title">
      <HomeSectionIntro
        eyebrow={data.eyebrow}
        title={data.title}
        intro={data.intro}
        align="split"
      />

      <div className={styles.grid}>
        {data.items.map((item, index) => (
          <motion.article
            key={item.title}
            className={styles.item}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className={styles.emphasis}>{item.emphasis}</p>
            <h3 id={index === 0 ? 'selected-work-title' : undefined}>{item.title}</h3>
            <p className={styles.summary}>{item.summary}</p>
            <div className={styles.footer}>
              <span>{item.detail}</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </div>
          </motion.article>
        ))}
      </div>

      <Link className={styles.cta} to={data.cta.href}>
        <span>{data.cta.label}</span>
        <ArrowUpRight size={16} aria-hidden="true" />
      </Link>
    </section>
  );
}
