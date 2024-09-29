document
  .getElementById("calculateButton")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Get Date of Birth data
    const DateOfBirthMonth = document.getElementById("dob_month").value;
    const DateOfBirthDay = document.getElementById("dob_day").value;
    const DateOfBirthYear = document.getElementById("dob_year").value;

    // Get Find Age On data
    const findMonth = document.getElementById("find_month").value;
    const findDay = document.getElementById("find_day").value;
    const findYear = document.getElementById("find_year").value;

    if (
      !DateOfBirthMonth ||
      !DateOfBirthDay ||
      !DateOfBirthYear ||
      !findMonth ||
      !findDay ||
      !findYear
    ) {
      alert("Please fill in all fields");
      return;
    }

    const dobMonth = parseInt(DateOfBirthMonth);
    const dobDay = parseInt(DateOfBirthDay);
    const dobYear = parseInt(DateOfBirthYear);

    const findMonthInt = parseInt(findMonth);
    const findDayInt = parseInt(findDay);
    const findYearInt = parseInt(findYear);

    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const newDOB = new Date(dobYear, dobMonth - 1, dobDay);
    const findDate = new Date(findYearInt, findMonthInt - 1, findDayInt);

    const dayNameDOB = weekdays[newDOB.getDay()];
    const monthDOB = newDOB.getMonth() + 1;
    const dayOfMonthDOB = newDOB.getDate();
    const yearDOB = newDOB.getFullYear();

    const dayNameFind = weekdays[findDate.getDay()];
    const monthFind = findDate.getMonth() + 1;
    const dayOfMonthFind = findDate.getDate();
    const yearFind = findDate.getFullYear();

    let age = findYearInt - yearDOB;
    const dobDate = new Date(yearDOB, dobMonth - 1, dobDay);
    if (findDate < dobDate) {
      age--;
    }

    document.getElementById("result1").textContent = `Age = ${age} years`;
    document.getElementById(
      "result2"
    ).textContent = `Date Of Birth: ${dayNameDOB} ${monthDOB} ${dayOfMonthDOB},${yearDOB} Find Age On: ${dayNameFind} ${monthFind} ${dayOfMonthFind},${yearFind}`;

    document.getElementById("result1").style.color = "blue";
    document.getElementById("result2").style.fontSize = "1rem";
    document.getElementById("result2").style.padding = "5px";
  });

document.getElementById("clearbtn").addEventListener("click", function () {
  document.getElementById("result1").textContent = "";
  document.getElementById("result2").textContent = "";
});
