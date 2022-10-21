function determineLanguage(event) {
  event.preventDefault();
  const age = parseInt(document.getElementById("inputAge").value)
  const height = parseInt(document.getElementById("inputHeight").value)
  const eyeColor = document.getElementById("inputEyeColor")
  const aspiration = document.getElementById("inputAspiration")

  let result;
  console.log("age" + age)
  console.log("heigt" + height)
  console.log("eyeColor" + eyeColor)
  console.log("aspiration" + aspiration)
  if (age >= 50 || height <= 65 || eyeColor === "Blue" && aspiration === "javaScript") {
    result = "Java Script";
  }
  else if (age < 50 || age > 30 || height > 65 || height < 72 || eyeColor === "Brown" && aspiration === "python") {
    result = "Python"
  }
  else if (age <= 30 || height >= 72 || eyeColor === "Green" && aspiration === "java") {
    result =  "Java"
  }
  else if (aspiration === "R") {
    result = "R"
  }
  else if (aspiration === "cSharp") {
    result = "C#"
  }
  else {
    result = "unfortunately based on your characteristics you shouldn't pick up coding. Maybe try hiking!"
  }

  document.getElementById("output").innerText = result;
} 

window.addEventListener("load", function() {
  const form = document.getElementById("languageSelectorSurvey");
  form.addEventListener("submit", determineLanguage);
})

