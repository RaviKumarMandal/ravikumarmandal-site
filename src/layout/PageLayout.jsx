import { motion } from 'framer-motion';
import { Container } from '../components/ui/Container';
import styles from './PageLayout.module.css';

const transition = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

export function PageLayout({ children, wide = false }) {
  return (
    <motion.main
      className={styles.page}
      initial={transition.initial}
      animate={transition.animate}
      exit={transition.exit}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container wide={wide}>{children}</Container>
    </motion.main>
  );
}
