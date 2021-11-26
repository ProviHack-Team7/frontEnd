export default function useThrottle(): (
  func: CallableFunction,
  delay: number
) => void {
  let timerId: number | NodeJS.Timeout | undefined;

  const throttler = (func: CallableFunction, delay: number) => {
    if (timerId) {
      return;
    }
    // clearTimeout(timerId as NodeJS.Timeout);

    timerId = setTimeout(() => {
      func();

      timerId = undefined;
    }, delay);
  };

  return throttler;
}
