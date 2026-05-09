import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

function sharedClass(variant) {
  return `${styles.button} ${styles[variant] || styles.primary}`;
}

export function Button({
  children,
  to,
  href,
  variant = 'primary',
  icon = false,
  className = '',
  ...props
}) {
  const content = (
    <>
      <span>{children}</span>
      {icon ? <ArrowUpRight size={16} aria-hidden="true" /> : null}
    </>
  );

  if (to) {
    return (
      <Link className={`${sharedClass(variant)} ${className}`.trim()} to={to} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    const isExternal = href.startsWith('http');

    return (
      <a
        className={`${sharedClass(variant)} ${className}`.trim()}
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noreferrer' : undefined}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={`${sharedClass(variant)} ${className}`.trim()} {...props}>
      {content}
    </button>
  );
}
