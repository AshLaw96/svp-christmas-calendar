import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { CAMPAIGN_YEAR } from './config';

const STORAGE_KEY = `advent-opened-${CAMPAIGN_YEAR}`;

beforeEach(() => {
  localStorage.clear();
  // Pretend it is day 3, so tests give same result on any date
  window.history.pushState({}, "", "/?previewDay=3");
});

test("renders the campaign heading", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { level: 1, name: /bring light/i })).toBeInTheDocument();
});

test("renders 25 doors", () => {
  render(<App />);
  expect(screen.getAllByRole("button", { name: /^day \d+/i })).toHaveLength(25);
});

test("an unlocked door opens its window", async () => {
  render(<App />);
  userEvent.click(screen.getByRole("button", { name: /^day 1\b/i }));
  expect(await screen.findByRole("dialog")).toBeInTheDocument();
});

test("a locked door shows the still-dark message", async () => {
  render(<App />);
  userEvent.click(screen.getByRole("button", { name: /^day 10\b/i }));
  expect(await screen.findByText(/still dark/i)).toBeInTheDocument();
});

test("opening a door saves it", () => {
  render(<App />);
  userEvent.click(screen.getByRole("button", { name: /^day 2\b/i }));
  expect(JSON.parse(localStorage.getItem(STORAGE_KEY))).toEqual([2]);
});

test("the close button closes the window", async () => {
  render(<App />);
  userEvent.click(screen.getByRole("button", { name: /^day 1\b/i }));
  await screen.findByRole("dialog");

  // The header X and the footer button are both called "Close"
  userEvent.click(screen.getAllByRole("button", { name: /^close$/i })[0]);
  await waitFor(() =>
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
  );
});