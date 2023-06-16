import styles from "./Contact.module.scss";
import { Heading } from "../Heading/Heading";
import Link from "next/link";

interface ContactProps {
  data: ContactData[];
}

export interface ContactData {
  name: string;
  address: string;
  mail: string;
  locals: {
    local: string;
    reachable: string;
    phone: string;
  }[];
}

const Contact = ({ data }: ContactProps) => {
  return (
    <>
      {data.map((item, index) => (
        <div key={index} className={styles.contact}>
          <div className={styles.contact__Head}>
            <Heading as="strong" size="md">
              <p>{item.name}</p>
              <p>{item.address}</p>
              <Link href={`mail:${item.mail}`}>per Mail</Link>
            </Heading>
          </div>
          {item.locals.map((localItem, localIndex) => (
            <div key={localIndex} className={styles.contact__Item}>
              <p>{localItem.local}</p>
              <p>{localItem.reachable}</p>
              <p>{localItem.phone}</p>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Contact;

// const Contact = ({ data }: ContactProps) => {
//   return (
//     <>
//       {data.map((item, index) => (
//         <div key={index} className={styles.contact}>
//           <div className={styles.contact__Head}>
//             <Heading as="strong" size="md">
//               <p>{item.name}</p>
//               <p>{item.address}</p>
//               <Link href={`mail:${item.mail}`}>per Mail</Link>
//             </Heading>
//           </div>
//           <div className={styles.contact_ItemContainer}>
//             {item.locals.map((localItem, localIndex) => (
//               <div
//                 key={localIndex}
//                 className={styles.contact__ItemContainer__Items}
//               >
//                 <p>{localItem.local}</p>
//                 <p>{localItem.reachable}</p>
//                 <p>{localItem.phone}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };
