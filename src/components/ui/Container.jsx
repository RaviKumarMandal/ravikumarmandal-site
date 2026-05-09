import styles from './Container.module.css';

export function Container({ children, wide = false, className = '' }) {
  return (
    <div className={`${styles.container} ${wide ? styles.wide : ''} ${className}`.trim()}>
      {children}
    </div>
  );
}
