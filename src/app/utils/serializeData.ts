/**
 * 데이터를 JSON 형식으로 직렬화하는 함수
 * @param data - 직렬화할 데이터
 * @returns 직렬화된 데이터
 */
export const serializeData = <T>(data: T): T =>
  JSON.parse(JSON.stringify(data));

export default serializeData;
