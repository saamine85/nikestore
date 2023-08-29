export const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex border justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor} hover:bg-slate-200  hover:text-black`
        : "border-coral-red bg-coral-red text-white hover:opacity-[.8]"
    }
     rounded-full ${fullWidth && "w-full"} transition duration-200`}
    >
      {label}
      {iconURL && (
        <img
          className="ml-2 rounded-full w-5 h-5"
          src={iconURL}
          alt="arrowrighticon"
        />
      )}
    </button>
  );
};
