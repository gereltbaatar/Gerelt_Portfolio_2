import Header from "../patrs/Header";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const HomePage = () => {
  const [text] = useTypewriter({
    words: ["Gereltbaatar", "Software developer"],
    loop: 0,
  });

  return (
    <main class="absolute inset-0 -z-10 h-full w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <Header />

      <h1 className="text-white font-extrabold text-4xl">
        I'm a <span className="text-textColor">{text}</span>
        <Cursor cursorColor="#4723a4" />
      </h1>
    </main>
  );
};

export default HomePage;
