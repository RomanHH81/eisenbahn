import { Heading } from "@/uikit/components/Heading/Heading";
import TextBlock from "@/uikit/components/TextBlock/TextBlock";
import textBlockData from "./data";

const page = () => {
  return (
    <div>
      <Heading as={"h3"} size="lg">
        <p>Über unsere Strecke</p>
      </Heading>
      {textBlockData.map((item, index) => (
        <TextBlock data={item} key={index} />
      ))}
    </div>
  );
};

export default page;
