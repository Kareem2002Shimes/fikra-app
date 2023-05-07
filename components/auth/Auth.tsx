import ImageBox from "./ImageBox";
import TextBox from "./TextBox";

function Auth() {
  return (
    <div className="flex min-h-screen w-full overflow-hidden">
      <TextBox />
      <ImageBox />
    </div>
  );
}

export default Auth;
