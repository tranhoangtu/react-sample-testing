import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("should render Hello world", () => {
  //Arrange
  render(<Greeting />);

  //Act
  //...Nothing

  //Assert
  const helloWorldElement = screen.getByText("Hello world");
  expect(helloWorldElement).toBeInTheDocument();
});
