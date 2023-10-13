import { useState } from "react";

function AgeCalculator() {
  const [date, setDate] = useState("");
  const [age, setAge] = useState("");

  const setBirthday = (event) => {
    setDate(event.target.value);
  };

  const calcAge = () => {
    if (!date) {
      setAge("Please enter your date of birth.");
      return;
    }

    var todayDate = new Date();
    var birthDate = new Date(date);
    var ageIs = todayDate.getFullYear() - birthDate.getFullYear();
    var monthDiff = todayDate.getMonth() - birthDate.getMonth();
    var dayDiff = todayDate.getDate() - birthDate.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      ageIs--;
    }
    if (
      ageIs < 0 ||
      (ageIs === 0 && monthDiff < 0) ||
      (ageIs === 0 && monthDiff === 0 && dayDiff < 0)
    ) {
      setAge("You must be from the future!");
    } else {
      setAge(`You are ${ageIs} years old`);
    }
  };

  return (
    <div>
      <h1>Age Calculator</h1>
      <h5>Enter your date of birth</h5>
      <div>
        <input id="DOB" type="date" onChange={setBirthday}></input>
      </div>

      <div>
        <button id="Age" onClick={calcAge}>
          Calculate Age
        </button>
      </div>
      <div className="answer">
        <h6>{age}</h6>
      </div>
    </div>
  );
}

export default AgeCalculator;
