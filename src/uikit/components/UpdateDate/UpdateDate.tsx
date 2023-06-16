import { ReactNode } from "react";
import styles from "./UpdateDate.module.css";

interface UpdateDateProps {
  children: ReactNode;
}

const UpdateDate = ({ children }: UpdateDateProps) => {
  return (
    <div>
      <p>Letzte Aktualisierung:</p>
      <p>{children}</p>
    </div>
  );
};

export default UpdateDate;
