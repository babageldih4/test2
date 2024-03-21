import { FC } from "react";
import { InputIconProps } from "../../utils/types/types";

const InputWithIcon: FC<InputIconProps> = ({ icon, placeholder, type }) => {
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-blue-500"
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {icon}
      </div>
    </div>
  );
};

export default InputWithIcon;
