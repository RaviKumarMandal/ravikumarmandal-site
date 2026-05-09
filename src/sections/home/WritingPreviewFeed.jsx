import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HomeSectionIntro } from './HomeSectionIntro';
import styles from './WritingPreviewFeed.module.css';

export function WritingPreviewFeed({ data }) {
  return (
    <section className={styles.section} aria-labelledby="writing-preview-title">
      <HomeSectionIntro
        eyebrow={data.eyebrow}
        title={data.title}
        intro={data.intro}
        align="split"
      />

      <div className={styles.feed}>
        {data.items.map((item, index) => (
          <motion.article
            key={item.title}
            className={styles.entry}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={styles.category}>{item.category}</span>
            <div className={styles.content}>
              <h3 id={index === 0 ? 'writing-preview-title' : undefined}>{item.title}</h3>
              <p>{item.excerpt}</p>
            </div>
            <ArrowRight size={18} aria-hidden="true" />
          </motion.article>
        ))}
      </div>

      <Link className={styles.link} to={data.cta.href}>
        {data.cta.label}
      </Link>
    </section>
  );
}
