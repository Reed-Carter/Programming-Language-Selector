
function determineLanguage(event) {
  event.preventDefault();
  const age = parseInt(document.getElementById("inputAge").value);
  const height = parseInt(document.getElementById("inputHeight").value);
  const eyeColor = document.getElementById("inputEyeColor").value;
  const aspiration = document.getElementById("inputAspiration").value;
  
  let result;  
  console.log("eyeColor" + eyeColor)
  console.log("aspiration" + aspiration)
  if (age >= 50 && height <= 60 && eyeColor === "blue" && aspiration === "javaScript") {
    result = "Java Script!";
  }
  else if (age < 50 && age >= 40 || height > 60 && height <= 63 || eyeColor === "brown" && aspiration === "python") {
    result = "Python";
  }
  else if (age < 40 && age >= 30 || height > 63 && height <= 66 || eyeColor === "brown" && aspiration === "java") {
    result =  "Java";
  }
  else if (age < 30 && age >= 20 || height > 66 && height <= 69 || eyeColor === "brown" && aspiration === "R") {
    result =  "R";
  }
  else if (age <20 || height > 69 || eyeColor === "green" && aspiration === "cSharp") {
    result =  "C#";
  }
  else {
    result = "Unfortunately based on your characteristics you shouldn't pick up coding. Maybe try hiking!";
  }

  document.getElementById("output").innerText = result;
} 

window.addEventListener("load", function() {
  const form = document.getElementById("languageSelectorSurvey");
  form.addEventListener("submit", determineLanguage);
})

