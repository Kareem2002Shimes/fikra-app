import Image from "next/image";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useRouter } from "next/router";
function Icon({ id, open }: any) {
  return (
    <Image
      src="/assets/images/dashboard/icons/qAndaIcon.svg"
      alt="q&a-icon"
      width={16}
      height={16}
      className={`transition-transform  ${id === open ? "rotate-180" : ""}`}
    />
  );
}

export default function QandA() {
  const [open, setOpen] = useState(0);
  const { locale } = useRouter();
  const Questions = [
    {
      id: 1,
      header:
        locale === "ar"
          ? "مكان السؤال سوف يكون هنا"
          : "The place for the question will be here",
      body:
        locale === "ar"
          ? "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
          : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque voluptates inventore, unde, iusto nesciunt hic voluptatem aperiam consequuntur asperiores praesentium saepe at, aliquid labore blanditiis provident. Omnis architecto hic aut.",
    },
    {
      id: 2,
      header:
        locale === "ar"
          ? "مكان السؤال سوف يكون هنا"
          : "The place for the question will be here",
      body:
        locale === "ar"
          ? "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
          : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque voluptates inventore, unde, iusto nesciunt hic voluptatem aperiam consequuntur asperiores praesentium saepe at, aliquid labore blanditiis provident. Omnis architecto hic aut.",
    },
    {
      id: 3,
      header:
        locale === "ar"
          ? "مكان السؤال سوف يكون هنا"
          : "The place for the question will be here",
      body:
        locale === "ar"
          ? "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
          : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque voluptates inventore, unde, iusto nesciunt hic voluptatem aperiam consequuntur asperiores praesentium saepe at, aliquid labore blanditiis provident. Omnis architecto hic aut.",
    },
    {
      id: 4,
      header:
        locale === "ar"
          ? "مكان السؤال سوف يكون هنا"
          : "The place for the question will be here",
      body:
        locale === "ar"
          ? "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
          : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque voluptates inventore, unde, iusto nesciunt hic voluptatem aperiam consequuntur asperiores praesentium saepe at, aliquid labore blanditiis provident. Omnis architecto hic aut.",
    },
    {
      id: 5,
      header:
        locale === "ar"
          ? "مكان السؤال سوف يكون هنا"
          : "The place for the question will be here",
      body:
        locale === "ar"
          ? "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
          : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque voluptates inventore, unde, iusto nesciunt hic voluptatem aperiam consequuntur asperiores praesentium saepe at, aliquid labore blanditiis provident. Omnis architecto hic aut.",
    },
    {
      id: 6,
      header:
        locale === "ar"
          ? "مكان السؤال سوف يكون هنا"
          : "The place for the question will be here",
      body:
        locale === "ar"
          ? "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
          : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque voluptates inventore, unde, iusto nesciunt hic voluptatem aperiam consequuntur asperiores praesentium saepe at, aliquid labore blanditiis provident. Omnis architecto hic aut.",
    },
    {
      id: 7,
      header:
        locale === "ar"
          ? "مكان السؤال سوف يكون هنا"
          : "The place for the question will be here",
      body:
        locale === "ar"
          ? "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
          : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque voluptates inventore, unde, iusto nesciunt hic voluptatem aperiam consequuntur asperiores praesentium saepe at, aliquid labore blanditiis provident. Omnis architecto hic aut.",
    },
    {
      id: 8,
      header:
        locale === "ar"
          ? "مكان السؤال سوف يكون هنا"
          : "The place for the question will be here",
      body:
        locale === "ar"
          ? "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
          : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque voluptates inventore, unde, iusto nesciunt hic voluptatem aperiam consequuntur asperiores praesentium saepe at, aliquid labore blanditiis provident. Omnis architecto hic aut.",
    },
  ];

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      {Questions.map((item) => (
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
