test("007号技师的匹配", function () {
  expect("007号技师").toBe("007号技师");
});

test("toEqual", function () {
  const a = { num: "007" };
  expect(a).toEqual({ num: "007" });
});

test("toBeNull", function () {
  const a = null;
  expect(a).toBeNull();
});

test("toBeUndefined", function () {
  const a = undefined;
  expect(a).toBeUndefined();
});

test("toBeTruthy", function () {
  const a = true;
  expect(a).toBeTruthy();
});

test("toBeFalsy", function () {
  const a = false;
  expect(a).toBeFalsy();
});

test("toBeGreaterThan", function () {
  expect(9).toBeGreaterThan(8);
});

test("toBeLessThan", function () {
  expect(8).toBeLessThan(10);
});

test("toBeLessThan", function () {
  const a = 0.1;
  const b = 0.2;
  expect(a + b).toBeCloseTo(0.3);
});
