import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import styles from './SiteLayout.module.css';

export function SiteLayout({ children }) {
  return (
    <div className={styles.shell}>
      <div className={styles.backdrop} aria-hidden="true" />
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
