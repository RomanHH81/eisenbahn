import { ReactNode } from "react";
import { TableData } from "@/app/fahrplaene/fahrpreise/data";

import styles from "./Table.module.scss";

interface TableProps {
  children?: ReactNode;
  data: TableData[];
}

function Table({ data }: TableProps) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th></th>
          {data.map((item, index) => (
            <th key={index}>{item.start}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className={styles.table__row}>
            <td className={styles.table__start}>{item.start}</td>
            {item.labels.map((labelItem, labelIndex) => (
              <td key={labelIndex}>{labelItem.price}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
