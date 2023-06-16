import { ReactNode } from "react";

import styles from "./FirstLetter.module.scss";

interface FirstLetterProps {
  children: ReactNode;
}

const FirstLetter = ({ children }: FirstLetterProps) => {
  return <div className={styles.content}>{children}</div>;
};

export default FirstLetter;
