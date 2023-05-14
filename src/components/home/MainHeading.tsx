interface MainHeadingProps {
  title: string;
  desc?: string;
}
function MainHeading({ title, desc }: MainHeadingProps) {
  return (
    <>
      <h2 className="font-[700] text-neutral-50 mb-[16px]">{title}</h2>
      {desc && (
        <p className="text-neutral-300 text-md font-[500] mb-[40px]">{desc}</p>
      )}
    </>
  );
}

export default MainHeading;
