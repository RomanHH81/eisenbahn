import Links, { LinkData } from "@/uikit/components/Link/Link";

const linkData: LinkData[] = [
  {
    title: "Kohlebefeuert auf dem Wasser",
    labels: [
      {
        label: "kohlebefeuerten Raddampfer",
        href: "https://raddampfer-kaiser-wilhelm.de/",
      },
      {
        label: "kohlebefeuerten Eisbrecher",
        href: "http://www.dampfeisbrecher.de/",
      },
    ],
  },
  {
    title: "Links zu befreundeten Vereinen",
    labels: [
      {
        label: "Angelner Dampfeisenbahn",
        href: "http://www.angelner-dampfeisenbahn.de/",
      },
      {
        label: "Arbeitsgemeinschaft Verkehrsfreunde Lüneburg e.V.",
        href: "https://www.heide-express.de/",
      },
      {
        label: "Freunde der Eisenbahn e.V. Hamburg (FdE)",
        href: "https://www.fde-hamburg.de/",
      },
      {
        label: "Hamburger Omnibus Verein e.V.",
        href: "http://www.hov-bus.de/",
      },
      {
        label: "Historische S-Bahn Hamburg e.V.",
        href: "https://historische-s-bahn.hamburg/",
      },
      {
        label: "Rendsburger Eisenbahnfreunde e.V.",
        href: "https://www.bw-nms.de/",
      },
      {
        label: "VVM",
        href: "https://www.vvm-museumsbahn.de/",
      },
      {
        label: "Förderverein Südstormarnsche Kreisbahn e.V. (Heiko Meusch)",
        href: "https://www.suedstormarnsche-kreisbahn.de/",
      },
    ],
  },
  {
    title: "weitere Eisenbahn-Links",
    labels: [
      {
        label: "Bahnen und Busse",
        href: "https://www.bahnen-und-busse.de/",
      },
      {
        label: "Zug.de",
        href: "https://www.zug.de",
      },
    ],
  },
  {
    title: "Eisenbahn-Zeitschriften",
    labels: [
      {
        label: "Bahnreport",
        href: "http://www.bahn-report.de/",
      },
      {
        label: "DREHSCHEIBE",
        href: "https://www.drehscheibe-online.de/startindex2.php",
      },
      {
        label: "EisenbahnNews",
        href: "https://www.bahninfo.de/",
      },
      {
        label: "LOK Report",
        href: "https://www.lok-report.de/",
      },
    ],
  },
  {
    title: "Verbände",
    labels: [
      {
        label: "Bundesverband deutscher Eisenbahnfreunde e.V. (BDEF)",
        href: "https://www.bdef.de/",
      },
      {
        label: "Verband deutscher Museums- und Touristikbahnen (VDMT)",
        href: "https://www.vdmt.de/",
      },
    ],
  },
  {
    title: "Interessantes zur Technik",
    labels: [
      {
        label: "Druckluftbremsen",
        href: "http://www.bremsenbude.de/",
      },
    ],
  },
];

const page = () => {
  return (
    <div>
      <Links data={linkData} />
    </div>
  );
};

export default page;
