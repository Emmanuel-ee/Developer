/** Question

Wouldn't it be neat if every year, your birthday would fall on a Friday, Saturday or Sunday? Well we cannot create a program for that (yet) but we can find out the exact years this will happen. Given a certain date, return a string with the day of the week and the year it will fall in a weekend, starting with the current year (2016). Do this for 50 years in the future.

INPUT string date_of_birth (with this format: dd-mm)

OUTPUT string wday-yyyy wday-yyyy ... (where wday can be any of this three values: Fry, Sat, Sun) Every date should be sepparated by one space

EXAMPLE Input "23-10"

Output "Sun-2016 Fri-2020 Sat-2021 Sun-2022 Fri-2026 Sat-2027 Sat-2032 Sun-2033 Fri-2037 Sat-2038 Sun-2039 Fri-2043 Sun-2044 Fri-2048 Sat-2049 Sun-2050 Fri-2054 Sat-2055 Sat-2060 Sun-2061 Fri-2065"

You can use Javascript to solve this coding challenge.

**/

/** const str = '2022-09-24';

const date = new Date(str);

console.log(date); // 👉️ Sat Sep 24 2022
**/




/** 
const str = '09/24/2022';

const [month, day, year] = str.split('/');

console.log(month); // 👉️ 09
console.log(day); // 👉️ 24
console.log(year); // 👉️ 2022



const date = new Date(+year, +month - 1, +day);
console.log(date); // 👉️ Sat Sep 24 2022
**/

// function findWeekendBirthdays(dob) {
//     let result = "";
//     let date = new Date(`${dob}-2016`);
//     // console.log(date)
//     for (let i = 0; i < 50; i++) {
//       date.setFullYear(date.getFullYear() + 1);
//       if (date.getDay() === 5) result += "Fri-";
//       if (date.getDay() === 6) result += "Sat-";
//       if (date.getDay() === 0) result += "Sun-";
//       result += date.getFullYear() + " ";
//     }
//     return result.trim();
//   }

function findWeekendBirthdays(dob) {
    if (!/^\d{2}-\d{2}$/.test(dob)) {
      return "Error: Incorrect date format. Please use 'dd-mm'";
    }
    
    console.log(`Input: ${dob}`);
    let result = "";
    let date = new Date(`${dob}-2016`);
    console.log(`Date: ${date}`);
    for (let i = 0; i < 50; i++) {
      date.setFullYear(date.getFullYear() + 1);
      switch (date.getDay()) {
        case 5:
          result += "Fri-";
          break;
        case 6:
          result += "Sat-";
          break;
        case 0:
          result += "Sun-";
          break;
      }
      result += date.getFullYear() + " ";
    }
    return result.trim();
  }
  
  


// Python code
//   import datetime

//   def findWeekendBirthdays(dob):
//       result = ""
//       date = datetime.datetime.strptime(f"{dob}-2016", "%d-%m-%Y")
//       for i in range(50):
//           date = date.replace(year=date.year + 1)
//           if date.weekday() == 4:
//               result += "Fri-"
//           if date.weekday() == 5:
//               result += "Sat-"
//           if date.weekday() == 6:
//               result += "Sun-"
//           result += str(date.year) + " "
//       return result.strip()
  
  
  let dates = findWeekendBirthdays('23-10')
  console.log(dates)





