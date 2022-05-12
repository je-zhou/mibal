import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BalanceSheet from "./BalanceSheet";

test("Balance Sheet Renders", () => {
  render(<BalanceSheet />, { wrapper: MemoryRouter });

  // verify page content for expected route
  expect(screen.getByText("Balance Sheet")).toBeInTheDocument();
});
