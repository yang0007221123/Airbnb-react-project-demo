import http from "@/api";

/**
 * @description: 获取高分信息
 */
export const getHighScore = () => {
  return http.get(`/airbnb/api/home/highscore`, {});
};