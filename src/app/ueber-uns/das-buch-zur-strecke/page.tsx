import Image from "next/image";
import bookPic from "@/public/100JahreBGE.jpg";

const page = () => {
  return (
    <div>
      <figure>
        <figcaption>
          Exclusiv bei uns das Buch über unsere Strecke und die ehemalige
          Bergedorf-Geesthachter Eisenbahn von Stefan Meyer:
        </figcaption>
        <p>
          Das Buch kann - an den Betriebstagen direkt im Geesthachter Bahnhof
          erworben werden oder - per E-Mail bei Ulf Heitmann - oder per Post bei
          Arbeitsgemeinschaft Geesthachter Eisenbahn e.V. Postfach 1341 21495
          Geesthacht bestellt werden (+ Versandkosten Euro 2,50)
        </p>
        <Image src={bookPic} alt="100 Jahre BGE Buch" />
      </figure>
      <p>
        Die Entwicklung der Bergedorf-Geesthachter Eisenbahn (BGE) wurde durch
        die Geschichte Deutschlands wie kaum eine andere Bahn beeinflusst. Nach
        erfolgreicher Aufbauphase bis zum Ersten Weltkrieg kam ein Absturz, dem
        ein Aufschwung im Zweiten Weltkrieg und danach der tiefe Fall folgten.
        Bau und Geschichte der BGE-Stammstrecke, Vierländer Bahn, Hamburger
        Marschbahn, Krümmelbahn und Billwerder Industriebahn mit vielen Details:
        Fahrzeuge, Gleispläne, historische und aktuelle Fotos. Das alles im
        Format DIN A 4 (gebunden) auf 160 Seiten mit 147 Fotos und zahlreichen
        Zeichnungen für nur Euro 19,80€.
      </p>
    </div>
  );
};

export default page;
