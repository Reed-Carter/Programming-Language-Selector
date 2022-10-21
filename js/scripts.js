function determineLanguage(event) {
  event.preventDefault();
  const age = parseInt(document.getElementById("inputAge").value);
  const height = parseInt(document.getElementById("inputHeight").value);
  const eyeColor = document.getElementById("inputEyeColor").value;
  const aspiration = document.getElementById("inputAspiration").value;
  const username = document.getElementById("inputname").value;
  
  let result;  
  if (age >= 50 && height <= 60 && eyeColor === "blue" && aspiration === "javaScript") {
    result = username + "you should learn Java Script!";
  }
  else if (age < 50 && age >= 40 && height > 60 && height <= 63 && eyeColor === "brown" && aspiration === "python") {
    result = username + "you should learn Python!";
  }
  else if (age < 40 && age >= 30 && height > 63 && height <= 66 && eyeColor === "brown" && aspiration === "java") {
    result = username + "you should learn Java!";
  }
  else if (age < 30 && age >= 20 && height > 66 && height <= 69 && eyeColor === "brown" && aspiration === "R") {
    result = username + "you should learn R";
  }
  else if (age <20 && height > 69 && eyeColor === "green" && aspiration === "cSharp") {
    result = username + "you should learn C#!";
  }
  else {
    result = "Womp Womp, coding doesnt seem like it's for you. Maybe try hiking!";
  }

  document.getElementById("output").innerText = result;
} 

window.addEventListener("load", function() {
  const form = document.getElementById("languageSelectorSurvey");
  form.addEventListener("submit", determineLanguage);
})

