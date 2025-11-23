import { api } from "../axios";
import { figma } from "../endpoints";
import type {
  GetFileMetaResponseDTO,
  GetFileNodesResponseDTO,
  GetFileResponseDTO,
  GetImageFillsResponseDTO,
  GetImagesResponseDTO,
} from "../types";

const NODE_IDS = "1:75";

class FigmaFilesApiService {
  queryKeys = {
    files: ["files"] as const,
    fileNodes: ["fileNodes"] as const,
    fileImage: ["fileImage"] as const,
    fileImageFills: ["fileImageFills"] as const,
    fileMetadata: ["fileMetadata"] as const,
  };

  getFigmaFiles = (figmaFileKey: string) => {
    return api.get<GetFileResponseDTO>(`${figma.files}${figmaFileKey}`);
  };

  getFigmaFilesNodes = (figmaFileKey: string) => {
    return api
      .get<GetFileNodesResponseDTO>(`${figma.files}${figmaFileKey}/nodes`, {
        params: {
          ids: NODE_IDS,
        },
      })
      .then((res) => res.data);
  };

  getFigmaFileImages = (figmaFileKey: string) => {
    return api.get<GetImagesResponseDTO>(`${figma.images}${figmaFileKey}`);
  };

  getFigmaFileImageFills = (figmaFileKey: string) => {
    return api.get<GetImageFillsResponseDTO>(
      `${figma.files}${figmaFileKey}/images`
    );
  };

  getFigmaFileMetadata = (figmaFileKey: string) => {
    return api.get<GetFileMetaResponseDTO>(
      `${figma.files}${figmaFileKey}/meta`
    );
  };
}

export const figmaFilesApiService = new FigmaFilesApiService();
