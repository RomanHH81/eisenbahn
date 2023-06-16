import { ReactNode } from "react";
import styles from "./MediaPattern.module.scss";
import classNames from "classnames";

export interface MediaPatternInterface {
  children?: ReactNode;
  image?: ReactNode;
  imageCaption?: string;
  imagePosition?: "left";
}
2;
const MediaPattern = ({
  children,
  image,
  imageCaption,
  imagePosition,
}: MediaPatternInterface) => {
  const classes = classNames({
    [styles.mediaPattern__container]: true,
    [styles["mediaPattern__container--reverse"]]: imagePosition === "left",
  });

  return (
    <div className={styles.mediaPattern}>
      <div className={`${styles.mediaPattern__container} ${[classes]}`}>
        <div className={styles.mediaPattern__text}>{children}</div>
        <figure>
          {image}
          <figcaption className={styles.mediaPattern__description}>
            {imageCaption}
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default MediaPattern;
