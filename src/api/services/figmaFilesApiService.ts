import { api } from "../axios";
import { figma } from "../endpoints";
import type { GetFileResponseDTO } from "../types";

export const getFigmaFiles = async (figmaFileKey: string) => {
  const { data } = await api.get<GetFileResponseDTO>(
    `${figma.files}${figmaFileKey}`
  );
  return data;
};
