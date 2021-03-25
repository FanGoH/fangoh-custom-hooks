import { renderHook } from "@testing-library/react-hooks";
import useWindowSize from "../hooks/useWindowSize";

describe("Hook should return numbers", () => {
	test("should return numbers", () => {
		const { result } = renderHook(() => useWindowSize());
		const [w, h] = result.current;

		expect(typeof w).toBe("number");
		expect(typeof h).toBe("number");
	});
});
