// Lista de nomes das imagens
const imageNames = [
  "lomoska",
  "borzuk",
  "queiroz",
  "adriel",
  "cleiton",
  "autista",
  "nigga",
  "ronaldo",
  "gabriel",
  "renan",
  "samantha",
  "sabrina",
  "lucas volt",
  "matheus lopes",
  "chapolinJJ",
  "matheus henrrique",
  "gustavolyra",
]

const realImageUrls = {
  lomoska: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lomoska-QuFD1lwZqn0uM3X9i9nt8nroLAc6bM.jpeg",
  borzuk: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/borzuk-ECbE9cd3Mn8lXBnSUdtWy3SZzZOHYt.jpeg",
  queiroz: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/queiroz-R2jLjT8EZc5jZYbTquMiszXPosy9sx.jpeg",
  adriel: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/adriel-VUuxO6lfikNrU3bQU7gaRFdmapnjfp.jpeg",
  cleiton: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cleiton-nQMxAjjiBf5MXiccb1TTswc3DQZVdn.jpeg",
  autista: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/autista-0OH1v0DmmRWOgLLF3a40f8ATJyEQf2.jpeg",
  nigga: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nigga-U6CsX4rtyEeiOW3LKV4SX75rrq3YQJ.jpeg",
  ronaldo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ronaldo-Gse9nNpoh7yxh9XCumc6JeAlW4mbQA.jpeg",
  gabriel: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gabriel-HqiOJtPZ836J5UmESxMu1hfmplHZev.jpeg",
  renan: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/renan-4WVX8YTLs8OblRKONNYihZzdkuE9HG.jpeg",
  samantha: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/samantha-1kcTbyfanrBlC2MpgBIFBcuHqJkzO2.jpeg",
  sabrina: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sabrina-FVZ2KM1St0BuCkJIlEMEAP6OnygGax.jpeg",
  "lucas volt":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lucas%20volt-EexzJD6AkdS9cmDzqRFhBE27wWF83z.jpeg",
  "matheus lopes":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/matheus%20lopes-OnCIwNH65vpmUBUjNQB3SNOVlt8s1n.jpeg",
  chapolinJJ: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chapolinJJ-sUQyBg3fk0WLjPEAtBiSPle3vWixcK.jpeg",
  "matheus henrrique":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/matheus%20henrrique-TydXQGvzVLPuLzucLHWOFTYzSDwbxj.jpeg",
  gustavolyra:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gustavolyra-gbq4D3BxsL2vbKQRVHGfSf8K3VjmiM.jpeg",
}

// Variáveis globais
let currentImageIndex = 0
const galleryImages = []

// Elementos do DOM
const gallery = document.getElementById("gallery")
const lightbox = document.getElementById("lightbox")
const lightboxImg = document.getElementById("lightboxImg")
const imageName = document.getElementById("imageName")
const imageCounter = document.getElementById("imageCounter")
const closeBtn = document.getElementById("closeBtn")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")

function createGalleryItem(name, index) {
  const galleryItem = document.createElement("div")
  galleryItem.className = "gallery-item"
  galleryItem.setAttribute("data-index", index)

  const imageUrl =
    realImageUrls[name] ||
    `https://via.placeholder.com/300x200/6366f1/ffffff?text=${encodeURIComponent(name.replace(" ", "+"))}`

  galleryItem.innerHTML = `
        <img src="${imageUrl}" alt="${name}" loading="lazy">
        <div class="overlay">
            <h3>${name}</h3>
            <p>Clique para ampliar</p>
        </div>
    `

  // Adicionar evento de clique
  galleryItem.addEventListener("click", () => openLightbox(index))

  return galleryItem
}

function loadGallery() {
  gallery.innerHTML = ""

  imageNames.forEach((name, index) => {
    const galleryItem = createGalleryItem(name, index)
    gallery.appendChild(galleryItem)

    galleryImages.push({
      name: name,
      url:
        realImageUrls[name] ||
        `https://via.placeholder.com/600x400/6366f1/ffffff?text=${encodeURIComponent(name.replace(" ", "+"))}`,
    })
  })
}

// Função para abrir o lightbox
function openLightbox(index) {
  currentImageIndex = index
  updateLightboxContent()
  lightbox.classList.add("active")
  document.body.style.overflow = "hidden"
}

// Função para fechar o lightbox
function closeLightbox() {
  lightbox.classList.remove("active")
  document.body.style.overflow = "auto"
}

// Função para atualizar o conteúdo do lightbox
function updateLightboxContent() {
  const currentImage = galleryImages[currentImageIndex]
  lightboxImg.src = currentImage.url
  lightboxImg.alt = currentImage.name
  imageName.textContent = currentImage.name
  imageCounter.textContent = `${currentImageIndex + 1} de ${galleryImages.length}`
}

// Função para navegar para a próxima imagem
function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length
  updateLightboxContent()
}

// Função para navegar para a imagem anterior
function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length
  updateLightboxContent()
}

// Event Listeners
closeBtn.addEventListener("click", closeLightbox)
nextBtn.addEventListener("click", nextImage)
prevBtn.addEventListener("click", prevImage)

// Fechar lightbox clicando fora da imagem
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox()
  }
})

// Navegação por teclado
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("active")) return

  switch (e.key) {
    case "Escape":
      closeLightbox()
      break
    case "ArrowRight":
      nextImage()
      break
    case "ArrowLeft":
      prevImage()
      break
  }
})

// Suporte para gestos touch em dispositivos móveis
let touchStartX = 0
let touchEndX = 0

lightbox.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX
})

lightbox.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX
  handleSwipe()
})

function handleSwipe() {
  const swipeThreshold = 50
  const diff = touchStartX - touchEndX

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      nextImage() // Swipe left - próxima imagem
    } else {
      prevImage() // Swipe right - imagem anterior
    }
  }
}

// Animação de entrada suave para os itens da galeria
function animateGalleryItems() {
  const items = document.querySelectorAll(".gallery-item")
  items.forEach((item, index) => {
    item.style.opacity = "0"
    item.style.transform = "translateY(20px)"

    setTimeout(() => {
      item.style.transition = "opacity 0.5s ease, transform 0.5s ease"
      item.style.opacity = "1"
      item.style.transform = "translateY(0)"
    }, index * 100)
  })
}

// Inicializar a galeria quando a página carregar
document.addEventListener("DOMContentLoaded", () => {
  loadGallery()

  // Aguardar um pouco para as imagens carregarem antes da animação
  setTimeout(animateGalleryItems, 500)
})

// Lazy loading para melhor performance
function setupLazyLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]')

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.classList.add("loaded")
          observer.unobserve(img)
        }
      })
    })

    images.forEach((img) => imageObserver.observe(img))
  }
}

// Configurar lazy loading após carregar a galeria
setTimeout(setupLazyLoading, 1000)
