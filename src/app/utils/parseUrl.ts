/**
 * URL을 파싱하여 URL 객체를 반환하는 함수
 * @param url - 파싱할 URL 문자열
 * @returns URL 객체
 * @throws 오류 발생 시 URL이 잘못되었음을 알리는 예외
 */
export const parseUrl = (url: string) => {
  try {
    return new URL(url);
  } catch (error) {
    console.error("Invalid URL:", url, error);
    throw new Error("Failed to parse URL");
  }
};

export default parseUrl;
