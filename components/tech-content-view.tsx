"use client"

import React, { useState, useEffect, useRef } from "react"

const taxTechArticles = [
  {
    title: "Quipu vs Holded vs Conteo: comparativa para autónomos (2026)",
    desc: "Tres filosofías distintas para gestionar tu facturación. Análisis de qué herramienta encaja mejor según tus necesidades.",
    url: "https://conteo.me/blog/quipu-vs-holded-vs-conteo",
    thumb: "https://conteo.me/blog/quipu-vs-holded-vs-conteo/opengraph-image",
  },
  {
    title: "El código QR en tus facturas Verifactu: qué es",
    desc: "Qué contiene el QR obligatorio en las facturas VeriFactu y cómo permite verificar su autenticidad en la AEAT.",
    url: "https://conteo.me/blog/codigo-qr-facturas-verifactu",
    thumb: "https://conteo.me/blog/codigo-qr-facturas-verifactu/opengraph-image",
  },
  {
    title: "Certificado digital y VeriFactu: todo lo que necesitas saber",
    desc: "Por qué necesitas un certificado digital para VeriFactu, cómo obtenerlo gratis y cuánto tiempo tarda el proceso.",
    url: "https://conteo.me/blog/certificado-digital-verifactu",
    thumb: "https://conteo.me/blog/certificado-digital-verifactu/opengraph-image",
  },
  {
    title: "Factura electrónica obligatoria en España (2026)",
    desc: "Todo lo que autónomos y pymes necesitan saber sobre la Ley Crea y Crece y las implicaciones de no cumplir.",
    url: "https://conteo.me/blog/factura-electronica-obligatoria-espana",
    thumb: "https://conteo.me/blog/factura-electronica-obligatoria-espana/opengraph-image",
  },
  {
    title: "Cómo cumplir con VeriFactu siendo autónomo: 5 pasos prácticos",
    desc: "Guía paso a paso para adaptar tu facturación a VeriFactu: desde entender la normativa hasta probar el software antes del plazo.",
    url: "https://conteo.me/blog/como-cumplir-verifactu-autonomo",
    thumb: "https://conteo.me/blog/como-cumplir-verifactu-autonomo/opengraph-image",
  },
]

const healthTechArticles = [
  {
    title: "Risk Factors That Can Impact Your Eye Health",
    desc: "Eye health risks and how to address them proactively, from Medifind's nurse practitioners in Florida.",
    url: "https://medblue.com/risk-factors-that-can-impact-your-eye-health/",
    thumb: "https://medblue.com/wp-content/uploads/2025/06/eye-health-medblue-1024x682.jpg",
  },
  {
    title: "Dental Care Costs in Florida",
    desc: "Covering dental care costs in Florida with and without insurance, including Medicaid pricing.",
    url: "https://medblue.com/dental-care-costs-in-florida/",
    thumb: "https://medblue.com/wp-content/uploads/2025/05/Dental-Care-Costs-Medblue-1024x759.jpg",
  },
  {
    title: "Complete Blood Count (CBC) in Florida",
    desc: "Affordable blood work options from facilities in Fort Lauderdale, as a resource for patients in the area.",
    url: "https://medblue.com/complete-blood-count-cbc-in-florida/",
    thumb: "https://medblue.com/wp-content/uploads/2025/06/Complete_blood_count_Medblue-1024x683.jpg",
  },
  {
    title: "The Importance of Routine Eye Exams",
    desc: "Learn what routine eye exams cover, how often to schedule them, and why they matter long term.",
    url: "https://medblue.com/the-importance-of-routine-eye-exams/",
    thumb: "https://medblue.com/wp-content/uploads/2025/05/Routine-eye-exams-medblue-1024x683.jpg",
  },
  {
    title: "Affordable No Insurance Blood Work",
    desc: "How to access affordable blood tests without insurance coverage across Florida.",
    url: "https://medblue.com/affordable-no-insurance-blood-work/",
    thumb: "https://medblue.com/wp-content/uploads/2025/05/no-insurance-blood-work-medblue-1024x585.jpg",
  },
]

