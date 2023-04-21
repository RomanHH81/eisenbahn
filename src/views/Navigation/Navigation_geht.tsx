// "use client";

import Link from "next/link";
import styles from "./Navigation.module.scss";

interface NavInterface {
  data: NavItemProps[];
}

export interface NavItemProps {
  label: string;
  href: string;
  childs: { label: string; href: string }[];
}

const Navigation = ({ data }: NavInterface) => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        {data.map((item, index) => (
          <li key={index} className={styles.menu__list__item}>
            <Link href={item.href} className={styles.menu__list__link}>
              {item.label}
            </Link>
            {item.childs.length > 0 && (
              <div className={styles.menu__}>
                <ul
                  className={`${styles.menu__list} ${styles["menu__list--child"]}`}
                >
                  {item.childs.map((childsItem, childsIndex) => (
                    <li
                      key={childsIndex}
                      className={`${styles.menu__list__item} ${styles["menu__list__item--child"]}`}
                    >
                      <Link
                        href={childsItem.href}
                        className={`${styles.menu__list__link} ${styles["menu__link--child"]}`}
                      >
                        {childsItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Navigation };
