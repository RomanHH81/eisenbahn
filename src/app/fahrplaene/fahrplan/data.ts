export interface TimeTableData {
  label: string;
  date: Date;
  route: string;
  journey: {
    stops: {
      stop: string;
      departure?: string;
      time?: Date;
    }[];
  }[];
}

const timeTableData: TimeTableData[] = [
  {
    label: "18.02.2023",
    date: new Date("2023-02-18"),
    route: "Krümmel -> Bergedorf",
    journey: [
      // Fahrt 1
      {
        stops: [
          {
            stop: "Krümmel",
            departure: "",
          },
          {
            stop: "Freibad",
            departure: "",
          },
          {
            stop: "Geesthacht",
            departure: "10:30",
            time: new Date("2023-02-18T10:30:00"),
          },
          {
            stop: "Escheburg",
            departure: "10:45",
            time: new Date("2023-02-18T10:45:00"),
          },
          {
            stop: "Börnsen",
            departure: "10:51",
            time: new Date("2023-02-18T10:51:00"),
          },
          {
            stop: "Bergedorf Süd",
            departure: "11:05",
            time: new Date("2023-02-18T11:05:00"),
          },
        ],
      },
      // Fahrt 2
      {
        stops: [
          {
            stop: "Krümmel",
            departure: "",
          },
          {
            stop: "Freibad",
            departure: "",
          },
          {
            stop: "Geesthacht",
            departure: "10:30",
            time: new Date("2023-02-18T10:30:00"),
          },
          {
            stop: "Escheburg",
            departure: "10:45",
            time: new Date("2023-02-18T10:45:00"),
          },
          {
            stop: "Börnsen",
            departure: "10:51",
            time: new Date("2023-02-18T10:51:00"),
          },
          {
            stop: "Bergedorf Süd",
            departure: "11:05",
            time: new Date("2023-02-18T11:05:00"),
          },
        ],
      },
    ],
  },
];

export default timeTableData;
