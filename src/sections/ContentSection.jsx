import { Card } from '../components/ui/Card';
import { SectionLabel } from '../components/ui/SectionLabel';
import styles from './ContentSection.module.css';

export function ContentSection({ title, intro, items }) {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <SectionLabel>Structured section</SectionLabel>
        <h2>{title}</h2>
        <p>{intro}</p>
      </div>

      <div className={styles.grid}>
        {items.map((item) => (
          <Card key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
