import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("renders posts", async () => {
    window.fetch = jest.fn();
    window,
      fetch.mockResolvedValueOnce({
        json: async () => [{ id: "p1", title: "test post mock" }],
      });
    render(<Async />);
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
