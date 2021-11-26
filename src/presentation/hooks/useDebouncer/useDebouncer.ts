export default function useDebouncer(): (
  func: CallableFunction,
  delay: number
) => void {
  let timerId: number | NodeJS.Timeout;

  const debouncer = (func: CallableFunction, delay: number) => {
    clearTimeout(timerId as NodeJS.Timeout);

    timerId = window.setTimeout(() => {
      func();
    }, delay);
  };

  return debouncer;
}
