import { Heading } from "@/uikit/components/Heading/Heading";
import { Section } from "@/uikit/components/Section/Section";
import Link from "next/link";

// import liste from "../../../public/liste.pdf";
// import liste from "./puplic/buecherliste_20230412.pdf";

import styles from "./page.module.scss";

const page = () => {
  return (
    <div>
      <Section>
        <Heading as={"h3"} size={"md"}>
          Nachlässe
        </Heading>
        <p>
          Aus Nachlässen verkaufen wir Eisenbahnliteratur (nur{" "}
          <strong>Einzelstücke</strong>)
        </p>
        <p>
          Eine Liste, die zeitnah aktualisiert wird, kann hier als PDF-Datei
          <Link href="../../../public/liste.pdf"> heruntergeladen</Link> werden
        </p>
        <p>bestellt werden kann</p>
        <ul>
          <li>
            <Link href="mailto:buchversand@geesthachter-eisenbahn.de">
              per Mail
            </Link>
          </li>
          <li>
            oder per{" "}
            <dfn className={styles.tooltip}>
              Post
              <span role="tooltip">
                Arbeitsgemeinschaft Geesthachter Eisenbahn e.V. Postfach 1341
                21495 Geesthacht
              </span>
            </dfn>
          </li>
        </ul>
      </Section>
    </div>
  );
};

export default page;