function PdfCoverImage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const render = async () => {
      let pdfjsLib = (window as any)["pdfjs-dist/build/pdf"]
      if (!pdfjsLib) {
        await new Promise<void>((resolve) => {
          const check = setInterval(() => {
            pdfjsLib = (window as any)["pdfjs-dist/build/pdf"]
            if (pdfjsLib) { clearInterval(check); resolve() }
          }, 100)
        })
      }
      if (!containerRef.current) return
      containerRef.current.innerHTML = ""

      const pdf = await pdfjsLib.getDocument("/cio-guide-3-keys.pdf").promise
      const page = await pdf.getPage(1)
      const viewport = page.getViewport({ scale: 2.0 })
      const canvas = document.createElement("canvas")
      canvas.width = viewport.width
      canvas.height = viewport.height
      canvas.style.width = "100%"
      canvas.style.height = "100%"
      canvas.style.objectFit = "cover"
      canvas.style.display = "block"
      containerRef.current.appendChild(canvas)
      await page.render({ canvasContext: canvas.getContext("2d")!, viewport }).promise
    }
    render().catch(console.error)
  }, [mounted])

  return <div ref={containerRef} className="w-full h-full" suppressHydrationWarning />
}

function PdfScrollViewer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const renderAllPages = async (pdfjsLib: any) => {
      if (!containerRef.current) return
      
      // CLEAR existing pages to prevent duplicates in Strict Mode
      containerRef.current.innerHTML = "";
      
      try {
        const pdf = await pdfjsLib.getDocument("/cio-guide-3-keys.pdf").promise
        const totalPages = pdf.numPages

        for (let i = 1; i <= totalPages; i++) {
          const page = await pdf.getPage(i)
          const desiredWidth = containerRef.current!.clientWidth
          const unscaledViewport = page.getViewport({ scale: 1 })
          const scale = desiredWidth / unscaledViewport.width
          const viewport = page.getViewport({ scale })

          const canvas = document.createElement("canvas")
          canvas.width = viewport.width
          canvas.height = viewport.height
          canvas.style.width = "100%"
          canvas.style.height = "auto"
          canvas.style.display = "block"
          containerRef.current!.appendChild(canvas)

          await page.render({ canvasContext: canvas.getContext("2d")!, viewport }).promise
        }
        setLoading(false)
      } catch (err) {
        console.error("PDF Scroll Viewer Error:", err)
        setLoading(false)
      }
    }

    const init = () => {
      const pdfjsLib = (window as any)["pdfjs-dist/build/pdf"]
      if (pdfjsLib) {
        renderAllPages(pdfjsLib)
      } else {
        // Wait for parent or other component to load it
        const check = setInterval(() => {
          const lib = (window as any)["pdfjs-dist/build/pdf"]
          if (lib) {
            clearInterval(check)
            renderAllPages(lib)
          }
        }, 100)
        return () => clearInterval(check)
      }
    }

    init()
  }, [])

  return (
    <div ref={containerRef} className="w-full">
      {loading && (
        <div className="flex items-center justify-center py-20">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            <p className="text-sm text-gray-400">Loading E-Book...</p>
          </div>
        </div>
      )}
    </div>
  )
}

