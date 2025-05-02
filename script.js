function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto não encontrada")
  } else {
    // se tiver sem ligth mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto não encontrada")
  }
}

/*shift + alt + A - colocar um bloco em comenatáro*/
/*Alt + Flecha pra cima ou baixo move a linha selecionada */
