import Image, { StaticImageData } from "next/image";
import styles from "./Picture.module.scss";
import React from "react";
import { PictureData } from "@/app/ueber-uns/unsere-strecke/data";

interface PictureProps {
  data: PictureData[];
}

const Picture = ({ data }: PictureProps) => {
  return (
    <div className={styles.pictureContainer}>
      {data.map((item, index) => (
        <figure key={index}>
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            width={item.imageWidth}
            height={item.imageHeight}
            className={styles.pictureContainer__image}
          />
          <figcaption className={styles.pictureContainer__description}>
            {item.description}
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default Picture;
