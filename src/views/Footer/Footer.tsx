import Contact, { ContactData } from "@/uikit/components/Contact/Contact";
import { Section } from "@/uikit/components/Section/Section";
import UpdateDate from "@/uikit/components/UpdateDate/UpdateDate";
import React from "react";

import styles from "./Footer.module.scss";

const contactData: ContactData[] = [
  {
    name: "Arbeitsgemeinschaft Geesthachter Eisenbahn e.V",
    address: "Postfach 1341 21495 Geesthacht",
    mail: "info@geesthachter-eisenbahn.de",
    locals: [
      {
        local: "Geesthacht Bahnhof",
        reachable: "An den Betriebstagen (siehe Fahrplan)",
        phone: "04152 - 77 89 9",
      },
      {
        local: "Geesthacht Lokschuppen",
        reachable: "An den Arbeitstagen (Do. & Sa.)",
        phone: "04152 - 77 80 9",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div>
      <Section background="brand">
        <div className={styles.footerContainer}>
          <UpdateDate>01.06.2023</UpdateDate>
          <Contact data={contactData} />
        </div>
      </Section>
    </div>
  );
};

export default Footer;
