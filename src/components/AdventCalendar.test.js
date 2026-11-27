import { getAvailableDay } from "./AdventCalendar";
import { CAMPAIGN_YEAR } from "../config";

test("everything is locked before December", () => {
  expect(getAvailableDay(new Date(CAMPAIGN_YEAR, 10, 30))).toBe(0);
});

test("doors unlock up to today's date in December", () => {
  expect(getAvailableDay(new Date(CAMPAIGN_YEAR, 11, 12))).toBe(12);
});

test("every door is open after Christmas", () => {
  expect(getAvailableDay(new Date(CAMPAIGN_YEAR, 11, 28))).toBe(25);
  expect(getAvailableDay(new Date(CAMPAIGN_YEAR + 1, 0, 5))).toBe(25);
});