import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { HomeSectionIntro } from './HomeSectionIntro';
import styles from './RecommendationsPreview.module.css';

export function RecommendationsPreview({ data }) {
  return (
    <section className={styles.section} aria-labelledby="recommendations-preview-title">
      <HomeSectionIntro
        eyebrow={data.eyebrow}
        title={data.title}
        intro={data.intro}
        align="split"
      />

      <div className={styles.layout}>
        <motion.div
          className={styles.featured}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.label}>Recommendation philosophy</p>
          <h3 id="recommendations-preview-title">{data.featured.title}</h3>
          <p className={styles.description}>{data.featured.description}</p>
          <Button to={data.cta.href} variant="secondary">
            {data.cta.label}
          </Button>
        </motion.div>

        <div className={styles.categories}>
          {data.categories.map((item, index) => (
            <motion.div
              key={item}
              className={styles.category}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
