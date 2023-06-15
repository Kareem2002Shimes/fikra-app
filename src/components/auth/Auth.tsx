import ImageBox from "./ImageBox";
import TextBox from "./TextBox";

function Auth({ t }: any) {
  return (
    <section className="flex min-h-screen w-full overflow-hidden">
      <TextBox t={t} />
      <ImageBox t={t} />
    </section>
  );
}

export default Auth;
