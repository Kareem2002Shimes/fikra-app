import Image from "next/image";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Questions from "@/src/data/Questions.json";
import qIcon from "@/src/assets/images/dashboard/icons/qAndaIcon.svg";
function Icon({ id, open }: any) {
  return (
    <Image
      src={qIcon}
      alt="q&a-icon"
      width={16}
      height={16}
      className={`transition-transform  ${id === open ? "rotate-180" : ""}`}
    />
  );
}

export default function QandA() {
  const [open, setOpen] = useState(0);
  const [data, setData] = useState(Questions);

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      {data.map((item) => (
        <Accordion
          key={item.id}
          open={open === item.id}
          icon={<Icon id={item.id} open={open} />}
        >
          <AccordionHeader
            onClick={() => handleOpen(item.id)}
            className="text-white text-sm bg-neutral-800 w-[540px] max-w-full h-[72px] px-[24px] rounded-[8px]"
          >
            {item.header}
          </AccordionHeader>
          <AccordionBody className="text-neutral-200 w-[540px] max-w-full p-[24px]">
            {item.body}
          </AccordionBody>
        </Accordion>
      ))}
    </Fragment>
  );
}
