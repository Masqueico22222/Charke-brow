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
  autista: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/autista-9DJqc9CmjJgILBBr1J4cytLB4fXEpw.jpeg",
  adriel: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/adriel-qXAMTwnQApjtBD4aGnnhT4PTXy6ZN9.jpeg",
  queiroz: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/queiroz-wSAbOjiL1R7VWDTUVxv5tmk1QbTAOt.jpeg",
  borzuk: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/borzuk-fAEt8KSQ33xsKPqsOH3H8lhMvc1lBh.jpeg",
  cleiton: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cleiton-6FV8Ql6nN8Jni80OiPHf40l9IE6eU3.jpeg",
  lomoska: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lomoska-ogEmn6YTgz4c1gpAUzWZof98nXYAaP.jpeg",
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

  // Usar URL real se disponível, senão usar placeholder
  const imageUrl =
    realImageUrls[name] || `/placeholder.svg?height=200&width=300&query=${encodeURIComponent(name + " photo")}`

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

    // Armazenar informações da imagem com URL real quando disponível
    galleryImages.push({
      name: name,
      url: realImageUrls[name] || `/placeholder.svg?height=600&width=800&query=${encodeURIComponent(name + " photo")}`,
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
