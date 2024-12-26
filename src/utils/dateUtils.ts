import dayjs from "dayjs";

/**
 * 날짜를 포맷팅합니다.
 * @param date - 포맷팅할 날짜
 * @param dateFormat - 날짜 포맷 (기본값: "YYYY-MM-DD")
 * @returns 포맷팅된 날짜 문자열
 */
export const formatDate = (date: Date, dateFormat = "YYYY-MM-DD"): string => {
  return dayjs(date).format(dateFormat);
};

export default formatDate;
