function run(birthday_date) {
  /*
   * Write your code below; return type and arguments should be according to the problem's requirements
   */
  const startYear = 2016;
  const endYear = startYear + 50;
  const [day, month] = birthday_date.split("-").map(Number);
  let future_dates = "";

  for (let year = startYear; year < endYear; year++) {
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    const date = new Date(`${month}-${day}-${year}`);
    const dayOfWeek = date.toLocaleString("en-US", { weekday: "short" });

    if (dayOfWeek === "Fri" || dayOfWeek === "Sat" || dayOfWeek === "Sun") {
      if (isLeapYear && month === 2 && day === 29) {
        future_dates += `${dayOfWeek}-${year} `;
        continue;
      }

      future_dates += `${dayOfWeek}-${year} `;
    }
  }

  return future_dates.trim();
}

console.log(run("01-05"));
// Fri-2021 Sun-2022 Sun-2028 Fri-2030 Sat-2031 Sun-2037 Fri-2039 Sat-2040 Sat-2046 Sun-2048 Fri-2050

// 
// console.log(run("29-02"));
//   Sat-2020 Sun-2032 Fri-2036 Sat-2048 Sun-2060 Fri-2064

// console.log(run("15-07"));