export function TechContentView() {
  // Pre-AI Era Carousel Logic
  const carTrackRef = useRef<HTMLDivElement>(null)
  const [carIdx, setCarIdx] = useState(0)
  const [carTranslate, setCarTranslate] = useState(0)
  const [isArticleModalOpen, setIsArticleModalOpen] = useState(false)
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false)
  const [activeIframeUrl, setActiveIframeUrl] = useState<string | null>(null)

  useEffect(() => {
    const updateCar = () => {
      if (!carTrackRef.current || !carTrackRef.current.parentElement) return
      // The Spec dictates 88% width per slide + 14px margin
      const w = carTrackRef.current.parentElement.offsetWidth * 0.88 + 14
      setCarTranslate(carIdx * w)
    }
    updateCar()
    window.addEventListener("resize", updateCar)
    return () => window.removeEventListener("resize", updateCar)
  }, [carIdx])

  const handleNextCar = () => setCarIdx((prev) => Math.min(1, prev + 1))
  const handlePrevCar = () => setCarIdx((prev) => Math.max(0, prev - 1))

  // Pre-load PDF.js for the modal viewer
  useEffect(() => {
    const scriptSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"
    let script = document.querySelector(`script[src="${scriptSrc}"]`) as HTMLScriptElement

    if (!script) {
      script = document.createElement("script")
      script.src = scriptSrc
      script.async = true
      document.body.appendChild(script)
    }

    const onLoad = () => {
      const pdfjsLib = (window as any)["pdfjs-dist/build/pdf"]
      if (pdfjsLib) {
        pdfjsLib.GlobalWorkerOptions.workerSrc =
          "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js"
      }
    }

    if ((window as any)["pdfjs-dist/build/pdf"]) {
      onLoad()
    } else {
      script.addEventListener("load", onLoad)
    }

    return () => { script.removeEventListener("load", onLoad) }
  }, [])


  return (
    <div className="space-y-12">
      {/* Pre-AI Era Section */}
      <section>
        <div className="era-rule">
          <span className="era-rule-label">Pre-AI era</span>
        </div>

        <div className="relative group">
          {/* Left Arrow */}
          <div 
            className={`absolute left-2 lg:-left-6 xl:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-background-primary)] border border-[var(--color-border-tertiary)] shadow-md transition-all text-[var(--color-text-secondary)] ${carIdx === 0 ? "opacity-0 pointer-events-none" : "cursor-pointer hover:bg-[var(--color-background-secondary)]"}`}
            onClick={handlePrevCar}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </div>
          
          <div className="carousel-outer">
            <div
            className="carousel-track"
            id="carTrack"
            ref={carTrackRef}
            style={{ transform: `translateX(-${carTranslate}px)` }}
          >
            <div className="carousel-slide">
              <div 
                className="c-card relative group/card cursor-pointer overflow-hidden border border-[var(--color-border-tertiary)] bg-[var(--color-background-tertiary)] h-full min-h-[360px] sm:min-h-[420px]"
                onClick={() => setIsPdfModalOpen(true)}
                title="Click to view full Deck"
              >
                <div className="w-full h-full absolute inset-0 bg-black">
                  <PdfCoverImage />
                </div>

                {/* Information Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex flex-col justify-end p-6 md:p-8 opacity-100 group-hover/card:opacity-0 transition-opacity duration-300 z-20 pointer-events-none">
                  <div className="mb-4">
                    <div className="mb-2">
                      <span className="bg-white text-black px-2.5 py-1 rounded-full text-[10px] font-extrabold tracking-widest uppercase shadow-sm">
                        E-Book
                      </span>
                    </div>
                    <p className="text-white text-xl sm:text-2xl font-bold leading-snug drop-shadow-md">Practical Guide: 3 Keys to Overcoming the Main Challenges Faced by CIOs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2: Related Article */}
            <div className="carousel-slide">
              <div 
                className="c-card relative group/card cursor-pointer overflow-hidden border border-[var(--color-border-tertiary)] h-full min-h-[360px] sm:min-h-[420px]"
                onClick={() => setIsArticleModalOpen(true)}
                title="Click to read full article"
              >
                <div className="w-full h-full bg-zinc-800 absolute inset-0">
                  <img
                    src="/67d2f2aec11554d951962758_Gestion-de-activos-empresariales.jpeg"
                    alt="EAM article cover"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                  />
                </div>

                {/* Information Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex flex-col justify-end p-6 md:p-8 opacity-100 group-hover/card:opacity-0 transition-opacity duration-300 z-20 pointer-events-none">
                  <div>
                    <div className="mb-2">
                      <span className="bg-white text-black px-2.5 py-1 rounded-full text-[10px] font-extrabold tracking-widest uppercase shadow-sm">
                        Related Article
                      </span>
                    </div>
                    <p className="text-white text-xl sm:text-2xl font-bold leading-snug drop-shadow-md">EAM: 3 Keys to Understanding Enterprise Asset Management</p>
                    <p className="text-gray-200 mt-3 text-sm line-clamp-3 drop-shadow-sm">
                      An overview of how enterprises use asset management to drive efficiency and strategic value across
                      operations and infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          
        {/* Right Arrow */}
        <div 
          className={`absolute right-2 lg:-right-6 xl:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-background-primary)] border border-[var(--color-border-tertiary)] shadow-md transition-all text-[var(--color-text-secondary)] ${carIdx === 1 ? "opacity-0 pointer-events-none" : "cursor-pointer hover:bg-[var(--color-background-secondary)]"}`}
          onClick={handleNextCar}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </div>
      </div>

        {/* Carousel Indicators */}
        <div className="carousel-controls justify-center">
          <div className="car-dots">
            <div className={`car-dot cursor-pointer ${carIdx === 0 ? "on" : ""}`} onClick={() => setCarIdx(0)}></div>
            <div className={`car-dot cursor-pointer ${carIdx === 1 ? "on" : ""}`} onClick={() => setCarIdx(1)}></div>
          </div>
        </div>
      </section>

      {/* AI-Assisted Blog Articles Section */}
      <section>
        <div className="ai-section-head">
          <span className="ai-section-title">AI-Assisted Blog Articles</span>
          <span className="ai-badge">
            <span className="ai-dot"></span>AI-assisted
          </span>
        </div>
        <p className="ai-section-sub">Contenido producido con asistencia de IA en dos nichos.</p>

        {/* Tax Tech Items */}
        <div className="era-rule">
          <span className="era-rule-label">Tax Tech</span>
        </div>
        <div className="flex flex-col gap-3">
          {taxTechArticles.map((article, idx) => (
            <div 
              className="card cursor-pointer transition-colors hover:bg-[var(--color-background-tertiary)]" 
              key={idx}
              onClick={() => setActiveIframeUrl(article.url)}
              title="Read Article"
            >
              <div className="card-thumb rounded-md overflow-hidden bg-zinc-800 flex items-center justify-center">
                <img 
                  src="/conteo-icon.svg" 
                  alt="Conteo"
                  className="w-8 h-8 opacity-70"
                />
              </div>
              <div className="card-body flex-1">
                <p className="card-title">{article.title}</p>
                <p className="card-desc mb-2">{article.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Health Tech Items */}
        <div className="era-rule" style={{ marginTop: "2rem" }}>
          <span className="era-rule-label">Health Tech</span>
        </div>
        <div className="flex flex-col gap-3">
          {healthTechArticles.map((article, idx) => (
            <div 
              className="card cursor-pointer transition-colors hover:bg-[var(--color-background-tertiary)]" 
              key={idx}
              onClick={() => setActiveIframeUrl(article.url)}
              title="Read Article"
            >
              <div className="card-thumb rounded-md overflow-hidden bg-zinc-800 flex items-center justify-center">
                <img 
                  src={article.thumb} 
                  alt={article.title}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="card-body flex-1">
                <p className="card-title">{article.title}</p>
                <p className="card-desc mb-2">{article.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Article Modal */}
      {isArticleModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6" 
          onClick={() => setIsArticleModalOpen(false)}
        >
          <div 
            className="w-full max-w-5xl h-full max-h-[90vh] bg-[var(--color-background-primary)] rounded-2xl overflow-hidden flex flex-col relative" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border-tertiary)] bg-[var(--color-background-secondary)]">
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">EAM: 3 Keys to Understanding Enterprise Asset Management</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">gb-advisors.com</p>
              </div>
              <button 
                onClick={() => setIsArticleModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--color-background-tertiary)] hover:bg-zinc-700 transition-colors text-[var(--color-text-secondary)] hover:text-white"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            {/* Modal Content - Native Article Rendering */}
            <div className="flex-1 w-full relative bg-[var(--color-background-primary)] overflow-y-auto px-6 py-8 md:px-12 md:py-12">
              <div className="max-w-3xl mx-auto">
                <img 
                  src="/67d2f2aec11554d951962758_Gestion-de-activos-empresariales.jpeg" 
                  alt="EAM Cover" 
                  className="w-full h-auto rounded-xl mb-8 border border-[var(--color-border-tertiary)]"
                />
                
                <h2 className="text-2xl font-bold mt-8 mb-4 text-[var(--color-text-primary)]">1. What is EAM?</h2>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  Also known as Enterprise Asset Management, EAM comprises a set of software solutions, processes, and systems brought together in an application used to manage an organization's physical assets.
                </p>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  All of this is condensed into software that allows the lifecycle of enterprise assets to be managed from one place, from planning, maintenance, repair, operations, associated labor management, and even the financial aspect related to asset management.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-[var(--color-text-primary)]">2. What is the purpose of EAM?</h2>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  Organizations with robust cloud infrastructures and networks of assets to monitor can leverage EAM software to:
                </p>
                <ul className="list-disc pl-5 mb-6 space-y-2 text-[var(--color-text-secondary)]">
                  <li>Centralize asset management.</li>
                  <li>Optimize asset usage and maintenance.</li>
                  <li>Improve operational efficiency.</li>
                  <li>Reduce costs.</li>
                  <li>Extend the useful life of assets.</li>
                </ul>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  In addition, another benefit of using EAM software in an organization such as the one described above is improved visibility into everything related to the company's assets.
                  <br/><br/>
                  For example, with EAM software, asset managers can access the information they need about the entire lifecycle of the organization's assets.
                  <br/><br/>
                  In addition, they will be able to monitor in real-time the status of each asset to optimize their use. Moreover, this helps to comply with regulations such as ISO 55000.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-[var(--color-text-primary)]">3. How do all these EAM concepts apply in the real business world?</h2>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  We will take as examples 2 different industrial sectors:
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-3 text-[var(--color-text-primary)]">Manufacturing</h3>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  One of the biggest challenges for companies in this sector is to manage the large number of assets they handle.
                  <br/><br/>
                  <strong className="text-[var(--color-text-primary)]">What kind of assets does a manufacturing company manage?</strong>
                  <br/>
                  Depending on the organization's niche, a manufacturing company will need to manage equipment dedicated to production (e.g., CNC machines, lathes, milling machines, stamping machines, or plastic injection molding machines).
                  <br/><br/>
                  In addition to this dedicated production machinery, there are other assets such as material handling machinery (cranes or forklifts), as well as transport vehicles or IT hardware.
                  <br/><br/>
                  This is only a fraction of all the assets that a manufacturing company has.
                  This is the main reason to keep an eye on all these assets, as poor management of aspects such as maintenance can wreak havoc on operations.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-3 text-[var(--color-text-primary)]">Healthcare</h3>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  In the case of healthcare institutions, EAM software can help make the difference between quality service and poor service.
                  <br/><br/>
                  Why? Because having this type of solution simultaneously covers three vital areas of any healthcare service:
                </p>
                <ul className="list-disc pl-5 mb-6 space-y-2 text-[var(--color-text-secondary)]">
                  <li>Availability</li>
                  <li>Resource management</li>
                </ul>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-12">
                  In terms of availability, EAM software can help ensure the complete availability of all available assets. How does it accomplish it? With and resources by facilitating real-time monitoring.
                  <br/><br/>
                  With this, this data can be used to stipulate the regularity of maintenance of these assets to prevent them from failing and the service from being affected.
                  <br/><br/>
                  On the other hand, having EAM software allows, for example, monitoring the utilization of any of the equipment in operation. In this way, they can analyze usage patterns, and reuse or relocate equipment to areas that need it.
                  <br/><br/>
                  By tracking usage data, facilities can identify underutilized equipment and make informed decisions about replacement or redeployment. This approach can help reduce costs and improve the quality of health services for customers.
                </p>

                <h3 className="text-xl font-semibold mt-10 mb-3 text-[var(--color-text-primary)]">Why consider EAM for your organization?</h3>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  Having EAM software brings organizations closer to the operational efficiency they have always sought.
                  <br/><br/>
                  From this operational standpoint, Enterprise Asset Management helps to:
                </p>
                <ul className="list-disc pl-5 mb-6 space-y-2 text-[var(--color-text-secondary)]">
                  <li>Enables the management of large amounts of assets without requiring more human talent.</li>
                  <li>Optimize how all phases of the asset lifecycle are managed.</li>
                  <li>Helps cut any detrimental costs caused by asset misuse.</li>
                </ul>
                <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-12">
                  Things like real-time monitoring of each asset provided by the analysis of data provided by the system helps with asset maintenance.
                  <br/><br/>
                  As a result of using EAM software, any company gets into a context where they can safeguard business continuity, use resources efficiently, and strengthen their operations in times of uncertainty.
                  <br/><br/>
                  If you want to know more in detail how to improve the efficiency of processes in your organization, contact us and learn how you can take this and bring it to your company through software.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PDF Viewer — Scrollable pdf.js Rendered Deck */}
      {isPdfModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6" 
          onClick={() => setIsPdfModalOpen(false)}
        >
          <div 
            className="w-full max-w-5xl h-full max-h-[90vh] bg-[var(--color-background-primary)] rounded-2xl overflow-hidden flex flex-col relative" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border-tertiary)] bg-[var(--color-background-secondary)] shrink-0">
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Practical Guide: 3 Keys to Overcoming the Main Challenges Faced by CIOs</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">E-Book</p>
              </div>
              <button 
                onClick={() => setIsPdfModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--color-background-tertiary)] hover:bg-zinc-700 transition-colors text-[var(--color-text-secondary)] hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 w-full bg-zinc-900 overflow-y-auto">
              <PdfScrollViewer />
            </div>
          </div>
        </div>
      )}

      {/* Embedded Iframe Viewer for AI Blogs */}
      {activeIframeUrl && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6" 
          onClick={() => setActiveIframeUrl(null)}
        >
          <div 
            className="w-full max-w-5xl h-full max-h-[90vh] bg-[var(--color-background-primary)] rounded-2xl overflow-hidden flex flex-col relative" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border-tertiary)] bg-[var(--color-background-secondary)] shrink-0">
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Article Preview</h3>
              </div>
              <button 
                onClick={() => setActiveIframeUrl(null)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--color-background-tertiary)] hover:bg-zinc-700 transition-colors text-[var(--color-text-secondary)] hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 w-full relative bg-white overflow-hidden">
              <iframe 
                src={activeIframeUrl} 
                className="absolute inset-0 w-full h-full border-0"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                title="Blog Preview"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
