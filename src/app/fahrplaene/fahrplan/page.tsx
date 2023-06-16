"use client";

import { Heading } from "@/uikit/components/Heading/Heading";
import { Section } from "../../../uikit/components/Section/Section";
import { Card } from "@/uikit/components/Card/Card";
import faresData from "./data";
import { TimeTable } from "@/uikit/components/TimeTable/TimeTable";

const page = () => {
  return (
    <div>
      <Section>
        <TimeTable title={"Fahrplan 2023"} data={faresData} />
      </Section>
    </div>
  );
};

export default page;
