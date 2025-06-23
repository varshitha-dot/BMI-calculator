document.getElementById("bmi-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const age = parseInt(document.getElementById("age").value);
  const gender = document.getElementById("gender").value;
  const feet = parseFloat(document.getElementById("feet").value);
  const inches = parseFloat(document.getElementById("inches").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const result = document.getElementById("result");


  if (age > 0 && gender && feet >= 0 && inches >= 0 && weight > 0) {
    const totalHeightFeet = feet + (inches / 12);
    const bmi = (weight * 10.7639) / (totalHeightFeet * totalHeightFeet);

    let category = "";
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 24.9) {
      category = "Normal weight";
    } else if (bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obesity";
    }

    result.innerHTML = `
      <p><strong>BMI Result:</strong> ${bmi.toFixed(2)} (${category})</p>
      <p><strong>Age:</strong> ${age} | <strong>Gender:</strong> ${gender}</p>
      <p><strong>Height:</strong> ${feet} ft ${inches} in | <strong>Weight:</strong> ${weight} kg</p>
    `;
  } else {
    result.textContent = "Please enter all required values correctly.";
  };

