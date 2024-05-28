import http from "@/api";

/**
 * @description: 获取高分房源信息
 */
export const getHighScore = () => {
  return http.get(`/airbnb/api/home/highscore`, {});
};

/**
 * @description: 获取高性价比房源信息
 */
export const getGoodPrice = () => {
  return http.get(`/airbnb/api/home/goodprice`, {});
};