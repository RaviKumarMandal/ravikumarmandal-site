import styles from './AppLoader.module.css';

export function AppLoader() {
  return (
    <div className={styles.loader} role="status" aria-live="polite" aria-label="Loading page">
      <span className={styles.pulse} />
      <span>Loading the interface</span>
    </div>
  );
}
