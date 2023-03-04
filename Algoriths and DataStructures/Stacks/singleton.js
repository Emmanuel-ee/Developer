function run(student_list) {
    const teamCounts = {};
    for (let i = 0; i < student_list.length; i++) {
      const teamNumber = student_list[i];
      if (teamCounts[teamNumber]) {
        teamCounts[teamNumber]++;
      } else {
        teamCounts[teamNumber] = 1;
      }
    }
    for (const [teamNumber, count] of Object.entries(teamCounts)) {
      if (count === 1) {
        return parseInt(teamNumber);
      }
    }
    return -1;
  }
  
const single_student_number = run([2, 4, 5, 4, 2]);
console.log(single_student_number); // Output: 5
