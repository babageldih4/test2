import { FC, ChangeEvent } from "react";
import { RiFileUploadLine } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";
import useFileStore from "../../store/store";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const Documents: FC = () => {
  const { addFiles, fileNames } = useFileStore();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      const newFiles = Array.from(selectedFiles);
      addFiles(newFiles);
    }
  };

  const handleButtonClick = () => {
    const fileInput = document.getElementById("file-input");
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <div>
      <p className="text-gray-400 p-6">Resminamalar</p>
      <div className="flex flex-row gap-4 justify-between bg-gray-100 p-10 relative">
        <div className="flex flex-col gap-8 items-center p-8 bg-slate-50 w-1/3 text-center justify-center ">
          <RiFileUploadLine className="mr-2 w-24 h-24" />
          <label className="cursor-pointer">
            <input
              type="file"
              id="file-input"
              accept=".doc,.docx,.pdf"
              className="hidden"
              onChange={handleFileChange}
              multiple
            />
            <button
              onClick={handleButtonClick}
              className="px-8 py-4 cursor-pointer bg-blue-400 rounded-lg text-white"
            >
              Fayl Sayla
            </button>
          </label>
        </div>
        <div className="w-1/2  items-start grid gap-4">
          {fileNames.map((fileName, index) => (
            <div
              key={index}
              className="flex flex-row items-center bg-slate-50 rounded-md p-2 text-md font-medium justify-between"
            >
              <div className="grid grid-cols-2">
                <IoDocumentTextOutline className="w-16 h-16" />
                <div className="grid grid-cols-1  ">
                  <p className="text-md font-semibold "> {fileName}</p>
                  <span className="text-gray-400 text-sm ">4.7mb</span>
                </div>
              </div>
              <div className=" text-green-400">
                <IoCheckmarkCircleOutline className="w-8 h-8" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents;
