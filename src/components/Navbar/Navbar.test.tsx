import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import "@testing-library/jest-dom";
import Navbar from "./Navbar";

test("Title, Balance Sheet & Cash Flow Text is visible", async () => {
  const history = createMemoryHistory();

  render(
    <Router location={history.location} navigator={history}>
      <Navbar />
    </Router>
  );

  expect(screen.getByText("MiBal")).toBeVisible();
  expect(screen.getByText("Balance Sheet")).toBeVisible();
  expect(screen.getByText("Cash Flow")).toBeVisible();

});


test("Balance Sheet button navigates correctly", async () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <Navbar />
    </Router>
  );
  const user = userEvent.setup();

  await user.click(screen.getByText("Balance Sheet"));

  expect(history.location.pathname).toBe("/balance-sheet");
});


test("Cash Flow button navigates correctly", async () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <Navbar />
    </Router>
  );
  const user = userEvent.setup();

  await user.click(screen.getByText("Cash Flow"));

  expect(history.location.pathname).toBe("/cash-flow");
});
