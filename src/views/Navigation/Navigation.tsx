import Link from "next/link";
import styles from "./Navigation.module.scss";
import Logo from "@/public/images/logo.gif";
import Image from "next/image";
import { Section } from "@/uikit/components/Section/Section";

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
    <div className={styles.menu}>
      <Section background={"brand"}>
        <nav>
          <ul className={styles.menu__list}>
            <Image src={Logo} alt="logo" height={100} width={100} />
            {data.map((item, index) => (
              <li key={index} className={styles.menu__list__item}>
                <Link href={item.href} className={styles.menu__list__link}>
                  {item.label}
                </Link>
                {item.childs.length > 0 && (
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
                )}
              </li>
            ))}
          </ul>
        </nav>
      </Section>
    </div>
  );
};

export { Navigation };
