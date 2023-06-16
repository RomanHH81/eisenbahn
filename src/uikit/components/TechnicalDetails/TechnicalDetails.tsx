import styles from "./TechnicalDetails.module.scss";
import TechnicalDetailsData from "../../../app/ueber-uns/unsere-fahrzeuge/data";
import React from "react";

interface TechnicalDetailsProps {
  data: TechnicalDetailsData[];
}

const TechnicalDetails = ({ data }: TechnicalDetailsProps) => {
  return (
    <table className={styles.table}>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className={styles.table__row}>
            {item.details.map(
              (
                detailsItem: string | boolean | number,
                detailsIndex: number
              ) => (
                <React.Fragment key={detailsIndex}>
                  <th className={styles.table__start}>{detailsItem.key}</th>
                  <td className={styles.table__start}>{detailsItem.value}</td>
                </React.Fragment>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TechnicalDetails;
