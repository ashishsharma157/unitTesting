import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./greeting";

describe("Greeting component", () => {
  test("render hello world as text", () => {
    //Arrange
    render(<Greeting />);
    //Act
    //.nothing

    //Assert

    const resultElement = screen.getByText("Hello World", { exact: false });
    expect(resultElement).toBeInTheDocument();
  });

  test("render before button click", () => {
    render(<Greeting />);
    const resultElement = screen.getByText("Its good to see you here", {
      exact: false,
    });
    expect(resultElement).toBeInTheDocument();
  });

  test("render after button click", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const resultElement = screen.getByText("Text Changed", { exact: true });
    expect(resultElement).toBeInTheDocument();
  });

  test('render after button old test clear', ()=>{
    render(<Greeting />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const resultElement = screen.queryByText("Its good to see you here",{exact:false});
    expect(resultElement).toBeNull();
  })
});
