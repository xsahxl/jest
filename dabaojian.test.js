const { baojian1, baojian2 } = require("./dabaojian.js");

test("保健1方法-300元", function () {
  expect(baojian1(300)).toBe("至尊享受");
});

test("保健2方法-2000元", function () {
  expect(baojian2(2000)).toBe("双人服务");
});
