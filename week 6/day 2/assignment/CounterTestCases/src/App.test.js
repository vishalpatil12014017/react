import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Count/i);
  expect(linkElement).toBeInTheDocument();
});

test("onclick increment the count by 5", () => {
  const { getByTestId, getAllByTestId } = render(<App />);
  const [add] = getAllByTestId("button")
  const counter = getByTestId("counter")
  fireEvent.click(add)
  expect(counter).toHaveTextContent("5")

})

test("onclick decrement the count by 5", () => {
  const { getByTestId, getAllByTestId } = render(<App />);
  const [add, substraction] = getAllByTestId("button")
  const counter = getByTestId("counter")
  fireEvent.click(substraction)
  expect(counter).toHaveTextContent("-5")

})

test("onclick increment and decrement the count by 5 and -5 respectively", () => {
  const { getByTestId, getAllByTestId } = render(<App />);
  const [add, substraction] = getAllByTestId("button")
  const counter = getByTestId("counter")
  expect(counter).toHaveTextContent("0")
  fireEvent.click(add)
  expect(counter).toHaveTextContent("5")
  fireEvent.click(add)
  expect(counter).toHaveTextContent("10")
  fireEvent.click(substraction)
  expect(counter).toHaveTextContent("5")
  fireEvent.click(substraction)
  expect(counter).toHaveTextContent("0")
})
