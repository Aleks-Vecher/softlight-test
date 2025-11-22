import { useEffect, useState } from "react";
import { getFigmaFiles, type GetFileResponseDTO } from "../../api";

const FIGMA_FILE_KEY = import.meta.env.VITE_API_FIGMA_FILE_KEY;

export const MainTemplate = () => {
  const [file, setFile] = useState<GetFileResponseDTO | null>(null);
  useEffect(() => {
    getFigmaFiles(FIGMA_FILE_KEY).then((data) => {
      setFile(data);
      console.log("Figma File Data:", data);
    });
  }, []);

  return (
    <>
      <div>Main Template Component</div>
      <div>{JSON.stringify(file, null, 2)}</div>
    </>
  );
};
