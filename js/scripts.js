function determineLanguage(event) {
  event.preventDefault();
  const age = parseInt(document.getElementById("inputAge").value)
  const height = parseInt(document.getElementById("inputHeight").value)
  //const eyeColor = document.getElementById("inputEyeColor").value

  let result;
  console.log("age" + age)
  console.log("heigt" + height)
  console.log("eyeColor" + eyeColor)
  if (age >= 50 || height <= 65) {
    result = "Rust";
  }

  document.getElementById("output").innerText = result;
} 

window.addEventListener("load", function() {
  const form = document.getElementById("languageSelectorSurvey");
  form.addEventListener("submit", determineLanguage);
})

