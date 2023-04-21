import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { Button } from "@/uikit/components/Button/Button";
import { Navigation } from "@/views/Navigation/Navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <main className={styles.main}></main>;
}
