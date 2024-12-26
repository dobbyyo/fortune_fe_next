/**
 * 객체가 비어 있는지 확인하는 함수
 * @param obj - 확인할 객체
 * @returns 객체가 비어 있으면 true, 아니면 false
 */
export const isEmptyObject = (obj: Record<string, unknown>): boolean => {
  return Object.keys(obj).length === 0;
};

export default isEmptyObject;
