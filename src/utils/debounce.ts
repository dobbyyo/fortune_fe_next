/**
 * 지정된 시간 동안 호출을 지연시키는 디바운스 함수
 * @param func - 호출을 지연시킬 함수
 * @param delay - 지연 시간 (밀리초)
 * @returns 지연된 호출을 처리하는 함수
 */
export const debounce = <F extends (...args: unknown[]) => void>(
  func: F,
  delay: number
): ((...args: Parameters<F>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<F>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

export default debounce;
