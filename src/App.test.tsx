import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

// Mock @ionic/react to avoid Jest ESM transformation issues with react-scripts
jest.mock("@ionic/react", () => ({
  IonIcon: ({ icon, className, ...props }: any) => (
    <span
      data-testid="ion-icon"
      className={className}
      data-icon={typeof icon === "string" ? icon : "icon"}
      {...props}
    />
  ),
}));

describe("Portfolio App", () => {
  test("renders header, profile info, and default about section", () => {
    render(<App />);

    // Sidebar name & title
    expect(screen.getByText("Okwudili Odumodu")).toBeInTheDocument();
    expect(screen.getAllByText("Senior Frontend Engineer").length).toBeGreaterThanOrEqual(1);

    // Default active section is About
    expect(screen.getByRole("heading", { name: /About Me/i })).toBeInTheDocument();
    expect(screen.getByText(/8\+ years of experience/i)).toBeInTheDocument();
  });

  test("navigates to Resume tab and displays experience", () => {
    render(<App />);

    const resumeBtn = screen.getByRole("button", { name: "Resume" });
    fireEvent.click(resumeBtn);

    expect(screen.getByRole("heading", { name: "Resume" })).toBeInTheDocument();
    expect(screen.getByText("Professional Experience")).toBeInTheDocument();
    expect(
      screen.getByText("AI Training Specialist / Model Evaluator")
    ).toBeInTheDocument();
    expect(screen.getByText("Co-Founder & Frontend Lead")).toBeInTheDocument();
  });

  test("navigates to Portfolio tab and shows DumosRx and other projects", () => {
    render(<App />);

    const portfolioBtn = screen.getByRole("button", { name: "Portfolio" });
    fireEvent.click(portfolioBtn);

    expect(screen.getByRole("heading", { name: "Portfolio" })).toBeInTheDocument();
    expect(
      screen.getByText("DumosRx — Retail & Store Operating System")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Booksolterra — Multi-Tenant Direct Booking Platform")
    ).toBeInTheDocument();
  });

  test("navigates to Contact tab and renders form", () => {
    render(<App />);

    const contactBtn = screen.getByRole("button", { name: "Contact" });
    fireEvent.click(contactBtn);

    expect(screen.getByRole("heading", { name: "Contact" })).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Full name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email address")).toBeInTheDocument();
  });
});