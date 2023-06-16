import { Heading } from "../Heading/Heading";
import { Section } from "../Section/Section";
import Link from "next/link";

import styles from "./Link.module.scss";

interface LinkProps {
  data: LinkData[];
}

export interface LinkData {
  title: string;
  labels: {
    label: string;
    href: string;
  }[];
}

const Links = ({ data }: LinkProps) => {
  return (
    <div>
      <Section>
        {data.map((item, index) => (
          <ul key={index}>
            <Heading as="strong" size="md">
              {item.title}
            </Heading>
            {item.labels.map((labelItem, labelIndex) => (
              <li key={labelIndex} className={styles.links__list__item}>
                <Link
                  href={labelItem.href}
                  className={styles.links__list__link}
                >
                  {labelItem.label}
                </Link>
              </li>
            ))}
          </ul>
        ))}
        <p>
          Für die Inhalte der hier aufgeführten Links sind die jeweiligen
          Autoren bzw. Webmaster verantwortlich.
        </p>
      </Section>
    </div>
  );
};

export default Links;
