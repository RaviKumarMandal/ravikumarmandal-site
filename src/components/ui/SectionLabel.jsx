import styles from './SectionLabel.module.css';

export function SectionLabel({ children }) {
  return <span className={styles.label}>{children}</span>;
}
