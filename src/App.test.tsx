import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";

import "@testing-library/jest-dom";

import { App, LocationDisplay } from "./App";

test("full app rendering/navigating", async () => {
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <App />
    </Router>
  );
  const user = userEvent.setup();
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(screen.getByText(/you are home/i)).toBeInTheDocument();

  await user.click(screen.getByText(/about/i));

  // check that the content changed to the new page
  expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument();
});

test("landing on a bad page", () => {
  const history = createMemoryHistory();
  history.push("/some/bad/route");
  render(
    <Router location={history.location} navigator={history}>
      <App />
    </Router>
  );

  expect(screen.getByText(/no match/i)).toBeInTheDocument();
});

test("rendering a component that uses useLocation", () => {
  const history = createMemoryHistory();
  const route = "/some-route";
  history.push(route);
  render(
    <Router location={history.location} navigator={history}>
      <LocationDisplay />
    </Router>
  );

  expect(screen.getByTestId("location-display")).toHaveTextContent(route);
});
