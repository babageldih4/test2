import create from "zustand";

interface FileState {
  files: File[];
  fileNames: string[];
}

interface FileStore extends FileState {
  addFiles: (newFiles: File[]) => void;
}

const useFileStore = create<FileStore>((set) => ({
  files: [],
  fileNames: [],
  addFiles: (newFiles) =>
    set((state) => ({
      files: [...state.files, ...newFiles],
      fileNames: [...state.fileNames, ...newFiles.map((file) => file.name)],
    })),
}));

export default useFileStore;
