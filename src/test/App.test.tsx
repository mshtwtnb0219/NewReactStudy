
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Hello", () => {
    test("pタグを表示させる", () => {
        render(<App />)
        expect(screen.getByText("あぷりけーしょん")).toBeInTheDocument();
    })
})