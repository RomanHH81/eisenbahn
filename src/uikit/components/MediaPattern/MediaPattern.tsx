import Image from "next/image";
import { ReactNode } from "react";
import styles from "./MediaPattern.module.scss";
import classNames from "classnames";

export interface MediaPatternInterface {
  headline?: string;
  children: ReactNode;
  imagePath: string;
  imageCaption: string;
  imageDescription: string;
  imagePosition?: "left";
}

const MediaPattern = ({
  headline,
  children,
  imagePath,
  imageCaption,
  imageDescription,
  imagePosition,
}: MediaPatternInterface) => {
  const classes = classNames({
    [styles.mediaPattern__container]: true,
    [styles["mediaPattern__container--reverse"]]: imagePosition === "left",
  });

  return (
    <div className={styles.mediaPattern}>
      <h1>{headline}</h1>
      <div className={`${styles.mediaPattern__container} ${[classes]}`}>
        <div className={styles.mediaPattern__text}>{children}</div>
        <figure>
          <Image
            src={imagePath}
            alt={imageDescription}
            width={150}
            height={150}
            className={styles.mediaPattern__image}
          />
          <figcaption className={styles.mediaPattern__description}>
            {imageCaption}
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default MediaPattern;
