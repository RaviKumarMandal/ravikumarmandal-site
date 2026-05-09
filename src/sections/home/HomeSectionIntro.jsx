import { motion } from 'framer-motion';
import { SectionLabel } from '../../components/ui/SectionLabel';
import styles from './HomeSectionIntro.module.css';

export function HomeSectionIntro({ eyebrow, title, intro, align = 'left' }) {
  return (
    <motion.div
      className={`${styles.intro} ${align === 'split' ? styles.split : ''}`.trim()}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div>
        <SectionLabel>{eyebrow}</SectionLabel>
        <h2>{title}</h2>
      </div>
      <p>{intro}</p>
    </motion.div>
  );
}
