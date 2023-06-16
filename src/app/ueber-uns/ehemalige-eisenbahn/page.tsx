import { Heading } from "@/uikit/components/Heading/Heading";
import { Section } from "@/uikit/components/Section/Section";
import FirstLetterContent from "@/uikit/components/FirstLetter/FirstLetter";
import Image from "next/image";
import titlePic from "@/public/images/geesthachter_eisenbahn_head.gif";
import footerPic from "@/public/images/geesthachter_eisenbahn_foot.gif";

const page = () => {
  return (
    <div>
      <Section>
        <Heading as={"h3"} size={"md"}>
          Die Bergedorf Geesthachter Eisenbahn
        </Heading>
        <FirstLetterContent>
          <Image src={titlePic} width={750} height={200} alt="Titelbild" />
          <p>
            Zu Beginn des letzten Jahrhunderts war die Eisenbahn noch ein
            Abenteuer und die Eröffnung einer Kleinbahn zwischen Geesthacht und
            Bergedorf ein großes Risiko.
          </p>
          <p>
            Der Bau verschlang rund 1,6 Millionen Mark. Trotzdem konnte am
            19.Dezember 1906 der Bahnbetrieb beginnen, der innerhalb der
            nächsten zwölf Jahre schier explodierte.
          </p>
          <p>
            Die Chronik der Bergedorf Geesthachter Eisenbahn liest sich wie ein
            Spiegelbild der wirtschaftlichen Entwicklung Deutschlands in der
            ersten Hälfte des vergangenen Jahrhunderts. 1918 wurden täglich
            24.000 Personen und 1700 Gütertonnen befördert. Die Rezessionszeit
            nach dem ersten Weltkrieg bescherte der Bahn gewaltige Einbrüche.
            Vor und während des zweiten Weltkriegs steigerte sich die
            Transportleistung wieder in ungeahnte Höhen.
          </p>
          <p>
            Nach dem Krieg jedoch verlor die Bahn sehr schnell an Bedeutung,
            sodass 1953 der letzte reguläre Personenzug den Bahnhof Geesthacht
            verließ.
          </p>
          <Image src={footerPic} width={350} height={350} alt="Titelbild" />
        </FirstLetterContent>
      </Section>
    </div>
  );
};

export default page;
