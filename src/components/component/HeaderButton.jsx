export const HeaderButton = ({ text }) => {
  return (
    <button>
      <div className="flex items-center justify-center px-3 py-1 border border-textColor rounded-xl bg-[#4723a44f]">
        <p className="font-medium font-Archivo not-italic text-base text-white hover:text-textColor duration-300">
          {text}
        </p>
      </div>
    </button>
  );
};
