/**
 * 배열을 특정 키를 기준으로 정렬하는 함수
 * @param array - 정렬할 배열
 * @param key - 정렬 기준이 될 객체의 키
 * @param asc - 오름차순 여부 (기본값: true)
 * @returns 정렬된 배열
 */
export const sortArrayByKey = <T>(
  array: T[],
  key: keyof T,
  asc = true
): T[] => {
  return [...array].sort((a, b) =>
    asc ? (a[key] > b[key] ? 1 : -1) : a[key] < b[key] ? 1 : -1
  );
};

export default sortArrayByKey;
