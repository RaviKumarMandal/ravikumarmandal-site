import { SectionLabel } from '../components/ui/SectionLabel';
import styles from './PageHero.module.css';

export function PageHero({ eyebrow, title, intro, actions }) {
  return (
    <section className={styles.hero}>
      <div className={styles.copy}>
        <SectionLabel>{eyebrow}</SectionLabel>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
      {actions ? <div className={styles.actions}>{actions}</div> : null}
    </section>
  );
}
