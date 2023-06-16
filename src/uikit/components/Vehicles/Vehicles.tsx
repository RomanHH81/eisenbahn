/* eslint-disable react/jsx-key */
import { useState } from "react";
import styles from "./TimeTable.module.scss";
import { Heading } from "../Heading/Heading";
import { Tab } from "../Tab/Tab";

interface VehiclesProps {
  data: VehiclesData[];
}

export interface VehiclesData {
  name: string;
  type: string;
  slug: string;
  details: {
    key: string;
    value: string;
  }[];
}
export const Vehicles = ({ intro, title, data }: VehiclesProps) => {
  const [selectedItem, setSelectedItem] = useState<VehiclesData>(data[0]);

  return (
    <>
      <div className={styles.timetable__title}>
        <Heading as={"h3"} size={"lg"}>
          {title}
        </Heading>
        <div className={styles.timetable__tabs}>
          {data.map((item) => {
            return (
              <Tab
                onClick={() => setSelectedItem(item)}
                active={item.type === selectedItem.type ? true : false}
              >
                {item.type}
              </Tab>
            );
          })}
        </div>
      </div>
      <p className={styles.timetable__intro}>{intro}</p>
      <table className={styles.table}>
        <thead>
          <tr className={styles.table__row}>
            <th style={{ width: "200px" }}>Tag</th>
            <th>Hausaufgabenbetreuung</th>
            <th>Trainingsbeginn</th>
          </tr>
        </thead>
        <tbody>
          {selectedItem.dates.map((date) => {
            return (
              <>
                <tr className={styles.table__row}>
                  <td>{date.day}</td>
                  <td>
                    {date.support_start} - {date.support_end}
                  </td>
                  <td>
                    {date.training_start} - {date.training_end}
                  </td>
                </tr>
                <tr className={styles.table__row}>
                  <td>{date.day}</td>
                  <td>
                    {date.support_start} - {date.support_end}
                  </td>
                  <td>
                    {date.training_start} - {date.training_end}
                  </td>
                </tr>
                <tr className={styles.table__row}>
                  <td>{date.day}</td>
                  <td>
                    {date.support_start} - {date.support_end}
                  </td>
                  <td>
                    {date.training_start} - {date.training_end}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
