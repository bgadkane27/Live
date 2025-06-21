import { CirclePause, CirclePlay } from "lucide-react";

const ToggleButton = ({ isOn, onToggle }) => {

  return (
    <div
      onClick={onToggle}
      className={`hidden sm:flex items-center cursor-pointer w-[100px] h-[50px] rounded-full px-1 transition-colors duration-300 relative z-500 ${
        isOn ? "bg-slate-800" : "bg-slate-800"
      }`}
    >
      <div
        className={`flex items-center justify-center w-[42px] h-[42px] rounded-full transition-all duration-300 ${
          isOn ? "bg-[#7C74F1] translate-x-0" : "bg-[#FF6F3C] translate-x-[50px]"
        }`}
      >
        {isOn ? (
          <CirclePlay />
        ) : (
          <CirclePause />
        )}
      </div>
      <span
        className={`ml-2 transition-colors duration-300 flex items-center justify-center ${
          isOn ? "translate-x-0" : "-translate-x-[40px]"
        }`}
      >
        {isOn ? "On" : "Off"}
      </span>
    </div>
  );
};

export default ToggleButton;
