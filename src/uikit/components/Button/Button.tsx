import { ReactNode } from "react";
import styles from "./Button.module.scss";
import Link from "next/link";

interface ButtonInterface {
  children: ReactNode;
  href?: string;
}

const Button = ({ children, href }: ButtonInterface) => {
  if (href) {
    return (
      <Link href={href} className={styles.button}>
        {children}
      </Link>
    );
  }
  {
    return <button className={styles.button}>{children}</button>;
  }
};

export { Button };
