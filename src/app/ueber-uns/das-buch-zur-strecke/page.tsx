import { Section } from "@/uikit/components/Section/Section";
import bookPic from "@/public/images/100JahreBGE.jpg";
import Image from "next/image";
import { Heading } from "@/uikit/components/Heading/Heading";

import styles from "./page.module.scss";

const page = () => {
  return (
    <Section>
      <div className={styles.Container}>
        <Heading as={"h2"} size={"md"}>
          100 Jahre Eisenbahn zwischen Bergedorf und Geesthacht - Von der BGE
          zur AKN-Güterbahn -
        </Heading>
        <figure className={styles.container__image}>
          <Image
            src={bookPic}
            alt="100 Jahre BGE Buch"
            height={250}
            width={250}
          />

          <figcaption>
            <strong>
              {" "}
              Exclusiv bei uns das Buch über unsere Strecke und die ehemalige
              Bergedorf-Geesthachter Eisenbahn von Stefan Meyer:
            </strong>
          </figcaption>
        </figure>
      </div>{" "}
      <p>
        Die Entwicklung der Bergedorf-Geesthachter Eisenbahn (BGE) wurde durch
        die Geschichte Deutschlands wie kaum eine andere Bahn beeinflusst. Nach
        erfolgreicher Aufbauphase bis zum Ersten Weltkrieg kam ein Absturz, dem
        ein Aufschwung im Zweite1BGE-Stammstrecke, Vierländer Bahn, Hamburger
        Marschbahn, Krümmelbahn und Billwerder Industriebahn mit vielen Details:
        Fahrzeuge, Gleispläne, historische und aktuelle Fotos. Das alles im
        Format DIN A 4 (gebunden) auf 160 Seiten mit 147 Fotos und zahlreichen
        Zeichnungen für nur Euro 19,80€.
      </p>
    </Section>
  );
};

export default page;

<p>
  Das Buch kann - an den Betriebstagen direkt im Geesthachter Bahnhof erworben
  werden oder - per E-Mail bei Ulf Heitmann - oder per Post bei
  Arbeitsgemeinschaft Geesthachter Eisenbahn e.V. Postfach 1341 21495 Geesthacht
  bestellt werden (+ Versandkosten Euro 2,50)
</p>;
