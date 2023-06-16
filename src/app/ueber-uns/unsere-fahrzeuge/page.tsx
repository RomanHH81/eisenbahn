import TechnicalDetails from "@/uikit/components/TechnicalDetails/TechnicalDetails";
import { Section } from "../../../uikit/components/Section/Section";
import allVehicle from "./data";

const page = () => {
  return (
    <div>
      <Section>
        <TechnicalDetails data={allVehicle} />
      </Section>
    </div>
  );
};

export default page;
