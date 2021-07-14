import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("should render Hello world", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //...Nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello world");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("should render abc text if button not click", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //...Nothing

    //Assert
    const element = screen.getByText("abc");
    expect(element).toBeInTheDocument();
  });

  test("should render def text if button click", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const button = screen.getByRole("button");
    userEvent.click(button);

    //Assert
    const element = screen.getByText("def");
    expect(element).toBeInTheDocument();
  });

  test("should not render abc text when click button", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const button = screen.getByRole("button");
    userEvent.click(button);

    //Assert
    const element = screen.queryByText("abc", { exact: false });
    expect(element).toBeNull();
  });
});
