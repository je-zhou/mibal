import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CashFlow from "./CashFlow"

test("Cash Flow Page Title and Date Render", () => {
  render(<CashFlow />, { wrapper: MemoryRouter });

  expect(screen.getByText("Cash Flow")).toBeInTheDocument() ;
  expect(screen.getByText("April 2022")).toBeInTheDocument() ;
});

test("Cash Flow Page contains Add Transaction Button", () => {
  render(<CashFlow />, { wrapper: MemoryRouter });

  expect(screen.getByText("Add Transaction")).toBeInTheDocument();
})


test("Cash Flow Page contains New Cash Account Button", () => {
    render(<CashFlow />, { wrapper: MemoryRouter });
  
    expect(screen.getByText("New Flow")).toBeInTheDocument();
  })