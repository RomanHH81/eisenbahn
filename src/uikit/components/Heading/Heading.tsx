import React, { ElementType, ReactNode } from "react";
import classNames from "classnames";

import styles from "./Heading.module.scss";

interface HeadingProps {
  size: "sm" | "md" | "lg" | "xl" | "xxl";
  as?: ElementType;
  children: ReactNode;
}

const Heading = ({ size, as: Component = "h1", children }: HeadingProps) => {
  const classes = classNames({
    [styles.heading]: true,
    [styles["heading--sm"]]: size === "sm",
    [styles["heading--md"]]: size === "md",
    [styles["heading--lg"]]: size === "lg",
    [styles["heading--xl"]]: size === "xl",
    [styles["heading--xxl"]]: size === "xxl",
  });
  return <Component className={classes}>{children}</Component>;
};

export { Heading };
