import { figmaFilesApiService } from "../../api";
import { useQuery } from "@tanstack/react-query";

const FIGMA_FILE_KEY = import.meta.env.VITE_API_FIGMA_FILE_KEY;

export const MainTemplate = () => {

  const { data, error, isLoading } = useQuery({
    queryKey: ["figmaFile", FIGMA_FILE_KEY],
    queryFn: () => figmaFilesApiService.getFigmaFilesNodes(FIGMA_FILE_KEY),
  })

  return (
    <div>
      <div>Main Template Component</div>
      <div>{JSON.stringify(data, null, 4)}</div>
    </div>
  );
};
