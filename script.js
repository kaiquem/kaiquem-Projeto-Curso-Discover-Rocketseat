function alterLight() {
  // Forma que eu fiz sozinho
  /* const imageProfile = document
    .getElementById("imageProfile")
    .getElementsByTagName("img")[0];
  const htmlTag = document.documentElement;

  var mode=1;
  if (mode == 1 && !htmlTag.classList.contains("light")) {
    mode = 0;
    imageProfile.src = "./assets/avatar-light.png";
    htmlTag.classList.add("light");
  } else {
    mode = 1;
    imageProfile.src = "./assets/avatar.png"; 
    htmlTag.classList.remove("light");
  } */

  // Forma que o curso mostrou
  const html = document.documentElement;
  html.classList.toggle("light");
  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    img.setAttribute("src", "./assets/avatar.png");
  }
}
