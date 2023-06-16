import ImageBox from "./ImageBox";
import TextBox from "./TextBox";

function Auth({ t }: any) {
  return (
    <section>
      <div className="px-[16px] md:px-0 flex justify-center min-h-screen overflow-hidden ">
        <TextBox t={t} />
        <ImageBox t={t} />
      </div>
    </section>
  );
}

export default Auth;
