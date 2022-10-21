function determineLanguage(event) {
  event.preventDefault();
  const age = parseInt(document.getElementById("inputAge").value)
  const height = parseInt(document.getElementById("inputHeight").value)
  const eyeColor = document.getElementById("inputEyeColor")
  const aspiration = document.getElementById("inputAspiration")
  

  let result;  
  if (age >= 50 && height <= 60 && eyeColor === "blue" && aspiration === "javaScript") {
    result = "the programming language you should learn first is Java Script!";
  }
  else if (age < 50 && age >= 40 || height > 60 && height <= 63 || eyeColor === "Brown" && aspiration === "python") {
    result = "the programming language you should learn first is Python";
  }
  else if (age < 40 && age >= 30 || height > 63 && height <= 66 || eyeColor === "Brown" && aspiration === "java") {
    result =  "the programming language you should learn first is Java";
  }
  else if (age < 30 && age >= 20 || height > 66 && height <= 69 || eyeColor === "Brown" && aspiration === "R") {
    result =  "the programming language you should learn first is R";
  }
  else if (age <20 || height > 69 || eyeColor === "Green" && aspiration === "cSharp") {
    result =  "the programming language you should learn first is C#";
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

