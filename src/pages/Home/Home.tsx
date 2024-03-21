import { FC } from "react";
import Form from "../../components/ui/Form";
import Documents from "../../components/ui/Documents";
import { LuSend } from "react-icons/lu";

const Home: FC = () => {
  return (
    <div className="py-10 px-20">
      <p className="text-xl font-medium pb-10">Onlaýn ýüzlenme Ugratmak</p>
      <Form />
      <Documents />
      <div className="flex flex-row items-center justify-center text-center p-6">
        <button className="flex flex-row justify-center gap-3 items-center text-2xl bg-blue-400 p-2 rounded-md px-24 text-center text-white">
          Ugrat
          <LuSend />
        </button>
      </div>
    </div>
  );
};

export default Home;
