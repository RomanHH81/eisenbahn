export interface TableData {
  start: string;
  labels: {
    label: string;
    price: string;
  }[];
}

const faresData: TableData[] = [
  {
    start: "Bergedorf-Süd",
    labels: [
      {
        label: "Bergedorf-Süd",
        price: "-",
      },
      {
        label: "Börnsen / Escheburg",
        price: "3,00€",
      },
      {
        label: "Geesthacht",
        price: "5,00€",
      },
      {
        label: "Krümmel",
        price: "7,00€",
      },
    ],
  },
  {
    start: "Börnsen / Escheburg",
    labels: [
      {
        label: "Bergedorf-Süd",
        price: "3,00€",
      },
      {
        label: "Börnsen / Escheburg",
        price: "-",
      },
      {
        label: "Geesthacht",
        price: "3,00€",
      },
      {
        label: "Krümmel",
        price: "5,00€",
      },
    ],
  },
  {
    start: "Geesthacht",
    labels: [
      {
        label: "Bergedorf-Süd",
        price: "5,00€",
      },
      {
        label: "Börnsen / Escheburg",
        price: "3,00€",
      },
      {
        label: "Geesthacht",
        price: "-",
      },
      {
        label: "Krümmel",
        price: "3,00€",
      },
    ],
  },
  {
    start: "Krümmel",
    labels: [
      {
        label: "Bergedorf-Süd",
        price: "7,00€",
      },
      {
        label: "Börnsen / Escheburg",
        price: "5,00€",
      },
      {
        label: "Geesthacht",
        price: "3,00€",
      },
      {
        label: "Krümmel",
        price: "-",
      },
    ],
  },
];

export default faresData;
