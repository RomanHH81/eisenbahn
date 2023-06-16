import { ReactNode } from "react";
// import { SectionBackground } from "@components/*";
import { SectionBackground } from "@components/*";
import classNames from "classnames";

import styles from "./Card.module.scss";

interface CardProps {
  background?: SectionBackground;
  children: ReactNode;
}

export const Card = ({ background = "light", children }: CardProps) => {
  const classes = classNames({
    [styles.card]: true,
    [styles["card--light"]]: background === "light",
    [styles["card--dark"]]: background === "dark",
    [styles["card--brand"]]: background === "brand",
  });
  return <div className={classes}>{children}</div>;
};
