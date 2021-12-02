function replace(num, oldV, newV) {
  var strArr = num.toString().split("");
  console.log(
    strArr
      .map((e, i) => {
        return e == oldV ? newV : e;
      })
      .join("")
  );
}

replace(1001, 1, 3); // 3003
replace(1221, 2, 4); // 1441
