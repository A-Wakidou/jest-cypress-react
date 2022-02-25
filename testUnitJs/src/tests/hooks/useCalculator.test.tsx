import { renderHook, act } from "@testing-library/react-hooks";
import useCalculator from "../../hooks/useCalculator";

test("test addition", () => {
  const { result } = renderHook(() => useCalculator());
  const { addition } = result.current;
  expect(addition('1','1')).toEqual("2");
});

test("test substraction", () => {
  const { result } = renderHook(() => useCalculator());
  const { substraction } = result.current;
  expect(substraction('1','1')).toEqual("0");
});

test("test division", () => {
  const { result } = renderHook(() => useCalculator());
  const { division } = result.current;
  expect(division('1','1')).toEqual("1");
});

test("test rc", () => {
  const { result } = renderHook(() => useCalculator());
  const { square } = result.current;
  expect(square('1')).toEqual("1");
});
