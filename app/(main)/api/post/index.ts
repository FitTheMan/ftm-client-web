import api from "@/lib/axios";
import { ApiResponse } from "@/types/api";
import { TrendingPost } from "../../types/PostType";

const BASE_PATH = "/api/posts";

/**
 * 트렌딩 게시물 조회 API
 */
export const getTrendingPosts = async (): Promise<TrendingPost[]> => {
  try {
    const response = await api.get<ApiResponse<TrendingPost[]>>(
      `${BASE_PATH}/trend`
    );
    return response.data.data;
  } catch (error) {
    console.error("트렌딩 게시물 조회 실패:", error);
    throw error;
  }
};
