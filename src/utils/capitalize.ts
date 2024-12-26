/**
 * 날짜를 포맷팅합니다.
 * @param str - 포맷팅할 문자열
 * @returns 첫 글자를 대문자로 변환한 문자열
 */
export const capitalize = (str: string): string => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default capitalize;
