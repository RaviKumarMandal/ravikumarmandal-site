import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { navigation, siteMeta } from '../data/site';
import styles from './SiteHeader.module.css';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={styles.header}>
      <Container wide>
        <div className={styles.shell}>
          <Link className={styles.brand} to="/" aria-label={`${siteMeta.name} home`}>
            <span className={styles.mark}>{siteMeta.shortName}</span>
            <span className={styles.brandText}>
              <strong>{siteMeta.name}</strong>
              <small>{siteMeta.role}</small>
            </span>
          </Link>

          <nav className={styles.desktopNav} aria-label="Primary">
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`.trim()}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className={styles.actions}>
            <Button to="/contact" variant="secondary">
              Start a conversation
            </Button>

            <button
              className={styles.menuButton}
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-navigation"
            className={styles.mobilePanel}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <Container wide>
              <nav className={styles.mobileNav} aria-label="Mobile">
                {navigation.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className={({ isActive }) =>
                      `${styles.mobileLink} ${isActive ? styles.mobileActive : ''}`.trim()
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
