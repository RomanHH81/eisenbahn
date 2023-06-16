export interface Vehicle {
  type: string;
  name: string;
  technicalName: string;
  slug: string;
  monument: boolean;
  details?: TechnicalDetailsData[];
}

export interface TechnicalDetailsData {
  key: string;
  value: string;
}

const allVehicle: Vehicle[] = [
  {
    type: "Lok",
    name: "Karoline",
    technicalName:
      "Dampflokomotive / Steamengine Nr. 350 'Karoline' Dn2t (0-8-0)",
    slug: "karolinelok",
    monument: true,
    details: [],
  },
  {
    type: "Lok",
    name: "Dornröschen",
    technicalName:
      "Dampflokomotive / Steamengine No.1 'Dornröschen' Cn2t (0-6-0)",
    slug: "dornröschenlok",
    monument: true,
    details: [
      {
        key: "Achsanordnung",
        value: "C / 0-6-0",
      },
      {
        key: "Dampfdruck",
        value: "13 atü",
      },
      {
        key: "Dienstgewicht",
        value: "42 t",
      },
      {
        key: "Höchstgeschwindigkeit",
        value: "45 km/h",
      },
      {
        key: "Kohlevorrat",
        value: "0,8 t",
      },
      {
        key: "Leergewicht",
        value: "33 t",
      },
      {
        key: "Leistung",
        value: "400 PS",
      },
      {
        key: "LüP",
        value: "9200 mm",
      },
      {
        key: "Wasservorrat",
        value: "ca. 4 m3",
      },
    ],
  },
];

export default allVehicle;
