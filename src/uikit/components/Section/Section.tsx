import { ElementType, FC, ReactNode } from "react";
import classNames from "classnames";

import styles from "./Section.module.scss";

interface SectionProps {
  children: ReactNode;
  size?: "sm" | "lg";
  background?: SectionBackground;
  as?: ElementType;
}

export type SectionBackground =
  | "light"
  | "transparent"
  | "brand"
  | "dark"
  | "lowerdark";

export const Section: FC<SectionProps> = ({
  children,
  size = "lg",
  background = "light",
  as: Component = "section",
}) => {
  const classes = classNames({
    [styles.section]: true,
    [styles["section--sm"]]: size === "sm",
    [styles["section--light"]]: background === "light",
    [styles["section--dark"]]: background === "dark",
    [styles["section--brand"]]: background === "brand",
    [styles["section--lowerdark"]]: background === "lowerdark",
  });
  return <Component className={classes}>{children}</Component>;
};
