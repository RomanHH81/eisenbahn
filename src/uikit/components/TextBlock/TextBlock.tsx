import { TextBlockData } from "@/app/ueber-uns/unsere-strecke/data";
import styles from "./TextBlock.module.scss";
import { Section } from "../Section/Section";
import Picture from "../Picture/Picture";

interface TextBlockProps {
  data: TextBlockData;
}

const TextBlock = ({ data }: TextBlockProps) => {
  return (
    <div className={styles.textBlock}>
      <Section>
        <Picture data={data.image} />
        <p className={styles.textBlock__text}>{data.text}</p>
      </Section>
    </div>
  );
};

export default TextBlock;
