import { Link } from 'react-router-dom';
import { footerBlurb, navigation, siteMeta, socialLinks } from '../data/site';
import { Container } from '../components/ui/Container';
import styles from './SiteFooter.module.css';

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Container wide>
        <div className={styles.shell}>
          <div className={styles.brandBlock}>
            <p className={styles.kicker}>Ravi Kumar Mandal</p>
            <p className={styles.blurb}>{footerBlurb}</p>
          </div>

          <div className={styles.linksWrap}>
            <nav aria-label="Footer">
              <ul className={styles.linkList}>
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link to={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <ul className={styles.linkList}>
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.metaRow}>
          <span>{siteMeta.role}</span>
          <span>{siteMeta.name}</span>
          <span>{new Date().getFullYear()}</span>
        </div>
      </Container>
    </footer>
  );
}
