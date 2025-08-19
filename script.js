const imageNames = [
  "victor gabriel de sousa",
  "maria eduarda borzuk",
  "vitor queiroz de brito nascimento",
  "adriel vinicius da luz tomaz",
  "cleiton douglas araujo de souza",
  "leonardo prado trindade",
  "joao gabriel jose",
  "breno ferreira de brito",
  "gabriel merico hort",
  "renan stefani lira",
  "samantha christaski garcia colucci",
  "sabrina de oliveira alves",
  "lucas calciolari consolaro dos santos",
  "matheus henrrique dos santos lopes",
  "jackson josé adão felix",
  "matheus henrrique de carvalho",
  "gustavo martins lyra",
  "carlos emanuel da silva",
]

let currentImageIndex = 0
let isLightboxOpen = false

function openLightbox(index) {
  currentImageIndex = index
  isLightboxOpen = true

  const lightbox = document.getElementById("lightbox")
  const lightboxImg = document.getElementById("lightboxImg")
  const imageName = document.getElementById("imageName")
  const imageCounter = document.getElementById("imageCounter")

  const galleryItem = document.querySelector(`[data-index="${index}"]`)
  const img = galleryItem.querySelector("img")

  lightboxImg.src = img.src
  imageName.textContent = imageNames[index]
  imageCounter.textContent = `${index + 1} / ${imageNames.length}`

  lightbox.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeLightbox() {
  isLightboxOpen = false
  const lightbox = document.getElementById("lightbox")
  lightbox.classList.remove("active")
  document.body.style.overflow = "auto"
}

function navigateLightbox(direction) {
  if (!isLightboxOpen) return

  if (direction === "next") {
    currentImageIndex = (currentImageIndex + 1) % imageNames.length
  } else {
    currentImageIndex = (currentImageIndex - 1 + imageNames.length) % imageNames.length
  }

  const lightboxImg = document.getElementById("lightboxImg")
  const imageName = document.getElementById("imageName")
  const imageCounter = document.getElementById("imageCounter")

  const galleryItem = document.querySelector(`[data-index="${currentImageIndex}"]`)
  const img = galleryItem.querySelector("img")

  lightboxImg.src = img.src
  imageName.textContent = imageNames[currentImageIndex]
  imageCounter.textContent = `${currentImageIndex + 1} / ${imageNames.length}`
}

document.addEventListener("DOMContentLoaded", () => {
  // Adicionar event listeners para as imagens da galeria
  const galleryItems = document.querySelectorAll(".gallery-item")
  galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => openLightbox(index))
  })

  // Lightbox controls com IDs corretos
  document.getElementById("closeBtn").onclick = closeLightbox
  document.getElementById("prevBtn").onclick = () => navigateLightbox("prev")
  document.getElementById("nextBtn").onclick = () => navigateLightbox("next")

  // Fechar lightbox clicando no fundo
  document.getElementById("lightbox").onclick = function (e) {
    if (e.target === this) {
      closeLightbox()
    }
  }

  // Navegação por teclado
  document.addEventListener("keydown", (e) => {
    if (!isLightboxOpen) return

    switch (e.key) {
      case "Escape":
        closeLightbox()
        break
      case "ArrowLeft":
        navigateLightbox("prev")
        break
      case "ArrowRight":
        navigateLightbox("next")
        break
    }
  })

  // Suporte a gestos touch para dispositivos móveis
  let touchStartX = 0
  let touchEndX = 0

  document.getElementById("lightboxImg").addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX
  })

  document.getElementById("lightboxImg").addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX
    handleSwipe()
  })

  function handleSwipe() {
    const swipeThreshold = 50
    const diff = touchStartX - touchEndX

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        navigateLightbox("next")
      } else {
        navigateLightbox("prev")
      }
    }
  }
})
