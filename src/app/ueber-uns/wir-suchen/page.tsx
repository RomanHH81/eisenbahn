import { Section } from "@/uikit/components/Section/Section";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <Section>
      <p>Wir freuen uns über Spenden :</p>
      <p>
        Arbeitsgemeinschaft Geesthachter Eisenbahn e.V. Hamburger Volksbank eG
        BIC : GENODEF1HH2 IBAN : DE45 2019 0003 0010 0185 14
      </p>
      <p>Wir stellen ein :</p>
      <p>fördende Mitglieder (Mitgliedsbeitrag 60.-Euro/Jahr)</p>
      <p>
        Sie sollten Interesse am Bestand der Museumsbahn haben und bereit sein,
        mindestens den Mitgliedsbeitrag pro Jahr für ihren Erhalt auszugeben.
      </p>
      <p> aktive Mitglieder</p>
      <p>
        Sie sollten verrückt genug sein, mindestens einen Teil Ihrer Freizeit
        für den Betrieb und/oder die Erhaltung der Museumsbahn zu opfern.
        Handwerkliches Geschick oder ähnliche Begabungen wären von Vorteil. Wir
        bieten: Für unsere aktiven Mitglieder garantieren wir körperliche
        Arbeit, sowie schmutzige Hände und schmutzige Arbeitsklamotten für die
        nächsten 10 Jahre. An den Fahrtwochenenden besteht zusätzlich die
        Möglichkeit, überschüssige Freizeit als Zugbegleiter, Getränkeverkäufer
        oder beim Fahrrad- und Kinderwagenverladen sinnvoll zu nutzen. Ab und zu
        haben wir auch gemeinsam etwas Spaß.{" "}
      </p>
      <p>
        Sollten wir Ihr Interesse geweckt haben, hier unsere Anschrift:
        Arbeitsgemeinschaft Geesthachter Eisenbahn e.V. Postfach 1341 21495
        Geesthacht
      </p>
      <p>
        oder samstags im Lokschuppen in der Dünenstraße in Geesthacht gegenüber
        vom alten Bahnhof vorbeischauen.
      </p>
      <p>
        <Link href="/antrag.pdf">Antrag auf Mitgliedschaft</Link>
        <span>Bitte ausfüllen und per Post an obige Adresse senden.</span>
      </p>
    </Section>
  );
};

export default page;
