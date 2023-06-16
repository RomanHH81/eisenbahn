import { Heading } from "@/uikit/components/Heading/Heading";
import { Section } from "@/uikit/components/Section/Section";
import Table from "@/uikit/components/Table/Table";
import faresData from "./data";

function page() {
  return (
    <div>
      <Section>
        <Heading as={"h3"} size={"lg"}>
          Fahrpreise ab 2023
        </Heading>
        <Table data={faresData} />
      </Section>
    </div>
  );
}

export default page;
