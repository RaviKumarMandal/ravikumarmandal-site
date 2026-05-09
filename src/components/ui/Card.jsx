import styles from './Card.module.css';

export function Card({ children, className = '', as: Tag = 'article' }) {
  return <Tag className={`${styles.card} ${className}`.trim()}>{children}</Tag>;
}
