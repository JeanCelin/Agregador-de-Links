function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  const textLight =
    "Susy com os olhos fechados por causa da claridade, deitada na grama."
  const textDark =
    "Foto da Susy sorrindo, com seus pelos brancos, em frente à uma parede marrom."
  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", textLight)
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", textDark)
  }
}
