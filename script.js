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

// URLs reais das imagens fornecidas pelo usuário
const realImageUrls = {
  "victor gabriel de sousa":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lomoska-QuFD1lwZqn0uM3X9i9nt8nroLAc6bM.jpeg",
  "maria eduarda borzuk":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/borzuk-ECbE9cd3Mn8lXBnSUdtWy3SZzZOHYt.jpeg",
  "vitor queiroz de brito nascimento":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/queiroz-R2jLjT8EZc5jZYbTquMiszXPosy9sx.jpeg",
  "adriel vinicius da luz tomaz":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/adriel-VUuxO6lfikNrU3bQU7gaRFdmapnjfp.jpeg",
  "cleiton douglas araujo de souza":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cleiton-nQMxAjjiBf5MXiccb1TTswc3DQZVdn.jpeg",
  "leonardo prado trindade":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/autista-0OH1v0DmmRWOgLLF3a40f8ATJyEQf2.jpeg",
  "joao gabriel jose":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nigga-U6CsX4rtyEeiOW3LKV4SX75rrq3YQJ.jpeg",
  "breno ferreira de brito":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ronaldo-Gse9nNpoh7yxh9XCumc6JeAlW4mbQA.jpeg",
  "gabriel merico hort":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gabriel-HqiOJtPZ836J5UmESxMu1hfmplHZev.jpeg",
  "renan stefani lira":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/renan-4WVX8YTLs8OblRKONNYihZzdkuE9HG.jpeg",
  "samantha christaski garcia colucci":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/samantha-1kcTbyfanrBlC2MpgBIFBcuHqJkzO2.jpeg",
  "sabrina de oliveira alves":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sabrina-FVZ2KM1St0BuCkJIlEMEAP6OnygGax.jpeg",
  "lucas calciolari consolaro dos santos":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lucas%20volt-EexzJD6AkdS9cmDzqRFhBE27wWF83z.jpeg",
  "matheus henrrique dos santos lopes":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/matheus%20lopes-OnCIwNH65vpmUBUjNQB3SNOVlt8s1n.jpeg",
  "jackson josé adão felix":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chapolinJJ-sUQyBg3fk0WLjPEAtBiSPle3vWixcK.jpeg",
  "matheus henrrique de carvalho":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/matheus%20henrrique-TydXQGvzVLPuLzucLHWOFTYzSDwbxj.jpeg",
  "gustavo martins lyra":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gustavolyra-gbq4D3BxsL2vbKQRVHGfSf8K3VjmiM.jpeg",
  "carlos emanuel da silva":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carlos-gYvQvIm31RG11B1Z12nTOE89uETrQV.jpeg",
}

let currentImageIndex = 0
let isLightboxOpen = false

// Função para obter URL da imagem (real ou placeholder)
function getImageUrl(name) {
  if (realImageUrls[name]) {
    return realImageUrls[name]
  }
  return `https://via.placeholder.com/300x200/6366f1/ffffff?text=${encodeURIComponent(name)}`
}

// Função para criar a galeria
function createGallery() {
  const gallery = document.getElementById("gallery")
  gallery.innerHTML = ""

  imageNames.forEach((name, index) => {
    const imageContainer = document.createElement("div")
    imageContainer.className = "image-container"

    const img = document.createElement("img")
    img.src = getImageUrl(name)
    img.alt = name
    img.loading = "lazy"
    img.onclick = () => openLightbox(index)

    const nameOverlay = document.createElement("div")
    nameOverlay.className = "image-name"
    nameOverlay.textContent = name

    imageContainer.appendChild(img)
    imageContainer.appendChild(nameOverlay)
    gallery.appendChild(imageContainer)
  })
}

// Função para abrir o lightbox
function openLightbox(index) {
  currentImageIndex = index
  isLightboxOpen = true

  const lightbox = document.getElementById("lightbox")
  const lightboxImg = document.getElementById("lightbox-img")
  const lightboxName = document.getElementById("lightbox-name")

  lightboxImg.src = getImageUrl(imageNames[index])
  lightboxName.textContent = imageNames[index]
  lightbox.style.display = "flex"
  document.body.style.overflow = "hidden"
}

// Função para fechar o lightbox
function closeLightbox() {
  isLightboxOpen = false
  const lightbox = document.getElementById("lightbox")
  lightbox.style.display = "none"
  document.body.style.overflow = "auto"
}

// Função para navegar no lightbox
function navigateLightbox(direction) {
  if (!isLightboxOpen) return

  if (direction === "next") {
    currentImageIndex = (currentImageIndex + 1) % imageNames.length
  } else {
    currentImageIndex = (currentImageIndex - 1 + imageNames.length) % imageNames.length
  }

  const lightboxImg = document.getElementById("lightbox-img")
  const lightboxName = document.getElementById("lightbox-name")

  lightboxImg.src = getImageUrl(imageNames[currentImageIndex])
  lightboxName.textContent = imageNames[currentImageIndex]
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  createGallery()

  // Lightbox controls
  document.getElementById("close-btn").onclick = closeLightbox
  document.getElementById("prev-btn").onclick = () => navigateLightbox("prev")
  document.getElementById("next-btn").onclick = () => navigateLightbox("next")

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

  document.getElementById("lightbox-img").addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX
  })

  document.getElementById("lightbox-img").addEventListener("touchend", (e) => {
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
