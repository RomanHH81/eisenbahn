"use client";
/* eslint-disable react/jsx-key */
import { useState } from "react";
import { Heading, Tab } from "@components/Tab/Tab";
import { TimeTableData } from "@/app/fahrplaene/fahrplan/data";

import styles from "./TimeTable.module.scss";
import React from "react";

interface TimeTableProps {
  intro?: string;
  title: string;
  data: TimeTableData[];
}

export const TimeTable = ({ title, intro, data }: TimeTableProps) => {
  const [selectedItem, setSelectedItem] = useState<TimeTableData>(data[0]);
  return (
    <div>
      <div className={styles.timetable__title}>
        <Heading as={"h3"} size={"lg"}>
          {title}
        </Heading>
        <div className={styles.timetable__tabs}>
          {data.map((item) => {
            return (
              <Tab
                onClick={() => setSelectedItem(item)}
                active={item.label === selectedItem.label ? true : false}
              >
                {item.label}
              </Tab>
            );
          })}
        </div>
      </div>
      <p className={styles.timetable__intro}>{selectedItem.route}</p>
      <table className={styles.table}>
        <thead>
          <tr className={styles.table__row}>
            <th style={{ width: "200px" }}>Haltestelle</th>
            {selectedItem.journey.map((item, index) => (
              <th key={index}>Fahrt {index + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {selectedItem.journey.map((item, journeyIndex) => {
            return (
              <tr key={journeyIndex} className={styles.table__row}>
                {console.log(item)}
                {item.stops.map((stop, stopIndex)) => {
                  return (<td>{item.stops[journeyIndex].stop}</td>)
                }}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// {item.stops.map((innerItem, stopIndex) => (
//   <React.Fragment key={journeyIndex}>
//     {console.log(item)}
//     <td>1</td>
//     {/*         <td>{item.stops[journeyIndex].stops[stopIndex].stop}</td>
//     <td>{item[journeyIndex].stops[stopIndex].departure}</td> */}
//   </React.Fragment>
// ))}
