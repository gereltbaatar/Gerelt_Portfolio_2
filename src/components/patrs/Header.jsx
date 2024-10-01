import { HeaderButton } from "../component";

const Header = () => {
  return (
    <main>
      <div className="text-white px-20 py-9">
        <div className="container m-auto">
          <div className="flex justify-between">
            <div className="w-auto">
              <h1 className="font-extrabold font-Archivo  text-3xl not-italic">
                GERLEE . <span className="text-[#4723a4]">PORTFOLIO</span>
              </h1>
            </div>
            <div className="flex gap-3">
              <HeaderButton text={"About"} />
              <HeaderButton text={"Work"} />
              <HeaderButton text={"Contact"} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
