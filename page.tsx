"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Users, Camera } from "lucide-react"

const images = [
  {
    name: "leonardo prado trindade",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/autista-0OH1v0DmmRWOgLLF3a40f8ATJyEQf2.jpeg",
  },
  {
    name: "adriel vinicius da luz tomaz",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/adriel-VUuxO6lfikNrU3bQU7gaRFdmapnjfp.jpeg",
  },
  {
    name: "vitor queiroz de brito nascimento",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/queiroz-R2jLjT8EZc5jZYbTquMiszXPosy9sx.jpeg",
  },
  {
    name: "maria eduarda borzuk",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/borzuk-ECbE9cd3Mn8lXBnSUdtWy3SZzZOHYt.jpeg",
  },
  {
    name: "cleiton douglas araujo de souza",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cleiton-nQMxAjjiBf5MXiccb1TTswc3DQZVdn.jpeg",
  },
  {
    name: "victor gabriel de sousa",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lomoska-QuFD1lwZqn0uM3X9i9nt8nroLAc6bM.jpeg",
  },
  {
    name: "joao gabriel jose",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nigga-U6CsX4rtyEeiOW3LKV4SX75rrq3YQJ.jpeg",
  },
  {
    name: "breno ferreira de brito",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ronaldo-Gse9nNpoh7yxh9XCumc6JeAlW4mbQA.jpeg",
  },
  {
    name: "gabriel merico hort",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gabriel-HqiOJtPZ836J5UmESxMu1hfmplHZev.jpeg",
  },
  {
    name: "renan stefani lira",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/renan-4WVX8YTLs8OblRKONNYihZzdkuE9HG.jpeg",
  },
  {
    name: "samantha christaski garcia colucci",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/samantha-1kcTbyfanrBlC2MpgBIFBcuHqJkzO2.jpeg",
  },
  {
    name: "sabrina de oliveira alves",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sabrina-FVZ2KM1St0BuCkJIlEMEAP6OnygGax.jpeg",
  },
  {
    name: "lucas calciolari consolaro dos santos",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lucas%20volt-EexzJD6AkdS9cmDzqRFhBE27wWF83z.jpeg",
  },
  {
    name: "matheus henrrique dos santos lopes",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/matheus%20lopes-OnCIwNH65vpmUBUjNQB3SNOVlt8s1n.jpeg",
  },
  {
    name: "jackson josé adão felix",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chapolinJJ-sUQyBg3fk0WLjPEAtBiSPle3vWixcK.jpeg",
  },
  {
    name: "matheus henrrique de carvalho",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/matheus%20henrrique-TydXQGvzVLPuLzucLHWOFTYzSDwbxj.jpeg",
  },
  {
    name: "gustavo martins lyra",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gustavolyra-gbq4D3BxsL2vbKQRVHGfSf8K3VjmiM.jpeg",
  },
  {
    name: "carlos emanuel da silva",
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carlos-gYvQvIm31RG11B1Z12nTOE89uETrQV.jpeg",
  },
]

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
    }
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox()
    if (e.key === "ArrowLeft") goToPrevious()
    if (e.key === "ArrowRight") goToNext()
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="w-8 h-8" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Galeria de Estudantes</h1>
          </div>
          <div className="flex items-center justify-center gap-2 text-primary-foreground/90">
            <Users className="w-5 h-5" />
            <p className="text-lg md:text-xl">Colégio E. Barbosa Ferraz - Ivaiporá</p>
          </div>
        </div>
      </header>

      <section className="bg-muted py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Momentos Especiais Capturados</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Uma coleção única de fotografias que celebra a diversidade e o talento dos nossos estudantes. Cada imagem
            conta uma história especial.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 bg-card px-6 py-3 rounded-full shadow-sm">
            <span className="text-2xl font-bold text-primary">{images.length}</span>
            <span className="text-muted-foreground">estudantes em destaque</span>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-square overflow-hidden">
                <Image
                  src={image.url || "/placeholder.svg"}
                  alt={image.name}
                  fill
                  className="object-cover transition-all duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="font-semibold text-sm leading-tight capitalize">{image.name}</h3>
              </div>
              <div className="absolute top-3 right-3 bg-primary/90 text-primary-foreground px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Ver foto
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-primary text-primary-foreground py-12 mt-16">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="w-6 h-6" />
            <h3 className="text-xl font-semibold">Galeria de Estudantes</h3>
          </div>
          <p className="text-primary-foreground/80 mb-6">
            Celebrando a diversidade e o talento da nossa comunidade estudantil
          </p>
          <div className="text-sm text-primary-foreground/60">
            © 2024 Colégio E. Barbosa Ferraz - Ivaiporá. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10 bg-black/20 rounded-full p-2 backdrop-blur-sm"
          >
            <X size={24} />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors z-10 bg-black/20 rounded-full p-3 backdrop-blur-sm"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors z-10 bg-black/20 rounded-full p-3 backdrop-blur-sm"
          >
            <ChevronRight size={32} />
          </button>

          {/* Main Image */}
          <div className="relative max-w-5xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[selectedImage].url || "/placeholder.svg"}
              alt={images[selectedImage].name}
              width={1000}
              height={800}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm text-white px-6 py-4 rounded-xl max-w-md">
              <h3 className="text-center capitalize font-semibold text-lg mb-1">{images[selectedImage].name}</h3>
              <p className="text-center text-sm text-white/70">
                Foto {selectedImage + 1} de {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
