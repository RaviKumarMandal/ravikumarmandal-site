import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import styles from './ContactCtaSection.module.css';

export function ContactCtaSection({ data }) {
  return (
    <section className={styles.section} aria-labelledby="contact-cta-title">
      <motion.div
        className={styles.shell}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{data.eyebrow}</p>
          <h2 id="contact-cta-title">{data.title}</h2>
          <p className={styles.intro}>{data.intro}</p>
        </div>

        <div className={styles.actions}>
          <Button to={data.primary.href} icon>
            {data.primary.label}
          </Button>
          <Button href={data.secondary.href} variant="secondary">
            {data.secondary.label}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
