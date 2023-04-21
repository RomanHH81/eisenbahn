import Image from "next/image";
import bergedorf from "@/public/image/bergedorf_sued.png";
import geesthacht from "@/public/image/geesthacht.png";

const page = () => {
  return (
    <div>
      <div>
        <p>in Hamburg-Bergedorf</p>
        <p>Neuer Weg 39, 21029 Hamburg</p>
        <Image src={bergedorf} alt="Bergedorf" />
      </div>
      <div>
        <p>in Geesthacht</p>
        <p>Bahnstraße 45, 21502 Geesthacht</p>
        <Image src={geesthacht} alt="Geesthacht" />
      </div>
    </div>
  );
};

export default page;
