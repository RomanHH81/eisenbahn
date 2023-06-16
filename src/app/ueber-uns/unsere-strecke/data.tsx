import { ReactNode } from "react";

import bergedorf_sued from "@/public/images/bahnhof_bergedorf.jpg";
import bahnhof_boernsen from "@/public/images/bahnhof_boernsen.jpg";
import bahnhof_escheburg from "@/public/images/bahnhof_escheburg.jpg";
import bahnhof_escheburg_häuschen from "@/public/images/aufenthaltshaeuschen_escheburg.jpg";
import bahnhof_besenhorst from "@/public/images/bahnhof_besenhorst.jpg";
import bahnhof_duenenberg from "@/public/images/bahnhof_duenenberg.jpg";
import wasserturm_geesthacht from "@/public/images/wasserturm_geesthacht.jpg";
import bahnhof_geesthacht from "@/public/images/bahnhof_geesthacht.jpg";

import { StaticImageData } from "next/image";

export interface TextBlockData {
  text: ReactNode;
  image: PictureData[];
}

export interface PictureData {
  imageSrc: StaticImageData;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  description: string;
}

const textBlockData: TextBlockData[] = [
  {
    image: [
      {
        imageSrc: bergedorf_sued,
        imageAlt: "Bahnhof Bergedorf-Süd",
        imageWidth: 150,
        imageHeight: 150,
        description: "Bahnhof Bergedorf-Süd",
      },
    ],
    text: (
      <>
        <p>
          Ausgangspunkt der Fahrt ist der Bahnhof Bergedorf Süd. Dieser ist
          heute mustergültig restauriert und dient Künstlern als Wohn- und
          Arbeitssitz. Die Gleisanlagen sind im Winter 1990/1991 den
          Erfordernissen entsprechend vereinfacht worden. Die Personenzüge nach
          Geesthacht und Krümmel enden und beginnen am Hausbahnsteig. Die
          Lokomotive läuft dann um, setzt sich wieder an den Zug, und nach der
          Bremsprobe und dem Pfiff des Aufsichtsbeamten kann die Fahrt beginnen.
        </p>
        <p>
          Die Strecke folgt in östlicher Richtung dem Verlauf des Geesthanges.
          Nach der Ausfahrt aus dem Bahnhof fährt der Zug durch ein
          Kleingartengebiet. Hier zweigte die Vierländer Eisenbahn nach
          Zollenspieker von der Stammstrecke ab. Diese Bahn wurde 1953 für den
          Personenverkehr und 1961 für den Gesamtverkehr stillgelegt. Bis zum
          Bau der Autobahn im Jahre 1978 wurde bis zum Bahnhof Pollhof noch ein
          bescheidener Güterverkehr durchgeführt.
        </p>
        <p>
          Nun begleiten uns auf der linken Seite der Strecke städtische
          Wohnblocks, auf der rechten Seite sind in letzter Zeit viele
          Einfamilienhäuser entstanden. Zwischen Gleis und Straße fließt die
          Brookwetterung. Nach Überqueren der Straße Brookdeich wird die
          Brookwetterung auf einer sehr einfachen Brücke überquert. Bald
          erreichen wir den Haltepunkt Holtenklinke. Der Bahnsteig befindet sich
          heute auf der in Fahrtrichtung linken Seite.
        </p>
        <p>
          Das ehemalige Empfangsgebäude, gelegen in der Ecke zwischen Bahnsteig
          und Straße, wird heute von einem technischen Betrieb genutzt. Oberhalb
          dieses Haltepunktes liegt auf dem Gojenberg die Hamburger Sternwarte.
          Über eine lange Treppe erreicht der Interessierte diese Anlagen. Nach
          dem Haltepunkt Holtenklinke fährt der Zug durch Wiesen. Die
          Brookwetterung begleitet ihn noch ein Stück auf der rechten Seite.
          Rechts verläuft hinter einem Lärmschutzwall die Marschenautobahn, und
          auf der linken Seite verläuft die Bundesstraße 5. Die Landesgrenze
          zwischen Hamburg und Schleswig-Holstein wird nach dem Überqueren
          Speckenweges passiert."
        </p>
      </>
    ),
  },
  {
    image: [
      {
        imageSrc: bahnhof_boernsen,
        imageAlt: "Bahnhof Börnsen",
        imageWidth: 150,
        imageHeight: 150,
        description: "Bahnhof Börnsen",
      },
    ],
    text: (
      <>
        <p>
          Hinter einer leichten Krümmung taucht nun der Bahnhof Börnsen auf. Der
          Zug hält am in Fahrtrichtung rechts gelegenen Bahnsteig. Das links der
          Strecke gelegene, gut erhaltene Bahnhofsgebäude beherbergt heute, wie
          schon vor dem letzten Krieg, eine Gastwirtschaft. Früher hatten die
          Bewohner des alten Dorfes Börnsen einen guten Kilometer zum Bahnhof zu
          gehen. Der überwiegende Teil der in der Nähe des Bahnhofes gelegenen
          Bebauung entstand erst nach 1945.
        </p>
        <p>
          Etwa einen Kilometer vom Bahnhof in östlicher Richtung gelegen zieht
          sich die Dalbekschlucht weit in den Geesthang hinein. Die Schlucht ist
          seit langer Zeit ein schönes Wandergebiet. Hierfür legte die BGE
          zwischen den Kriegen einen eigenen Bahnsteig in Höhe der Straße Dröge
          Wisch an. Die alte Bahnsteigkante ist heute noch gut zu erkennen.
        </p>
      </>
    ),
  },
  {
    image: [
      {
        imageSrc: bahnhof_escheburg,
        imageAlt: "Bahnhof Escheburg",
        imageWidth: 150,
        imageHeight: 150,
        description: "Bahnhof Escheburg",
      },
      {
        imageSrc: bahnhof_escheburg_häuschen,
        imageAlt: "Aufenthaltshäuschen Escheburg",
        imageWidth: 150,
        imageHeight: 150,
        description: "Aufenthaltshäuschen Escheburg",
      },
    ],
    text: (
      <>
        <p>
          Bis Escheburg begleiten den Zug auf der rechten Seite Wiesen, die
          Bebauung links der Strecke ist fast geschlossen. Der Bahnhof Escheburg
          liegt am Rande des sich den Geesthang hinaufziehenden Dorfes. Der
          Personenzug hält unmittelbar vor dem Empfangsgebäude an einem
          1990/1991 neu errichteten Bahnsteig mit Betonkante.
        </p>
        <p>
          Dieser Bahnsteig, wie auch das Empfangsgebäude, befinden sich in
          Fahrtrichtung links. Das Bahnhofsgebäude beherbergt heute wie früher
          eine Gaststätte. Auf dem Bahnsteig steht das letzte überhaupt noch
          vorhandene Aufenthaltshäuschen für den Fahrdienstleiter. Es dient
          heute natürlich nicht mehr diesem Zweck.
          <p>
            Escheburg verlassend, eröffnet sich links das Bistal. In diesem
            Wandergebiet findet der Höhenwanderweg nach Geesthacht seinen
            Anfang. Rechts nähert sich nun die hier endende Marschenautobahn der
            Eisenbahnlinie. Die Verbindung dieser Autobahn und der B404 mit der
            B5 wird auf einer Betonbrücke über die Bahnlinie geführt.
          </p>
          <p>
            In dem rechts der Bahn liegenden Moorgebiet wurde bis nach dem
            letzten Krieg Torf abgebaut und per Bahn abgefahren. Daran erinnern
            noch die vielen rechteckigen Teiche. Links der Bundesstraße wurde
            Kies abgebaut. Die Abbruchkante der alten Kiesgrube zeigt deutlich
            die Erdschichtung der Eiszeit.
          </p>
        </p>
      </>
    ),
  },
  {
    image: [
      {
        imageSrc: bahnhof_besenhorst,
        imageAlt: "Bahnhof Besenhorst",
        imageWidth: 150,
        imageHeight: 150,
        description: "Bahnhof Besenhorst",
      },
    ],
    text: (
      <>
        <p>
          Nun erreichen wir das Stadtgebiet Geesthacht. Die links beginnende
          Bebauung gehört zum alten Dorf Besenhorst. Eines der Gehöfte ist für
          seine Traberpferdezucht bekannt. Der ehemalige Bahnhof Besenhorst wird
          heute nicht mehr bedient. In dem früher viergleisigen Bahnhof zweigte
          nach rechts eine Stichstrecke zur Düneberger Pulverfabrik ab. Der
          Verlauf des Bahndammes ist noch gut auszumachen. In Besenhorst lassen
          nur noch die breite Gleistrasse und ein zum Wohnhaus umgebautes
          Stellwerk links des heutigen Streckengleises die Bedeutung dieses
          Bahnhofes erahnen.
        </p>
      </>
    ),
  },
  {
    image: [
      {
        imageSrc: bahnhof_duenenberg,
        imageAlt: "Bahnhof Duenenberg",
        imageWidth: 150,
        imageHeight: 150,
        description: "Bahnhof Duenenberg",
      },
    ],
    text: (
      <>
        <p>
          Nun beginnt der Ortsteil Düneberg. Links der Strecke reichen
          Einfamilien- und Hochhäuser bis unmittelbar an den Gleiskörper heran.
          Rechterhand ist mit etwas Mühe die Trasse der ehemals im Bf Düneberg
          abzweigenden Hamburger Marschbahn in Richtung Zollenspieker zu
          erkennen. Der nun folgende Bahnhof Düneberg wird von den Museumszügen
          heute ohne Halt durchfahren. Düneberg hatte in den beiden Weltkriegen
          ein gewaltiges Verkehrsaufkommen. Hier hielten die Arbeiterzüge für
          die Beschäftigten der Pulverfabrik.
        </p>
        <p>
          Das hiesige, rechts vom Gleis liegende Empfangsgebäude dient heute als
          Gastwirtschaft. In Fahrtrichtung Geesthacht befand sich links vom
          jetzigen Streckengleis ein weiteres Gleis mit einem Seitenbahnsteig.
          Die Bahnsteigkante ist noch zu erkennen. Nun überquert der Zug zwei
          durch Ampeln gesicherte Straßen und durchfährt eine Linkskurve. Rechts
          zweigt ein Industrieanschluß ab.
        </p>
      </>
    ),
  },
  {
    image: [
      {
        imageSrc: wasserturm_geesthacht,
        imageAlt: "Wasserturm Geesthacht",
        imageWidth: 150,
        imageHeight: 150,
        description: "Wasserturm Geesthacht",
      },
    ],
    text: (
      <>
        <p>
          Jetzt ist der Bahnhof Geesthacht erreicht. Das weite Bahnhofsgelände
          liegt fast brach, nur die Ausmaße erinnern noch an die frühere
          Bedeutung. Der linkerhand gelegene Wasserturm wurde von seinem neuen
          Besitzer als Wohnhaus hergerichtet. Das lange Zeit als Wohnung
          dienende Stellwerk wurde 1981 abgerissen.
        </p>
        <p>
          Bevor der Zug nun den in Fahrtrichtung links liegenden Hausbahnsteig
          mit dem heute als Jugendzentrum dienenden, sehr schön restaurierten
          Empfangsgebäude anfährt, passiert er die Ladestraße. Güterwagen werden
          hier nur selten beladen. Bis zum Mai 1994 diente die Ladestraße zum
          Abstellen der Busse der Verkehrsbetriebe Hamburg-Holstein AG, welche
          seit 1953 den Personenverkehr der BGE übernahmen.
        </p>
      </>
    ),
  },
  {
    image: [
      {
        imageSrc: bahnhof_geesthacht,
        imageAlt: "Bahnhof Geesthacht",
        imageWidth: 150,
        imageHeight: 150,
        description: "Bahnhof Geesthacht",
      },
    ],
    text: (
      <>
        <p>
          Verlässt der Fahrgast in Geesthacht den Museumszug, so kann er sich in
          der mustergültig restaurierten Fahrkartenausgabe im Empfangsgebäude
          die Fahrkarte für die Rückfahrt nach Bergedorf oder für die
          Weiterreise nach Krümmel kaufen. Gegenüber dem Geesthachter Bahnhof
          befindet sich ein Lokschuppen, welcher der GE als Werkstatt dient. In
          Aufarbeitung befindliche Fahrzeuge werden hier gezeigt, und den
          Vereinsmitgliedern kann bei der Restaurierung über die Schulter
          geschaut werden. Das Kasino steht für eine kleine Stärkung zur
          Verfügung.
        </p>
        <p>
          Die Beschreibung des Bahnhofes Geesthacht wäre unvollständig, wiese
          man nicht auf weitere Gleise im Geesthacher Bahnhofsbereich hin. Ein
          Anschlussgleis führte in einem Rechtsbogen zum Geesthachter Elbhafen.
          Ein zweites Anschlussgleis ist die sogenannte <b>Krümmelbahn</b>,
          welche von den Zügen der GE befahren wird.
        </p>
      </>
    ),
  },
];

export default textBlockData;
