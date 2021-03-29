import filters from "../../src/filters/index.js";

test("formatDateTime Thursday, June 20, 2019 4:17 AM => 20 Jun 2019", () => {
  expect(
    filters.formatDateTime(new Date("Thursday, June 20, 2019 4:17 AM"))
  ).toBe("20 Jun 2019");
});

test("formatDateTime undefined => ''", () => {
  expect(filters.formatDateTime(undefined)).toBe("");
});

test("formatDateTime null => ''", () => {
  expect(filters.formatDateTime(null)).toBe("");
});

test("formatDateTime '' => ''", () => {
  expect(filters.formatDateTime("")).toBe("");
});

test("formatDateTime NOTDATESTRING => ''", () => {
  expect(filters.formatDateTime("NOTDATESTRING")).toBe("");
});
