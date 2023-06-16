import { Section } from "@/uikit/components/Section/Section";
import { Heading } from "@/uikit/components/Heading/Heading";
import Picture, { PictureData } from "@/uikit/components/Picture/Picture";

import bergedorf_bild from "@/public/images/bergedorf_sued.png";
import geesthacht from "@/public/images/geesthacht.png";

const pictureData: PictureData[] = [
  {
    imageSrc: bergedorf_bild,
    imageAlt: "Bergedorf-Süd",
    imageWidth: 250,
    imageHeight: 250,
    description: [
      {
        localName: "In Hamburg-Bergedorf im",
        localAdress: "Neuer Weg 39 21029 Hamburg",
      },
    ],
  },
  {
    imageSrc: geesthacht,
    imageAlt: "Geesthacht",
    imageWidth: 250,
    imageHeight: 250,
    description: [
      {
        localName: "In Geesthacht in der",
        localAdress: "Bahnstr. 45 21502 Geesthacht",
      },
    ],
  },
];

const page = () => {
  return (
    <div>
      <Section background="light">
        <Heading as={"h2"} size={"lg"}>
          So finden Sie uns:
        </Heading>
        <Picture data={pictureData} />
      </Section>
    </div>
  );
};

export default page;
