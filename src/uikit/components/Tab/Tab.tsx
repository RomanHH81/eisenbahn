import { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './Tab.module.scss';

interface TabProps {
  active: boolean;
  children: ReactNode;
  onClick?: () => void;
}

const Tab = ({ active, children, onClick }: TabProps) => {
  const classes = classNames({
    [styles.tab]: true,
    [styles['tab--active']]: active,
  });

  return (
    <button onClick={onClick ? onClick : undefined} className={classes}>
      {children}
    </button>
  );
};

export { Tab };
