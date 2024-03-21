import { FC } from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineMail } from "react-icons/md";
import InputWithIcon from "./InputIcon";
import { CiPhone } from "react-icons/ci";

const Form: FC = () => {
  return (
    <div>
      <div className="relative">
        <div className="grid grid-cols-2 gap-5">
          <div className="grid grid-cols-1 gap-10">
            <InputWithIcon
              icon={<CgProfile className="h-5 w-5 text-gray-400" />}
              type="text"
              placeholder="Ady"
            />
            <InputWithIcon
              icon={<CgProfile className="h-5 w-5 text-gray-400" />}
              type="text"
              placeholder="Familyasy"
            />
          </div>
          <div className="grid grid-cols-1 gap-10">
            <InputWithIcon
              icon={<MdOutlineMail className="h-5 w-5 text-gray-400" />}
              type="email"
              placeholder="E-mail"
            />
            <InputWithIcon
              icon={<CiPhone className="h-5 w-5 text-gray-400" />}
              type="tel"
              placeholder="Telefon belgisi"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
